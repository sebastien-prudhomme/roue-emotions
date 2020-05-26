<template>
  <q-layout view="hHh lpr fff">
    <q-header>
      <q-toolbar>
        <q-btn flat icon="fas fa-arrow-left" stretch to="/configuration" />
        <q-toolbar-title>{{ $t('my_needs') }}</q-toolbar-title>
        <q-btn flat icon="fas fa-plus" stretch @click="createNeed" />
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
  name: 'ConfigurationNeedsLayout',
  methods: {
    createNeed: function () {
      this.$q.dialog({
        message: this.$t('i_need'),
        prompt: {
          isValid: validate(Joi.string().trim().min(1)),
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
      }).onOk(need => {
        this.$store.dispatch('configuration/createNeed', { need })
      })
    }
  }
}
</script>
