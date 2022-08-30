<template>
  <q-layout view="hHh lpr fff">
    <q-header>
      <q-toolbar>
        <q-btn :aria-label="$t('menu')" flat icon="fas fa-bars" stretch @click="switchDrawer" />
        <q-toolbar-title>{{ $t('my_wheel_of_emotions') }}</q-toolbar-title>
        <q-avatar>{{ profileInitial }}</q-avatar>
      </q-toolbar>
    </q-header>
    <q-drawer behavior="mobile" v-model="drawerVisible" :width="drawerWidth">
      <q-toolbar>
        <q-btn :aria-label="$t('close')" flat icon="fas fa-times" stretch @click="switchDrawer" />
      </q-toolbar>
      <q-list>
        <q-item clickable @click="pdfExport">
          <q-item-section avatar>
            <q-icon name="fas fa-file-pdf" />
          </q-item-section>
          <q-item-section>{{ $t('pdf_export') }}</q-item-section>
        </q-item>
        <q-item to="/configuration">
          <q-item-section avatar>
            <q-icon name="fas fa-cog" />
          </q-item-section>
          <q-item-section>{{ $t('configuration') }}</q-item-section>
        </q-item>
        <q-separator />
        <q-item to="/about">
          <q-item-section avatar>
            <q-icon name="fas fa-question" />
          </q-item-section>
          <q-item-section>{{ $t('about') }}</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useConfigurationStore } from 'stores/configuration'
import { useQuasar } from 'quasar'

import AppDialogPdfExport from 'components/AppDialogPdfExport.vue'

const configurationStore = useConfigurationStore()
const $q = useQuasar()

const drawerVisible = ref(false)

const drawerWidth = computed(() => {
  const vw = $q.screen.width / 100
  const vh = $q.screen.height / 100

  return 32 * Math.min(2 * vw, 1 * vh)
})

const profileInitial = computed(() => {
  return configurationStore.profiles[configurationStore.profileIndex].name.substring(0, 1).toUpperCase()
})

function pdfExport () {
  switchDrawer()

  $q.dialog({
    component: AppDialogPdfExport
  })
}

function switchDrawer () {
  drawerVisible.value = !drawerVisible.value
}
</script>
