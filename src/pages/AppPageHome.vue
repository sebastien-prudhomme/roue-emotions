<template>
  <q-page>
    <div class="q-gutter-y-md">
      <app-carousel class="carousel-emotions" :title="$t('i_feel')">
        <app-carousel-slide-icon-text v-for="(emotion, index) in emotions" :key="index" :icon="emotion.icon" :name="index.toString()" :text="emotion.text" />
      </app-carousel>
      <app-carousel class="carousel-needs" :title="$t('i_need')">
        <app-carousel-slide-text v-for="(need, index) in needs" :key="index" :name="index.toString()" :text="need" />
      </app-carousel>
      <app-carousel class="carousel-actions" :title="$t('i_can')">
        <app-carousel-slide-text v-for="(action, index) in actions" :key="index" :name="index.toString()" :text="action" />
      </app-carousel>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, defineAsyncComponent } from 'vue'
import semver from 'semver'
import packageJSON from '../../package.json'
import AppDialogWelcome from 'components/AppDialogWelcome'

export default defineComponent({
  name: 'AppPageHome',
  components: {
    AppCarousel: defineAsyncComponent(() => import('components/AppCarousel')),
    AppCarouselSlideIconText: defineAsyncComponent(() => import('components/AppCarouselSlideIconText')),
    AppCarouselSlideText: defineAsyncComponent(() => import('components/AppCarouselSlideText'))
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
    if (this.$store.state.application.version === null || semver.lt(this.$store.state.application.version, packageJSON.version)) {
      this.$q.dialog({
        component: AppDialogWelcome
      }).onOk(() => {
        this.$store.commit('application/setVersion', { version: packageJSON.version })
      })
    }
  }
})
</script>
