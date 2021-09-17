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
import { defineComponent } from 'vue'
import AppDialogIconText from 'components/AppDialogIconText'

export default defineComponent({
  name: 'AppLayoutConfigurationEmotions',
  methods: {
    createEmotion: function () {
      this.$q.dialog({
        component: AppDialogIconText,
        componentProps: {
          message: this.$t('i_feel')
        }
      }).onOk(emotion => {
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
})
</script>
