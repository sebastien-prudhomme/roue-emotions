<template>
  <q-layout view="hhh lpr fff">
    <q-header>
      <q-toolbar>
        <q-btn v-show="home" flat icon="fas fa-arrow-left" stretch to="/" />
        <q-toolbar-title>{{ title }}</q-toolbar-title>
        <q-btn v-show="configuration" flat icon="fas fa-cog" stretch to="/configuration" />
        <q-btn v-show="about" flat icon="fas fa-question-circle" stretch to="/about" />
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout',
  props: {
    about: {
      type: Boolean,
      default: false
    },
    configuration: {
      type: Boolean,
      default: false
    },
    home: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="sass">
body
  font-family: "Schoolbell"
  font-size: 4vh
.q-btn .q-icon
  font-size: 4vh
.q-btn__wrapper
  min-height: 8vh
  padding: 2vh
.q-toolbar
  min-height: 8vh
  padding: 0
.q-toolbar__title
  font-size: 4vh
  padding: 0 2vh
.q-toolbar__title:first-child
  padding-left: 2vh
</style>
