<template>
  <q-layout view="hHh lpr fff">
    <q-header>
      <q-toolbar>
        <q-toolbar-title>{{ $t('my_wheel_of_emotions') }}</q-toolbar-title>
        <q-btn :aria-label="$t('configuration')" flat icon="fas fa-cog" stretch to="/configuration" />
        <q-btn :aria-label="$t('about')" flat icon="fas fa-question" stretch to="/about" />
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout'
}
</script>
