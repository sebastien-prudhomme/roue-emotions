<template>
  <div>
    <div class="text-center">{{ props.title }}</div>
    <q-carousel animated :arrows="arrows" class="inset-shadow rounded-borders" control-color="primary" infinite padding next-icon="fas fa-chevron-right" prev-icon="fas fa-chevron-left" swipeable transition-next="slide-left" transition-prev="slide-right" v-model="value">
      <slot />
    </q-carousel>
  </div>
</template>

<script setup>
import { computed, Fragment, ref, useSlots } from 'vue'

const $slots = useSlots()

const props = defineProps({
  title: {
    type: String,
    default: ''
  }
})

const value = ref('0')

const arrows = computed(() => {
  return ($slots.default().length > 1 || ($slots.default()[0].type === Fragment && $slots.default()[0].children.length > 1))
})
</script>
