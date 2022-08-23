import { defineStore } from 'pinia'

export const useApplicationStore = defineStore('application', {
  persist: true,
  state: () => ({
    schema: '1.5.0',
    version: null
  })
})
