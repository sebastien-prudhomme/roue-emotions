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

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useQuasar } from 'quasar'
import { i18n } from '../boot/i18n'

import AppDialogIconText from 'components/AppDialogIconText'
import VueDraggable from 'vuedraggable'

const store = useStore()
const $q = useQuasar()
const $t = i18n.global.t

const emotionElements = computed({
  get () {
    const emotions = store.getters['configuration/emotions']

    return emotions.map((emotion, index) => ({ emotion, index }))
  },
  set (emotionElements) {
    const emotions = emotionElements.map(emotionElement => emotionElement.emotion)

    store.commit('configuration/setEmotions', { emotions })
  }
})

const sensitivity = computed(() => {
  const vw = $q.screen.width / 100
  const vh = $q.screen.height / 100
  const sensitivity = 8 * Math.min(2 * vw, 1 * vh)

  return {
    top: sensitivity + 8 * Math.min(2 * vw, 1 * vh), // Take header into account
    bottom: sensitivity,
    left: 0,
    right: 0
  }
})

function removeEmotion (index) {
  $q.dialog({
    message: $t('remove_this_emotion'),
    ok: {
      flat: true,
      label: $t('remove'),
      rounded: true
    },
    cancel: {
      flat: true,
      label: $t('cancel'),
      rounded: true
    },
    persistent: true
  }).onOk(() => {
    store.dispatch('configuration/removeEmotion', { index })
  })
}

function updateEmotion (index) {
  const emotion = store.getters['configuration/emotions'][index]

  $q.dialog({
    component: AppDialogIconText,
    componentProps: {
      message: $t('i_feel'),
      initialIcon: emotion.icon,
      initialText: emotion.text
    }
  }).onOk(emotion => {
    store.dispatch('configuration/updateEmotion', { index, emotion })
  })
}
</script>
