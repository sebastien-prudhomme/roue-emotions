<template>
  <q-carousel-slide class="column items-center justify-center" :name="name">
    <div class="text-center">{{ $t('schoolbell_font') }}</div>
    <q-btn class="icon-half text-half" flat icon="fas fa-globe" label="fonts.google.com" no-caps rounded @click="open" />
  </q-carousel-slide>
</template>

<script>
import { defineComponent } from 'vue'
import { openURL } from 'quasar'

export default defineComponent({
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
})
</script>
