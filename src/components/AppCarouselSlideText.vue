<template>
  <q-carousel-slide class="column items-center justify-center" :name="name">
    <div class="text-center">{{ text }}</div>
  </q-carousel-slide>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AppCarouselSlideText',
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
})
</script>
