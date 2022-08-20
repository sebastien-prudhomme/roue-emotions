<template>
  <q-carousel-slide class="column items-center justify-center" :name="props.name">
    <q-icon draggable="false" :name="props.icon" />
    <div class="text-center">{{ props.text }}</div>
  </q-carousel-slide>
</template>

<script setup>
const props = defineProps({
  icon: {
    type: String,
    default: ''
  },
  name: {
    type: String,
    default: ''
  },
  text: {
    type: String,
    default: ''
  }
})
</script>
