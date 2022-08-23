<template>
  <q-layout view="hHh lpr fff">
    <q-header>
      <q-toolbar>
        <q-btn :aria-label="$t('configuration')" flat icon="fas fa-arrow-left" stretch to="/configuration" />
        <q-toolbar-title>{{ $t('my_actions') }}</q-toolbar-title>
        <q-btn :aria-label="$t('reset')" flat icon="fas fa-recycle" stretch @click="resetActions" />
        <q-btn :aria-label="$t('add')" flat icon="fas fa-plus" stretch @click="createAction" />
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { useConfigurationStore } from 'stores/configuration'
import { useQuasar } from 'quasar'
import { i18n } from '../boot/i18n'

import validate from '../helpers/validate'
import Joi from 'joi'

const configurationStore = useConfigurationStore()
const $q = useQuasar()
const $t = i18n.global.t

function createAction () {
  $q.dialog({
    message: $t('i_can'),
    prompt: {
      counter: true,
      isValid: validate(Joi.string().trim().min(1)),
      maxlength: 40,
      model: '',
      outlined: true
    },
    ok: {
      flat: true,
      label: $t('save'),
      rounded: true
    },
    cancel: {
      flat: true,
      label: $t('cancel'),
      rounded: true
    },
    persistent: true
  }).onOk(action => {
    configurationStore.createAction({ action })
  })
}

function resetActions () {
  $q.dialog({
    message: $t('reset_my_actions'),
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
    configurationStore.resetActions()
  })
}
</script>
