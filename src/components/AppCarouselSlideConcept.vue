<template>
  <q-carousel-slide class="column items-center justify-center" :name="props.name">
    <div class="text-center">Rigolett</div>
    <q-btn class="icon-half text-half" flat icon="fas fa-globe" label="www.rigolett.com" no-caps rounded @click="open" />
  </q-carousel-slide>
</template>

<script setup>
import { openURL } from 'quasar'

const props = defineProps({
  name: {
    type: String,
    default: ''
  }
})

function open () {
  openURL('http://www.rigolett.com/')
}
</script>
