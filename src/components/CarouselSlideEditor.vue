<template>
  <q-carousel-slide class="column items-center justify-center" :name="name">
    <div class="text-center">Sébastien Prud'homme</div>
    <q-btn class="icon-half text-half" flat icon="fab fa-twitter" label="@sebasprud" no-caps rounded @click="open" />
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
