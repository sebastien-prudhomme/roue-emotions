<template>
  <q-page>
    <div class="q-gutter-y-md">
      <app-carousel class="carousel-emotions" :title="$t('i_feel')">
        <app-carousel-slide-icon-text v-for="(emotion, index) in emotions" :key="index" :icon="emotion.icon" :name="index.toString()" :text="emotion.text" />
      </app-carousel>
      <app-carousel class="carousel-needs" :title="$t('i_need')">
        <app-carousel-slide-text v-for="(need, index) in needs" :key="index" :name="index.toString()" :text="need" />
      </app-carousel>
      <app-carousel class="carousel-actions" :title="$t('i_can')">
        <app-carousel-slide-text v-for="(action, index) in actions" :key="index" :name="index.toString()" :text="action" />
      </app-carousel>
    </div>
  </q-page>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useQuasar } from 'quasar'

import AppCarousel from 'components/AppCarousel'
import AppCarouselSlideIconText from 'components/AppCarouselSlideIconText'
import AppCarouselSlideText from 'components/AppCarouselSlideText'
import AppDialogWelcome from 'components/AppDialogWelcome'

import semver from 'semver'
import packageJSON from '../../package.json'

const store = useStore()
const $q = useQuasar()

const emotions = computed(() => {
  return store.getters['configuration/emotions']
})

const needs = computed(() => {
  return store.getters['configuration/needs']
})

const actions = computed(() => {
  return store.getters['configuration/actions']
})

onMounted(() => {
  if (store.state.application.version === null || semver.lt(store.state.application.version, packageJSON.version)) {
    $q.dialog({
      component: AppDialogWelcome
    }).onOk(() => {
      store.commit('application/setVersion', { version: packageJSON.version })
    })
  }
})
</script>
