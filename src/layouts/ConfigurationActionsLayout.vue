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
export default {
  name: 'ConfigurationActionsLayout',
  methods: {
    createAction: function () {
      this.$q.dialog({
        message: this.$t('i_can'),
        prompt: {
          model: ''
        },
        ok: {
          flat: true,
          label: this.$t('save')
        },
        cancel: {
          flat: true,
          label: this.$t('cancel')
        },
        persistent: true
      }).onOk(action => {
        this.$store.dispatch('configuration/createAction', { action })
      })
    }
  }
}
</script>
