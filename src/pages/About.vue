<template>
  <q-page class="bg-yellow-4 column justify-between">
    <carousel height="32vh" :title="$t('publisher')">
      <carousel-slide-editor name="0" />
    </carousel>
    <carousel height="16vh" :title="$t('original_concept')">
      <carousel-slide-concept name="0" />
    </carousel>
    <carousel height="16vh" :title="$t('credits')">
      <carousel-slide-credit-quasar name="0" />
      <carousel-slide-credit-font name="1" />
    </carousel>
  </q-page>
</template>

<script>
export default {
  name: 'About',
  components: {
    Carousel: () => import('components/Carousel'),
    CarouselSlideConcept: () => import('components/CarouselSlideConcept'),
    CarouselSlideCreditFont: () => import('components/CarouselSlideCreditFont'),
    CarouselSlideCreditQuasar: () => import('components/CarouselSlideCreditQuasar'),
    CarouselSlideEditor: () => import('components/CarouselSlideEditor')
  }
}
</script>
