<template>
  <q-dialog class="dialog-export" persistent ref="dialog" @hide="hideDialog">
    <q-card class="q-dialog-plugin">
      <q-card-section class="card-section-wheel">
        <div class="wheel">
          <div class="wheel__layer wheel__layer--1" :style="`background-image: url('${locale}/pdf-export-1.png')`"></div>
          <div class="wheel__layer wheel__layer--2" :style="`background-image: url('${locale}/pdf-export-2.png')`"></div>
          <div class="wheel__layer wheel__layer--3" :style="`background-image: url('${locale}/pdf-export-3.png')`"></div>
          <div class="wheel__layer wheel__layer--4" :style="`background-image: url('${locale}/pdf-export-4.png')`"></div>
        </div>
      </q-card-section>
      <q-card-section>{{ $t('file_name') }}</q-card-section>
      <q-card-section>
        <q-input dense outlined suffix=".pdf" v-model="fileName" />
      </q-card-section>
      <q-card-section>{{ $t('paper_size') }}</q-card-section>
      <q-card-section>
        <q-select behavior="dialog" emit-value map-options :options="paperSizeOptions" outlined v-model="paperSize" />
      </q-card-section>
      <q-card-actions align="right">
        <q-btn color="primary" flat :label="$t('cancel')" :ripple="false" rounded @click="cancelDialog" />
        <q-btn color="primary" data-autofocus="true" :disable="disable" flat :label="$t('export')" :loading="loading" :ripple="false" rounded @click="submitDialog" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import pdfExport from '../helpers/pdf-export'
import validate from '../helpers/validate'
import Joi from 'joi'

export default {
  name: 'DialogPdfExport',
  data () {
    return {
      fileName: this.$t('file_name_wheel_emotions'),
      loading: false,
      paperSize: 'a4',
      paperSizeOptions: [
        { label: this.$t('paper_size_a4'), value: 'a4' },
        { label: this.$t('paper_size_letter'), value: 'letter' }
      ]
    }
  },
  computed: {
    disable: function () {
      const fileNameIsValid = validate(Joi.string().trim().min(1))

      return (fileNameIsValid(this.fileName) !== true)
    },
    locale: function () {
      return this.$i18n.locale
    }
  },
  methods: {
    cancelDialog: function () {
      this.hide()
    },
    hide: function () {
      this.$refs.dialog.hide()
    },
    hideDialog: function () {
      this.$emit('hide')
    },
    show: function () {
      this.$refs.dialog.show()
    },
    submitDialog: async function () {
      this.loading = true

      await pdfExport(this.$store.state.configuration.emotions, this.$store.state.configuration.needs, this.$store.state.configuration.actions, this.fileName.trim(), this.paperSize)

      this.loading = false

      this.$emit('ok')
      this.hide()
    }
  }
}
</script>

<style lang="sass">
@function ratio($amount)
  @return calc(#{$amount} * min(2vw, 1vh))

.card-section-wheel
  display: flex
  overflow: hidden
  align-items: center
  justify-content: center
  height: ratio(30)

.wheel
  width: ratio(1.7 * 21)
  height: ratio(1.7 * 29.7)
  transform: rotateX(60deg) rotateZ(45deg)
  transform-style: preserve-3d

.wheel__layer
  position: absolute
  width: 100%
  height: 100%
  animation-duration: 6s
  animation-iteration-count: infinite
  background-size: cover
  &--1
    animation-name: wheel__layer--1
  &--2
    animation-name: wheel__layer--2
  &--3
    animation-name: wheel__layer--3
  &--4
    animation-name: wheel__layer--4

@keyframes wheel__layer--1
  0%
    transform: rotateZ(0)
  75%
    transform: rotateZ(0)
  95%
    transform: rotateZ(45deg)
  100%
    transform: rotateZ(45deg)

@keyframes wheel__layer--2
  0%
    transform: rotateZ(0) translateZ(ratio(3))
  5%
    transform: translateZ(ratio(3))
  25%
    transform: translateZ(0)
  55%
    transform: rotateZ(0)
  75%
    transform: rotateZ(-30deg)
  100%
    transform: rotateZ(-30deg) translateZ(0)

@keyframes wheel__layer--3
  0%
    transform: rotateZ(0) translateZ(ratio(6))
  10%
    transform: translateZ(ratio(6))
  30%
    transform: translateZ(0)
  35%
    transform: rotateZ(0)
  55%
    transform: rotateZ(72deg)
  100%
    transform: rotateZ(72deg) translateZ(0)

@keyframes wheel__layer--4
  0%
    transform: translateZ(ratio(9))
  15%
    transform: translateZ(ratio(9))
  35%
    transform: translateZ(0)
  100%
    transform: translateZ(0)
</style>
