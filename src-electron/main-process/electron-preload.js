const { shell } = require('electron')

// To make openURL work correctly when Node integration is turned off
window.electron = {
  shell
}
