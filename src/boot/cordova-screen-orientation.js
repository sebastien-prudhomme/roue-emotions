import { Platform } from 'quasar'

if (Platform.is.cordova) {
  window.screen.orientation.lock('portrait')
}
