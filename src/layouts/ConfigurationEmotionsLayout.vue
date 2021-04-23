<template>
  <q-layout view="hHh lpr fff">
    <q-header>
      <q-toolbar>
        <q-btn :aria-label="$t('configuration')" flat icon="fas fa-arrow-left" stretch to="/configuration" />
        <q-toolbar-title>{{ $t('my_emotions') }}</q-toolbar-title>
        <q-btn :aria-label="$t('reset')" flat icon="fas fa-trash-alt" stretch @click="resetEmotions" />
        <q-btn :aria-label="$t('add')" flat icon="fas fa-plus" stretch @click="createEmotion" />
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import validate from '../helpers/validate'
import Joi from 'joi'

export default {
  name: 'ConfigurationEmotionsLayout',
  methods: {
    createEmotion: function () {
      this.$q.dialog({
        message: this.$t('i_feel'),
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
      }).onOk(text => {
        const emotion = {
          icon: '',
          text: text.trim()
        }

        this.$store.dispatch('configuration/createEmotion', { emotion })
      })
    },
    resetEmotions: function () {
      this.$q.dialog({
        message: this.$t('reset_my_emotions'),
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
        this.$store.dispatch('configuration/resetEmotions')
      })
    }
  }
}
</script>
