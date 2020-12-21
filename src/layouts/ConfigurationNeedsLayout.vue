<template>
  <q-layout view="hHh lpr fff">
    <q-header>
      <q-toolbar>
        <q-btn :aria-label="$t('configuration')" flat icon="fas fa-arrow-left" stretch to="/configuration" />
        <q-toolbar-title>{{ $t('my_needs') }}</q-toolbar-title>
        <q-btn :aria-label="$t('reset')" flat icon="fas fa-trash-alt" stretch @click="resetNeeds" />
        <q-btn :aria-label="$t('add')" flat icon="fas fa-plus" stretch @click="createNeed" />
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
      }).onOk(need => {
        this.$store.dispatch('configuration/createNeed', { need })
      })
    },
    resetNeeds: function () {
      this.$q.dialog({
        message: this.$t('reset_my_needs'),
        ok: {
          flat: true,
          label: this.$t('reset'),
          rounded: true
        },
        cancel: {
          flat: true,
          label: this.$t('cancel'),
          rounded: true
        },
        persistent: true
      }).onOk(() => {
        this.$store.dispatch('configuration/resetNeeds')
      })
    }
  }
}
</script>
