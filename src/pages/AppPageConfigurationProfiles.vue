<template>
  <q-page>
    <q-list class="q-gutter-y-md">
      <q-item v-for="(profile, index) in profiles" :key="index" class="bg-white inset-shadow rounded-borders">
        <q-item-section avatar>
          <q-radio checked-icon="fas fa-check-circle" :model-value="profileIndex" unchecked-icon="far fa-circle" :val="index" @update:model-value="setProfileIndex" />
        </q-item-section>
        <q-item-section class="text-center">{{ profile.name }}</q-item-section>
        <q-item-section side>
          <q-btn :aria-label="$t('menu')" color="primary" dense flat icon="fas fa-ellipsis-v" round>
            <q-menu>
              <q-list>
                <q-item clickable v-close-popup @click="updateProfile(index)">
                  <q-item-section>{{ $t('edit') }}</q-item-section>
                </q-item>
                <q-item clickable :disable="index === profileIndex" v-close-popup @click="removeProfile(index)">
                  <q-item-section>{{ $t('remove') }}</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script setup>
import { computed } from 'vue'
import { useConfigurationStore } from 'stores/configuration'
import { useQuasar } from 'quasar'
import { i18n } from '../boot/i18n'

import validate from '../helpers/validate'
import Joi from 'joi'

const configurationStore = useConfigurationStore()
const $q = useQuasar()
const $t = i18n.global.t

const profileIndex = computed(() => {
  return configurationStore.profileIndex
})

const profiles = computed(() => {
  return configurationStore.profiles
})

function removeProfile (index) {
  $q.dialog({
    message: $t('remove_this_profile'),
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
    configurationStore.removeProfile({ index })
  })
}

function setProfileIndex (profileIndex) {
  configurationStore.setProfileIndex({ profileIndex })
}

function updateProfile (index) {
  $q.dialog({
    message: $t('profile_name'),
    prompt: {
      counter: true,
      isValid: validate(Joi.string().trim().min(1)),
      maxlength: 10,
      model: configurationStore.profiles[index].name,
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
  }).onOk(profile => {
    configurationStore.updateProfile({ index, profile })
  })
}
</script>
