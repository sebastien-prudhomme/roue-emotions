<template>
  <q-carousel-slide class="column items-center justify-center" :name="name">
    <q-icon draggable="false" :name="icon" />
    <div class="text-center">{{ text }}</div>
  </q-carousel-slide>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
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
})
</script>
