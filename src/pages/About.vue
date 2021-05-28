<template>
  <q-page class="bg-yellow-4">
    <div class="q-gutter-y-md">
      <carousel class="carousel-editor" :title="$t('publisher')">
        <carousel-slide-editor name="0" />
      </carousel>
      <carousel class="carousel-concept" :title="$t('original_concept')">
        <carousel-slide-concept name="0" />
      </carousel>
      <carousel class="carousel-credits" :title="$t('credits')">
        <carousel-slide-credit-quasar name="0" />
        <carousel-slide-credit-font name="1" />
        <carousel-slide-credit-openmoji name="2" />
      </carousel>
      <div class="about-footer row items-center justify-between">
        <q-btn class="icon-half text-half" flat icon="fas fa-globe" :label="$t('privacy_policy')" no-caps rounded @click="open" />
        <div class="text-half">
          {{ $t('version') }} {{ version }}
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { openURL } from 'quasar'
import { version } from '../../package.json'

export default {
  name: 'About',
  components: {
    Carousel: () => import('components/Carousel'),
    CarouselSlideConcept: () => import('components/CarouselSlideConcept'),
    CarouselSlideCreditFont: () => import('components/CarouselSlideCreditFont'),
    CarouselSlideCreditOpenmoji: () => import('components/CarouselSlideCreditOpenmoji'),
    CarouselSlideCreditQuasar: () => import('components/CarouselSlideCreditQuasar'),
    CarouselSlideEditor: () => import('components/CarouselSlideEditor')
  },
  computed: {
    version: function () {
      return version
    }
  },
  methods: {
    open: function () {
      openURL('https://sites.google.com/view/roue-emotions/politique-confidentialite')
    }
  }
}
</script>
