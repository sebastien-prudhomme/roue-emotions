import PDFDocument from 'pdfkit/js/pdfkit.standalone'
import blobStream from 'blob-stream'
import fileSaver from 'file-saver'
import { Platform } from 'quasar'
import { fetch } from 'whatwg-fetch'
import { i18n } from '../boot/i18n'

const pageSizes = {
  a4: {
    pageWidth: cmToPt(21),
    pageHeight: cmToPt(29.7)
  },
  letter: {
    pageWidth: cmToPt(21.59),
    pageHeight: cmToPt(27.94)
  }
}

const pageMargin = cmToPt(1)

const fontSize = 10

const wheelMargin = cmToPt(0.1)
const wheelRatio = 0.16

function cmToPt (cm) {
  return cm / 2.54 * 72
}

function radToDeg (rad) {
  return rad / Math.PI * 180
}

function wheelOfTexts (doc, texts, outerRadius, innerRadius) {
  doc.circle(0, 0, outerRadius).stroke()

  const angle = 2 * Math.PI / texts.length

  const textLineHeight = doc.currentLineHeight(true)
  const textRadius = (innerRadius + outerRadius) / 2 - textLineHeight

  //               /textLineWidth\
  //               |-------------| + wheelMargin
  //     /angle\   \      2      /
  // tan |-----| = -----------------------------
  //     \  2  /            textRadius
  const textLineWidth = 2 * (textRadius * Math.tan(angle / 2) - wheelMargin)

  for (let i = 0; i < texts.length; i++) {
    doc.save()
    doc.rotate(radToDeg(angle * (i - 0.5)))
    doc.polygon([0, 0], [0, outerRadius]).stroke()
    doc.restore()

    const textOptions = { width: textLineWidth, align: 'center' }
    const textHeight = doc.heightOfString(texts[i], textOptions)

    doc.save()
    doc.rotate(radToDeg(angle * i))
    doc.translate(-textLineWidth / 2, (innerRadius + outerRadius - textHeight) / 2)
    doc.text(texts[i], 0, 0, textOptions)
    doc.restore()
  }
}

async function wheelOfIconsTexts (doc, iconsTexts, outerRadius, innerRadius) {
  const texts = iconsTexts.map(iconText => iconText.text)
  const icons = iconsTexts.map(iconText => iconText.icon.replace(/^img:/, ''))

  wheelOfTexts(doc, texts, outerRadius, innerRadius)

  const angle = 2 * Math.PI / icons.length

  const textLineHeight = doc.currentLineHeight(true)

  // iconWidth = iconHeight
  //
  //               outerRadius - innerRadius   textLineHeight
  // innerRadius + ------------------------- - -------------- = iconRadius + iconHeight
  //                           2                      2
  //
  //               /iconWidth\
  //               |---------| + wheelMargin
  //     /angle\   \    2    /
  // tan |-----| = -------------------------
  //     \  2  /          iconRadius
  const iconWidth = (Math.tan(angle / 2) * (innerRadius + (outerRadius - innerRadius) / 2 - textLineHeight / 2) - wheelMargin) / (Math.tan(angle / 2) + 0.5)
  const iconHeight = iconWidth

  for (let i = 0; i < icons.length; i++) {
    const iconResponse = await (Platform.is.cordova ? fetch : window.fetch)(icons[i])
    const iconBuffer = await iconResponse.arrayBuffer()
    const iconOptions = { width: iconWidth, height: iconHeight }

    doc.save()
    doc.rotate(radToDeg(angle * i))
    doc.translate(-iconWidth / 2, innerRadius + (outerRadius - innerRadius) / 2 - textLineHeight / 2 - iconHeight)
    doc.image(iconBuffer, 0, 0, iconOptions)
    doc.restore()
  }
}

