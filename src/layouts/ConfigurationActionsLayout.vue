<template>
  <q-layout view="hHh lpr fff">
    <q-header>
      <q-toolbar>
        <q-btn flat icon="fas fa-arrow-left" stretch to="/configuration" />
        <q-toolbar-title>{{ $t('my_actions') }}</q-toolbar-title>
        <q-btn flat icon="fas fa-plus" stretch @click="createAction" />
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import validate from '../helpers/validate'
import Joi from '@hapi/joi'

export default {
  name: 'ConfigurationActionsLayout',
  methods: {
    createAction: function () {
      this.$q.dialog({
        message: this.$t('i_can'),
        prompt: {
          counter: true,
          isValid: validate(Joi.string().trim().min(1)),
          maxlength: 40,
          model: ''
        },
        ok: {
          flat: true,
          label: this.$t('save'),
          rounded: true
        },
        cancel: {
          flat: true,
          label: this.$t('cancel'),
          rounded: true
        },
        persistent: true
      }).onOk(action => {
        this.$store.dispatch('configuration/createAction', { action })
      })
    }
  }
}
</script>
