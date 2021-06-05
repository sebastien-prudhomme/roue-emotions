<template>
  <q-layout view="hHh lpr fff">
    <q-header>
      <q-toolbar>
        <q-btn :aria-label="$t('menu')" flat icon="fas fa-bars" stretch @click="switchDrawer" />
        <q-toolbar-title>{{ $t('my_wheel_of_emotions') }}</q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-drawer behavior="mobile" v-model="drawerVisible" :width="drawerWidth">
      <q-toolbar>
        <q-btn :aria-label="$t('close')" flat icon="fas fa-times" stretch @click="switchDrawer" />
      </q-toolbar>
      <q-list>
        <q-item clickable @click="pdfExport">
          <q-item-section avatar>
            <q-icon name="fas fa-file-pdf" />
          </q-item-section>
          <q-item-section>{{ $t('pdf_export') }}</q-item-section>
        </q-item>
        <q-item to="/configuration">
          <q-item-section avatar>
            <q-icon name="fas fa-cog" />
          </q-item-section>
          <q-item-section>{{ $t('configuration') }}</q-item-section>
        </q-item>
        <q-separator />
        <q-item to="/about">
          <q-item-section avatar>
            <q-icon name="fas fa-question" />
          </q-item-section>
          <q-item-section>{{ $t('about') }}</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import DialogPdfExport from 'components/DialogPdfExport'

export default {
  name: 'MainLayout',
  data () {
    return {
      drawerVisible: false
    }
  },
  computed: {
    drawerWidth: function () {
      const vw = this.$q.screen.width / 100
      const vh = this.$q.screen.height / 100

      return 32 * Math.min(2 * vw, 1 * vh)
    }
  },
  methods: {
    pdfExport: function () {
      this.switchDrawer()

      this.$q.dialog({
        component: DialogPdfExport,
        parent: this
      })
    },
    switchDrawer: function () {
      this.drawerVisible = !this.drawerVisible
    }
  }
}
</script>
