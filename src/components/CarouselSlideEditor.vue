<template>
  <q-carousel-slide class="column items-center justify-center" :name="name">
    <div class="text-center">Sébastien Prud'homme</div>
    <div class="text-center text-half" @click="open">
      <q-icon left name="fab fa-twitter" />@sebasprud
    </div>
  </q-carousel-slide>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'CarouselSlideEditor',
  props: {
    name: {
      type: String,
      default: ''
    }
  },
  methods: {
    open: function () {
      openURL('https://twitter.com/sebasprud')
    }
  }
}
</script>
