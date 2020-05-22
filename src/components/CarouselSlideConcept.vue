<template>
  <q-carousel-slide class="column items-center justify-center" :name="name">
    <div class="text-center">Rigolett</div>
    <div class="text-center text-half" @click="open">
      <q-icon left name="fas fa-globe" />www.rigolett.com
    </div>
  </q-carousel-slide>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'CarouselSlideConcept',
  props: {
    name: {
      type: String,
      default: ''
    }
  },
  methods: {
    open: function () {
      openURL('http://www.rigolett.com/')
    }
  }
}
</script>
