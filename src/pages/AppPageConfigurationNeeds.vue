<template>
  <q-page>
    <div class="text-center">{{ $t('i_need') }}</div>
    <q-list>
      <vue-draggable animation="150" class="q-gutter-y-md" force-fallback="true" handle=".q-item__section--avatar .q-btn" item-key="index" :scroll-sensitivity="sensitivity" v-model="needElements">
        <template #item="{ element, index }">
          <q-item class="bg-white inset-shadow rounded-borders">
            <q-item-section avatar>
              <q-btn color="primary" dense flat icon="fas fa-arrows-alt-v" round />
            </q-item-section>
            <q-item-section class="text-center">{{ element.need }}</q-item-section>
            <q-item-section side>
              <q-btn :aria-label="$t('menu')" color="primary" dense flat icon="fas fa-ellipsis-v" round>
                <q-menu>
                  <q-list>
                    <q-item clickable v-close-popup @click="updateNeed(index)">
                      <q-item-section>{{ $t('edit') }}</q-item-section>
                    </q-item>
                    <q-item clickable v-close-popup @click="removeNeed(index)">
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
import { useConfigurationStore } from 'stores/configuration'
import { useQuasar } from 'quasar'
import { i18n } from '../boot/i18n'

import VueDraggable from 'vuedraggable'

import validate from '../helpers/validate'
import Joi from 'joi'

const configurationStore = useConfigurationStore()
const $q = useQuasar()
const $t = i18n.global.t

const needElements = computed({
  get () {
    const needs = configurationStore.needs

    return needs.map((need, index) => ({ need, index }))
  },
  set (needElements) {
    const needs = needElements.map(needElement => needElement.need)

    configurationStore.setNeeds({ needs })
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

function removeNeed (index) {
  $q.dialog({
    message: $t('remove_this_need'),
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
    configurationStore.removeNeed({ index })
  })
}

function updateNeed (index) {
  $q.dialog({
    message: $t('i_need'),
    prompt: {
      counter: true,
      isValid: validate(Joi.string().trim().min(1)),
      maxlength: 40,
      model: configurationStore.needs[index],
      outlined: true
    },
    ok: {
      flat: true,
      label: $t('save'),
      rounded: true
    },
    cancel: {
      flat: true,
      label: $t('cancel'),
      rounded: true
    },
    persistent: true
  }).onOk(need => {
    configurationStore.updateNeed({ index, need })
  })
}
</script>
