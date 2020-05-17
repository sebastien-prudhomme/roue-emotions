<template>
  <q-carousel-slide class="column items-center justify-center" :name="name">
    <div class="text-center">Cadriciel Quasar</div>
    <div class="text-center text-half">
      <q-icon left name="fas fa-globe" />quasar.dev
    </div>
  </q-carousel-slide>
</template>

<script>
export default {
  name: 'CarouselSlideCreditQuasar',
  props: {
    name: {
      type: String,
      default: ''
    }
  }
}
</script>
