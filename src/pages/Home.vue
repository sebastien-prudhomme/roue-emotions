<template>
  <q-page>
    <div class="q-gutter-y-md">
      <carousel class="carousel-emotions" :title="$t('i_feel')">
        <carousel-slide-icon-text v-for="(emotion, index) in emotions" :key="index" :icon="emotion.icon" :name="index.toString()" :text="emotion.text" />
      </carousel>
      <carousel class="carousel-needs" :title="$t('i_need')">
        <carousel-slide-text v-for="(need, index) in needs" :key="index" :name="index.toString()" :text="need" />
      </carousel>
      <carousel class="carousel-actions" :title="$t('i_can')">
        <carousel-slide-text v-for="(action, index) in actions" :key="index" :name="index.toString()" :text="action" />
      </carousel>
    </div>
  </q-page>
</template>

<script>
import semver from 'semver'
import { version } from '../../package.json'
import DialogWelcome from 'components/DialogWelcome'

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
  },
  mounted: function () {
    if (this.$store.state.application.version === null || semver.lt(this.$store.state.application.version, version)) {
      this.$q.dialog({
        component: DialogWelcome,
        parent: this
      }).onOk(() => {
        this.$store.commit('application/setVersion', { version })
      })
    }
  }
}
</script>
