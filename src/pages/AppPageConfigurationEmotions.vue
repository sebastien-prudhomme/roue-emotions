<template>
  <q-page>
    <div class="text-center">{{ $t('i_feel') }}</div>
    <q-list>
      <vue-draggable animation="150" class="q-gutter-y-md" force-fallback="true" handle=".q-item__section--avatar .q-btn" item-key="index" :scroll-sensitivity="sensitivity" v-model="emotionElements">
        <template #item="{ element, index }">
          <q-item class="bg-white inset-shadow rounded-borders">
            <q-item-section avatar>
              <q-btn color="primary" dense flat icon="fas fa-arrows-alt-v" round />
            </q-item-section>
            <q-item-section class="items-center">
              <q-icon :name="element.emotion.icon" />
              <div class="text-center">{{ element.emotion.text }}</div>
            </q-item-section>
            <q-item-section side>
              <q-btn :aria-label="$t('menu')" color="primary" dense flat icon="fas fa-ellipsis-v" round>
                <q-menu>
                  <q-list>
                    <q-item clickable v-close-popup @click="updateEmotion(index)">
                      <q-item-section>{{ $t('edit') }}</q-item-section>
                    </q-item>
                    <q-item clickable v-close-popup @click="removeEmotion(index)">
                      <q-item-section>{{ $t('remove') }}</q-item-section>
                    </q-item>
                  </q-list>
                </q-menu>
              </q-btn>
            </q-item-section>
          </q-item>
        </template>
      </vue-draggable>
    </q-list>
  </q-page>
</template>

<script>
import { defineComponent, defineAsyncComponent } from 'vue'
import AppDialogIconText from 'components/AppDialogIconText'

export default defineComponent({
  name: 'AppPageConfigurationEmotions',
  components: {
    VueDraggable: defineAsyncComponent(() => import('vuedraggable'))
  },
  computed: {
    emotionElements: {
      get: function () {
        const emotions = this.$store.getters['configuration/emotions']

        return emotions.map((emotion, index) => ({ emotion, index }))
      },
      set: function (emotionElements) {
        const emotions = emotionElements.map(emotionElement => emotionElement.emotion)

        this.$store.commit('configuration/setEmotions', { emotions })
      }
    },
    sensitivity: function () {
      const vw = this.$q.screen.width / 100
      const vh = this.$q.screen.height / 100
      const sensitivity = 8 * Math.min(2 * vw, 1 * vh)

      return {
        top: sensitivity + 8 * Math.min(2 * vw, 1 * vh), // Take header into account
        bottom: sensitivity,
        left: 0,
        right: 0
      }
    }
  },
  methods: {
    removeEmotion: function (index) {
      this.$q.dialog({
        message: this.$t('remove_this_emotion'),
        ok: {
          flat: true,
          label: this.$t('remove'),
          rounded: true
        },
        cancel: {
          flat: true,
          label: this.$t('cancel'),
          rounded: true
        },
        persistent: true
      }).onOk(() => {
        this.$store.dispatch('configuration/removeEmotion', { index })
      })
    },
    updateEmotion: function (index) {
      const emotion = this.$store.getters['configuration/emotions'][index]

      this.$q.dialog({
        component: AppDialogIconText,
        componentProps: {
          message: this.$t('i_feel'),
          initialIcon: emotion.icon,
          initialText: emotion.text
        }
      }).onOk(emotion => {
        this.$store.dispatch('configuration/updateEmotion', { index, emotion })
      })
    }
  }
})
</script>
