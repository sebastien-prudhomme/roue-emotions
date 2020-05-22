<template>
  <q-layout view="hHh lpr fff">
    <q-header>
      <q-toolbar>
        <q-btn flat icon="fas fa-arrow-left" stretch to="/configuration" />
        <q-toolbar-title>Mes actions</q-toolbar-title>
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
        message: 'Je peux :',
        prompt: {
          model: ''
        },
        ok: {
          flat: true,
          label: 'Sauvegarder'
        },
        cancel: {
          flat: true,
          label: 'Annuler'
        },
        persistent: true
      }).onOk(action => {
        this.$store.dispatch('configuration/createAction', { action })
      })
    }
  }
}
</script>