function wheelCache (doc, emotions, needs, actions, wheelRadius) {
  const innerRadius = wheelRadius * wheelRatio
  const outerRadius = wheelRadius * (1 + wheelRatio)
  const crossSize = cmToPt(0.2)

  const angle = 2 * Math.max(2 * Math.PI / actions.length, 2 * Math.PI / needs.length, 2 * Math.PI / emotions.length)

  //     /angle\    innerArcX
  // cos |-----| = -----------
  //     \  2  /   innerRadius
  const innerArcX = Math.cos(angle / 2) * innerRadius

  //     /angle\    innerArcY
  // sin |-----| = -----------
  //     \  2  /   innerRadius
  const innerArcY = Math.sin(angle / 2) * innerRadius

  let path = `M ${-innerArcX} ${-innerArcY} A ${innerRadius} ${innerRadius} 0 0 1 ${innerArcX} ${-innerArcY}`

  //            2              2             2
  // outerRadius  = innerRadius  + lineLength
  const lineLength = Math.sqrt(outerRadius ** 2 - innerRadius ** 2)

  //     /angle\   outerArcX - innerArcX
  // sin |-----| = ---------------------
  //     \  2  /        lineLength
  const outerArcX = innerArcX + lineLength * Math.sin(angle / 2)

  //     /angle\   outerArcY + innerArcY
  // cos |-----| = ---------------------
  //     \  2  /        lineLength
  const outerArcY = -innerArcY + lineLength * Math.cos(angle / 2)

  path += ` L ${outerArcX} ${outerArcY}`
  path += ` A ${outerRadius} ${outerRadius} 0 0 1 ${-outerArcX} ${outerArcY} Z`

  doc.save()
  doc.path(path).fill('#fff176')
  doc.restore()

  doc.polygon([-crossSize / 2, 0], [crossSize / 2, 0]).stroke()
  doc.polygon([0, -crossSize / 2], [0, crossSize / 2]).stroke()
}

function wheelCacheOfTexts (doc, texts, outerRadius, innerRadius, label) {
  const angle = 2 * Math.PI / texts.length

  const textLineHeight = doc.currentLineHeight(true)
  const textRadius = (innerRadius + outerRadius) / 2 - textLineHeight

  //               /textLineWidth\
  //               |-------------| + wheelMargin
  //     /angle\   \      2      /
  // tan |-----| = -----------------------------
  //     \  2  /            textRadius
  const textLineWidth = 2 * (textRadius * Math.tan(angle / 2) - wheelMargin)

  doc.save()
  doc.translate(-textLineWidth / 2, (innerRadius + outerRadius) / 2 - textLineHeight)
  doc.rect(-wheelMargin, -wheelMargin, textLineWidth + 2 * wheelMargin, 2 * textLineHeight + 2 * wheelMargin).fill('white')
  doc.restore()

  const textWidth = doc.widthOfString(label)

  doc.save()
  doc.translate(-textLineWidth / 2 - 2 * wheelMargin - textWidth, (innerRadius + outerRadius - textLineHeight) / 2)
  doc.text(label, 0, 0)
  doc.restore()
}

