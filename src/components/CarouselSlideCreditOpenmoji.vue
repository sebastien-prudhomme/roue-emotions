<template>
  <q-carousel-slide class="column items-center justify-center" :name="name">
    <div class="text-center">{{ $t('openmoji_icons') }}</div>
    <q-btn class="icon-half text-half" flat icon="fas fa-globe" label="openmoji.org" no-caps rounded @click="open" />
  </q-carousel-slide>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'CarouselSlideCreditOpenmoji',
  props: {
    name: {
      type: String,
      default: ''
    }
  },
  methods: {
    open: function () {
      openURL('https://openmoji.org/')
    }
  }
}
</script>
