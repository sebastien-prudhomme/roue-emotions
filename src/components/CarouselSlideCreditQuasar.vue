<template>
  <q-carousel-slide class="column items-center justify-center" :name="name">
    <div class="text-center">{{ $t('quasar_framework') }}</div>
    <div class="text-center text-half" @click="open">
      <q-icon left name="fas fa-globe" />quasar.dev
    </div>
  </q-carousel-slide>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'CarouselSlideCreditQuasar',
  props: {
    name: {
      type: String,
      default: ''
    }
  },
  methods: {
    open: function () {
      openURL('https://quasar.dev/')
    }
  }
}
</script>
