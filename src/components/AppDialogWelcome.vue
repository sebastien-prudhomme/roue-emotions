<template>
  <q-dialog class="dialog-welcome" persistent ref="dialog" @hide="hideDialog">
    <q-card class="q-dialog-plugin">
      <q-card-section>
        <div>{{ $t('welcome') }}</div>
        <div class="text-half">{{ $t('welcome_message') }}</div>
      </q-card-section>
      <q-card-section v-if="haveVersion">
        <q-scroll-area visible>
          <div v-for="(releaseNote, index) in releaseNotes" :key="index">
            <div class="text-half text-underline">{{ releaseNote.version }}</div>
            <ul>
              <li v-for="(message, index) in releaseNote.messages" :key="index" class="text-half">{{ message }}</li>
            </ul>
          </div>
        </q-scroll-area>
      </q-card-section>
      <q-card-actions align="right">
        <q-btn color="primary" data-autofocus="true" flat :label="$t('ok')" :ripple="false" rounded @click="submitDialog" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import { i18n } from '../boot/i18n'

import semver from 'semver'

const store = useStore()
const $te = i18n.global.te
const $tm = i18n.global.tm

const emit = defineEmits([
  'hide',
  'ok'
])

const dialog = ref(null)

const haveVersion = computed(() => {
  return store.state.application.version !== null
})

const releaseNotes = computed(() => {
  let versionsSorted = semver.rsort(versions.value)

  if (store.state.application.version !== null) {
    versionsSorted = versionsSorted.filter(version => semver.gt(version, store.state.application.version))
  }

  const releaseNotes = versionsSorted.reduce((accumulator, version) => {
    const key = `release_notes.${version.replaceAll('.', '_')}`

    if ($te(key)) {
      accumulator.push({ version, messages: $tm(key) })
    }

    return accumulator
  }, [])

  return releaseNotes
})

const versions = computed(() => {
  return [
    '1.0.0',
    '1.0.1',
    '1.0.2',
    '1.1.0',
    '1.2.0',
    '1.3.0',
    '1.3.1',
    '1.3.2',
    '1.4.0',
    '1.4.1'
  ]
})

function hide () {
  dialog.value.hide()
}

function hideDialog () {
  emit('hide')
}

// eslint-disable-next-line no-unused-vars
function show () {
  dialog.value.show()
}

function submitDialog () {
  emit('ok')
  hide()
}
</script>
