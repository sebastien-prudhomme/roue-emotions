<template>
  <q-carousel-slide class="column items-center justify-center" :name="props.name">
    <div class="text-center">Sébastien Prud'homme</div>
    <q-btn class="icon-half text-half" flat icon="fab fa-twitter" label="@CowboySysop" no-caps rounded @click="open" />
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
  openURL('https://twitter.com/CowboySysop')
}
</script>
