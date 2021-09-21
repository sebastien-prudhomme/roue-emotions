<template>
  <q-page>
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
import { defineComponent, defineAsyncComponent } from 'vue'
import { openURL } from 'quasar'
import packageJSON from '../../package.json'

export default defineComponent({
  name: 'About',
  components: {
    Carousel: defineAsyncComponent(() => import('components/Carousel')),
    CarouselSlideConcept: defineAsyncComponent(() => import('components/CarouselSlideConcept')),
    CarouselSlideCreditFont: defineAsyncComponent(() => import('components/CarouselSlideCreditFont')),
    CarouselSlideCreditOpenmoji: defineAsyncComponent(() => import('components/CarouselSlideCreditOpenmoji')),
    CarouselSlideCreditQuasar: defineAsyncComponent(() => import('components/CarouselSlideCreditQuasar')),
    CarouselSlideEditor: defineAsyncComponent(() => import('components/CarouselSlideEditor'))
  },
  computed: {
    version: function () {
      return packageJSON.version
    }
  },
  methods: {
    open: function () {
      openURL('https://sites.google.com/view/roue-emotions/politique-confidentialite')
    }
  }
})
</script>
