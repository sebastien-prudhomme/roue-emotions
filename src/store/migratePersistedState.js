import { i18n } from '../boot/i18n'

export default function (storage) {
  storage.setItem('@@', 1)
  storage.removeItem('@@')

  const item = storage.getItem('vuex')

  if (item !== null) {
    let state = JSON.parse(item)

    if (state.application === undefined) {
      const newState = {}

      newState.application = {
        schema: '1.0.0',
        version: '1.0.0'
      }

      newState.configuration = state.configuration

      state = newState
    }

    if (state.application.schema === '1.0.0') {
      const newState = {}

      newState.application = {
        schema: '1.4.0',
        version: state.application.version
      }

      const profile = {
        name: i18n.global.t('profile_name_default')
      }

      newState.configuration = {
        profileIndex: 0,
        profiles: [{
          ...profile,
          ...state.configuration
        }]
      }

      state = newState
    }

    storage.setItem('vuex', JSON.stringify(state))
  }
}
