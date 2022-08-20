<template>
  <q-layout view="hHh lpr fff">
    <q-header>
      <q-toolbar>
        <q-btn :aria-label="$t('configuration')" flat icon="fas fa-arrow-left" stretch to="/configuration" />
        <q-toolbar-title>{{ $t('my_emotions') }}</q-toolbar-title>
        <q-btn :aria-label="$t('reset')" flat icon="fas fa-recycle" stretch @click="resetEmotions" />
        <q-btn :aria-label="$t('add')" flat icon="fas fa-plus" stretch @click="createEmotion" />
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { useStore } from 'vuex'
import { useQuasar } from 'quasar'
import { i18n } from '../boot/i18n'

import AppDialogIconText from 'components/AppDialogIconText'

const store = useStore()
const $q = useQuasar()
const $t = i18n.global.t

function createEmotion () {
  $q.dialog({
    component: AppDialogIconText,
    componentProps: {
      message: $t('i_feel')
    }
  }).onOk(emotion => {
    store.dispatch('configuration/createEmotion', { emotion })
  })
}

function resetEmotions () {
  $q.dialog({
    message: $t('reset_my_emotions'),
    ok: {
      color: 'negative',
      flat: true,
      icon: 'fas fa-exclamation-circle',
      label: $t('reset'),
      rounded: true
    },
    cancel: {
      flat: true,
      label: $t('cancel'),
      rounded: true
    },
    persistent: true
  }).onOk(() => {
    store.dispatch('configuration/resetEmotions')
  })
}
</script>
