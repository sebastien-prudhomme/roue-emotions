<template>
  <q-layout view="hHh lpr fff">
    <q-header>
      <q-toolbar>
        <q-btn :aria-label="$t('configuration')" flat icon="fas fa-arrow-left" stretch to="/configuration" />
        <q-toolbar-title>{{ $t('my_profiles') }}</q-toolbar-title>
        <q-btn :aria-label="$t('reset')" flat icon="fas fa-recycle" stretch @click="resetProfiles" />
        <q-btn :aria-label="$t('add')" flat icon="fas fa-plus" stretch @click="createProfile" />
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
  name: 'AppLayoutConfigurationProfiles',
  methods: {
    createProfile: function () {
      this.$q.dialog({
        message: this.$t('profile_name'),
        prompt: {
          counter: true,
          isValid: validate(Joi.string().trim().min(1)),
          maxlength: 10,
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
      }).onOk(profile => {
        this.$store.dispatch('configuration/createProfile', { profile })
      })
    },
    resetProfiles: function () {
      this.$q.dialog({
        message: this.$t('reset_my_profiles'),
        ok: {
          color: 'negative',
          flat: true,
          icon: 'fas fa-exclamation-circle',
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
        this.$store.dispatch('configuration/resetProfiles')
      })
    }
  }
})
</script>
