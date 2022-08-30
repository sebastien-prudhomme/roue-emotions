<template>
  <q-page>
    <div class="q-gutter-y-md">
      <app-carousel class="carousel-editor" :title="$t('publisher')">
        <app-carousel-slide-editor name="0" />
      </app-carousel>
      <app-carousel class="carousel-concept" :title="$t('original_concept')">
        <app-carousel-slide-concept name="0" />
      </app-carousel>
      <app-carousel class="carousel-credits" :title="$t('credits')">
        <app-carousel-slide-credit-quasar name="0" />
        <app-carousel-slide-credit-font name="1" />
        <app-carousel-slide-credit-openmoji name="2" />
      </app-carousel>
      <div class="about-footer row items-center justify-between">
        <q-btn class="icon-half text-half" flat icon="fas fa-globe" :label="$t('privacy_policy')" no-caps rounded @click="open" />
        <div class="text-half">
          {{ $t('version') }} {{ version }}
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { computed } from 'vue'
import { openURL } from 'quasar'

import AppCarousel from 'components/AppCarousel.vue'
import AppCarouselSlideConcept from 'components/AppCarouselSlideConcept.vue'
import AppCarouselSlideCreditFont from 'components/AppCarouselSlideCreditFont.vue'
import AppCarouselSlideCreditOpenmoji from 'components/AppCarouselSlideCreditOpenmoji.vue'
import AppCarouselSlideCreditQuasar from 'components/AppCarouselSlideCreditQuasar.vue'
import AppCarouselSlideEditor from 'components/AppCarouselSlideEditor.vue'

import packageJSON from '../../package.json'

const version = computed(() => {
  return packageJSON.version
})

function open () {
  openURL('https://sites.google.com/view/roue-emotions/politique-confidentialite')
}
</script>
