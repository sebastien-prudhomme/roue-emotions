<template>
  <q-carousel-slide class="column items-center justify-center" :name="name">
    <div class="text-center">Sébastien Prud'homme</div>
    <q-btn class="icon-half text-half" flat icon="fab fa-twitter" label="@CowboySysop" no-caps rounded @click="open" />
  </q-carousel-slide>
</template>

<script>
import { defineComponent } from 'vue'
import { openURL } from 'quasar'

export default defineComponent({
  name: 'AppCarouselSlideEditor',
  props: {
    name: {
      type: String,
      default: ''
    }
  },
  methods: {
    open: function () {
      openURL('https://twitter.com/CowboySysop')
    }
  }
})
</script>
