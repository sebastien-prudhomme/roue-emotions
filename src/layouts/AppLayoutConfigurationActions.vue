<template>
  <q-layout view="hHh lpr fff">
    <q-header>
      <q-toolbar>
        <q-btn :aria-label="$t('configuration')" flat icon="fas fa-arrow-left" stretch to="/configuration" />
        <q-toolbar-title>{{ $t('my_actions') }}</q-toolbar-title>
        <q-btn :aria-label="$t('reset')" flat icon="fas fa-trash-alt" stretch @click="resetActions" />
        <q-btn :aria-label="$t('add')" flat icon="fas fa-plus" stretch @click="createAction" />
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from 'vue'
import validate from '../helpers/validate'
import Joi from 'joi'

export default defineComponent({
  name: 'AppLayoutConfigurationActions',
  methods: {
    createAction: function () {
      this.$q.dialog({
        message: this.$t('i_can'),
        prompt: {
          counter: true,
          isValid: validate(Joi.string().trim().min(1)),
          maxlength: 40,
          model: '',
          outlined: true
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
    },
    resetActions: function () {
      this.$q.dialog({
        message: this.$t('reset_my_actions'),
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
        this.$store.dispatch('configuration/resetActions')
      })
    }
  }
})
</script>
