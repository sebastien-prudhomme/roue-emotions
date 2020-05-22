<template>
  <q-carousel-slide class="column items-center justify-center" :name="name">
    <div class="text-center">Police Schoolbell</div>
    <div class="text-center text-half" @click="open">
      <q-icon left name="fas fa-globe" />fonts.google.com
    </div>
  </q-carousel-slide>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'CarouselSlideCreditFont',
  props: {
    name: {
      type: String,
      default: ''
    }
  },
  methods: {
    open: function () {
      openURL('https://fonts.google.com/')
    }
  }
}
</script>
