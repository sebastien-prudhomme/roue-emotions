import Vue from 'vue'
import { Platform } from 'quasar'

if (Platform.is.electron) {
  // To make openURL work correctly when Node integration is turned off
  Vue.prototype.$q.electron = window.electron
}
