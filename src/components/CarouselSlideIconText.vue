<template>
  <q-carousel-slide class="column items-center justify-center" :name="name">
    <q-icon :name="icon" />
    <div class="text-center">{{ text }}</div>
  </q-carousel-slide>
</template>

<script>
export default {
  name: 'CarouselSlideIconText',
  props: {
    icon: {
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
