<template>
  <q-carousel-slide class="column items-center justify-center" :name="name">
    <div class="text-center">Rigolett</div>
    <q-btn class="icon-half text-half" flat icon="fas fa-globe" label="www.rigolett.com" no-caps rounded @click="open" />
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
