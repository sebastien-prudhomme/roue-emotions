<template>
  <q-carousel-slide class="column items-center justify-center" :name="name">
    <div class="text-center">{{ text }}</div>
  </q-carousel-slide>
</template>

<script>
export default {
  name: 'CarouselSlideText',
  props: {
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
