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

<style lang="sass">
.inset-shadow
  box-shadow: 0 1vh 1vh -1vh rgba(0, 0, 0, 0.7) inset !important
.q-carousel--arrows-horizontal.q-carousel--with-padding .q-carousel__slide
  padding-left: 8vh
  padding-right: 8vh
.q-carousel__next-arrow--horizontal,
.q-carousel__prev-arrow--horizontal
  bottom: 2vh
  top: 2vh
.q-carousel__next-arrow--horizontal
  right: 2vh
.q-carousel__prev-arrow--horizontal
  left: 2vh
.q-carousel__slide
  padding: 2vh
.rounded-borders
  border-radius: 2vh
</style>
