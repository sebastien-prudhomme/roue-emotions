<template>
  <q-page class="bg-yellow-4 column justify-between">
    <carousel height="32vh" :title="$t('i_feel')">
      <carousel-slide-icon-text v-for="(emotion, index) in emotions" :icon="emotion.icon" :key="index" :name="index.toString()" :text="emotion.text" />
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
    CarouselSlideIconText: () => import('components/CarouselSlideIconText'),
    CarouselSlideText: () => import('components/CarouselSlideText')
  },
  computed: {
    emotions: function () {
      return this.$store.state.configuration.emotions
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
