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
import { useApplicationStore } from 'stores/application'
import { useConfigurationStore } from 'stores/configuration'
import { useQuasar } from 'quasar'

import AppCarousel from 'components/AppCarousel.vue'
import AppCarouselSlideIconText from 'components/AppCarouselSlideIconText.vue'
import AppCarouselSlideText from 'components/AppCarouselSlideText.vue'
import AppDialogWelcome from 'components/AppDialogWelcome.vue'

import semver from 'semver'
import packageJSON from '../../package.json'

const applicationStore = useApplicationStore()
const configurationStore = useConfigurationStore()
const $q = useQuasar()

const emotions = computed(() => {
  return configurationStore.emotions
})

const needs = computed(() => {
  return configurationStore.needs
})

const actions = computed(() => {
  return configurationStore.actions
})

onMounted(() => {
  if (applicationStore.version === null || semver.lt(applicationStore.version, packageJSON.version)) {
    $q.dialog({
      component: AppDialogWelcome
    }).onOk(() => {
      applicationStore.version = packageJSON.version
    })
  }
})
</script>
