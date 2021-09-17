<template>
  <q-carousel-slide class="column items-center justify-center" :name="name">
    <div class="text-center">{{ $t('quasar_framework') }}</div>
    <q-btn class="icon-half text-half" flat icon="fas fa-globe" label="quasar.dev" no-caps rounded @click="open" />
  </q-carousel-slide>
</template>

<script>
import { defineComponent } from 'vue'
import { openURL } from 'quasar'

export default defineComponent({
  name: 'AppCarouselSlideCreditQuasar',
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
})
</script>
