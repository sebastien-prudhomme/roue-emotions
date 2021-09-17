import { boot } from 'quasar/wrappers'
import { createI18n } from 'vue-i18n'
import messages from 'src/i18n'
import { lookup, navigatorLanguages } from 'langtag-utils'

const i18n = createI18n({
  locale: lookup(Object.keys(messages), navigatorLanguages(), 'en-US'),
  messages
})

export default boot(({ app }) => {
  // Set i18n instance on app
  app.use(i18n)
})

export { i18n }
