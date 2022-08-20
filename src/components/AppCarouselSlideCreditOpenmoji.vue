<template>
  <q-carousel-slide class="column items-center justify-center" :name="props.name">
    <div class="text-center">{{ $t('openmoji_icons') }}</div>
    <q-btn class="icon-half text-half" flat icon="fas fa-globe" label="openmoji.org" no-caps rounded @click="open" />
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
  openURL('https://openmoji.org/')
}
</script>