function wheelCacheOfIconsTexts (doc, iconsTexts, outerRadius, innerRadius, label) {
  const angle = 2 * Math.PI / iconsTexts.length

  const textLineHeight = doc.currentLineHeight(true)
  const textRadius = (innerRadius + outerRadius) / 2 - textLineHeight

  //               /textLineWidth\
  //               |-------------| + wheelMargin
  //     /angle\   \      2      /
  // tan |-----| = -----------------------------
  //     \  2  /            textRadius
  const textLineWidth = 2 * (textRadius * Math.tan(angle / 2) - wheelMargin)

  // iconWidth = iconHeight
  //
  //               outerRadius - innerRadius   textLineHeight
  // innerRadius + ------------------------- - -------------- = iconRadius + iconHeight
  //                           2                      2
  //
  //               /iconWidth\
  //               |---------| + wheelMargin
  //     /angle\   \    2    /
  // tan |-----| = -------------------------
  //     \  2  /          iconRadius
  const iconWidth = (Math.tan(angle / 2) * (innerRadius + (outerRadius - innerRadius) / 2 - textLineHeight / 2) - wheelMargin) / (Math.tan(angle / 2) + 0.5)
  const iconHeight = iconWidth

  let path = `M ${-textLineWidth / 2 - wheelMargin} ${(innerRadius + outerRadius) / 2 + textLineHeight + wheelMargin}`
  path += ` v ${-2 * textLineHeight - 2 * wheelMargin}`
  path += ` L ${-iconWidth / 2 - wheelMargin} ${innerRadius + (outerRadius - innerRadius) / 2 - textLineHeight / 2 - iconHeight - wheelMargin}`
  path += ` h ${iconWidth + 2 * wheelMargin}`
  path += ` L ${textLineWidth / 2 + wheelMargin} ${(innerRadius + outerRadius) / 2 - textLineHeight - wheelMargin}`
  path += ` v ${2 * textLineHeight + 2 * wheelMargin} Z`

  doc.save()
  doc.path(path).fill('white')
  doc.restore()

  const textWidth = doc.widthOfString(label)

  doc.save()
  doc.translate(-textLineWidth / 2 - 2 * wheelMargin - textWidth, (innerRadius + outerRadius - textLineHeight) / 2)
  doc.text(label, 0, 0)
  doc.restore()
}

export default async function (emotions, needs, actions, fileName, paperSize) {
  const pageWidth = pageSizes[paperSize].pageWidth
  const pageHeight = pageSizes[paperSize].pageHeight

  const wheelRadius = Math.min(pageWidth, pageHeight) / 2 - pageMargin

  const actionsRadius = wheelRadius
  const needsRadius = wheelRadius * (1 - wheelRatio)
  const emotionsRadius = wheelRadius * (1 - 2 * wheelRatio)
  const iconsRadius = wheelRadius * (1 - 3 * wheelRatio)

  const doc = new PDFDocument({ size: [pageWidth, pageHeight] })
  const docStream = doc.pipe(blobStream())

  docStream.on('finish', function () {
    const blob = docStream.toBlob('application/pdf')

    if (Platform.is.cordova) {
      const fileReader = new FileReader()

      fileReader.onload = function () {
        const dataURL = fileReader.result

        window.plugins.socialsharing.shareWithOptions({
          files: [`df:${fileName}.pdf;${dataURL}`]
        })
      }

      fileReader.readAsDataURL(blob)
    } else {
      fileSaver.saveAs(blob, `${fileName}.pdf`)
    }
  })

  const fontResponse = await (Platform.is.cordova ? fetch : window.fetch)('fonts/Schoolbell-Regular.ttf')
  const fontBuffer = await fontResponse.arrayBuffer()
  doc.font(fontBuffer)
  doc.fontSize(fontSize)

  doc.translate(pageWidth / 2, pageHeight / 2)

  wheelOfTexts(doc, actions, actionsRadius, needsRadius)

  doc.addPage({ size: [pageWidth, pageHeight] })
  doc.translate(pageWidth / 2, pageHeight / 2)

  wheelOfTexts(doc, needs, needsRadius, emotionsRadius)

  doc.addPage({ size: [pageWidth, pageHeight] })
  doc.translate(pageWidth / 2, pageHeight / 2)

  await wheelOfIconsTexts(doc, emotions, emotionsRadius, iconsRadius)

  doc.addPage({ size: [pageWidth, pageHeight] })
  doc.translate(pageWidth / 2, pageHeight / 2)

  wheelCache(doc, emotions, needs, actions, wheelRadius)
  wheelCacheOfTexts(doc, actions, actionsRadius, needsRadius, i18n.global.t('i_can'))
  wheelCacheOfTexts(doc, needs, needsRadius, emotionsRadius, i18n.global.t('i_need'))
  wheelCacheOfIconsTexts(doc, emotions, emotionsRadius, iconsRadius, i18n.global.t('i_feel'))

  doc.end()
}
