<template>
  <div>
    <div class="text-center">{{ title }}</div>
    <q-carousel animated :arrows="arrows" class="inset-shadow rounded-borders" control-color="primary" :height="height" infinite padding next-icon="fas fa-chevron-right" prev-icon="fas fa-chevron-left" swipeable transition-next="slide-left" transition-prev="slide-right" v-model="value">
      <slot />
    </q-carousel>
  </div>
</template>

<script>
export default {
  name: 'Carousel',
  props: {
    height: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      value: '0'
    }
  },
  computed: {
    arrows: function () {
      return this.$slots.default.length > 1
    }
  }
}
</script>
