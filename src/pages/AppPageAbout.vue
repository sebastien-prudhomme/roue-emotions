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

<script>
import { defineComponent, defineAsyncComponent } from 'vue'
import { openURL } from 'quasar'
import packageJSON from '../../package.json'

export default defineComponent({
  name: 'AppPageAbout',
  components: {
    AppCarousel: defineAsyncComponent(() => import('components/AppCarousel')),
    AppCarouselSlideConcept: defineAsyncComponent(() => import('components/AppCarouselSlideConcept')),
    AppCarouselSlideCreditFont: defineAsyncComponent(() => import('components/AppCarouselSlideCreditFont')),
    AppCarouselSlideCreditOpenmoji: defineAsyncComponent(() => import('components/AppCarouselSlideCreditOpenmoji')),
    AppCarouselSlideCreditQuasar: defineAsyncComponent(() => import('components/AppCarouselSlideCreditQuasar')),
    AppCarouselSlideEditor: defineAsyncComponent(() => import('components/AppCarouselSlideEditor'))
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
