<template>
  <q-page class="bg-yellow-4 column justify-between">
    <carousel height="32vh" :title="$t('i_feel')">
      <carousel-slide-image-text v-for="(feeling, index) in feelings" :image="`${index}.png`" :key="index" :name="index.toString()" :text="feeling" />
    </carousel>
    <carousel height="16vh" :title="$t('i_need')">
      <carousel-slide-text v-for="(need, index) in needs" :key="index" :name="index.toString()" :text="need" />
    </carousel>
    <carousel height="16vh" :title="$t('i_can')">
      <carousel-slide-text v-for="(action, index) in actions" :key="index" :name="index.toString()" :text="action" />
    </carousel>
  </q-page>
</template>

<script>
export default {
  name: 'Home',
  components: {
    Carousel: () => import('components/Carousel'),
    CarouselSlideImageText: () => import('components/CarouselSlideImageText'),
    CarouselSlideText: () => import('components/CarouselSlideText')
  },
  computed: {
    feelings: function () {
      return this.$store.state.configuration.feelings
    },
    needs: function () {
      return this.$store.state.configuration.needs
    },
    actions: function () {
      return this.$store.state.configuration.actions
    }
  }
}
</script>
