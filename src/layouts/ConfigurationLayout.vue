<template>
  <q-layout view="hHh lpr fff">
    <q-header>
      <q-toolbar>
        <q-btn flat icon="fas fa-arrow-left" stretch to="/" />
        <q-toolbar-title>Configuration</q-toolbar-title>
        <q-btn flat icon="fas fa-plus" stretch @click="createNeed" />
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'ConfigurationLayout',
  methods: {
    createNeed: function () {
      this.$q.dialog({
        title: 'J\'ai besoin :',
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
      }).onOk(need => {
        this.$store.dispatch('configuration/createNeed', { need })
      })
    }
  }
}
</script>
