<template>
  <q-carousel-slide class="column items-center justify-center" :name="name">
    <q-img :src="image" />
    <div class="text-center">{{ text }}</div>
  </q-carousel-slide>
</template>

<script>
export default {
  name: 'CarouselSlideImageText',
  props: {
    image: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="sass">
.q-carousel__slide .q-img
  height: 22vh
  width: 22vh
</style>
