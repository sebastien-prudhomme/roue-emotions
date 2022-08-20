<template>
  <q-layout view="hHh lpr fff">
    <q-header>
      <q-toolbar>
        <q-btn :aria-label="$t('home')"  flat icon="fas fa-arrow-left" stretch to="/" />
        <q-toolbar-title>{{ $t('configuration') }}</q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
