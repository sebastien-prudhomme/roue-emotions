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

<script>
import semver from 'semver'

export default {
  name: 'DialogWelcome',
  computed: {
    haveVersion: function () {
      return this.$store.state.application.version !== null
    },
    releaseNotes: function () {
      let versions = semver.rsort(this.versions)

      if (this.$store.state.application.version !== null) {
        versions = versions.filter(version => semver.gt(version, this.$store.state.application.version))
      }

      const releaseNotes = versions.reduce((accumulator, version) => {
        const key = `release_notes.${version.replaceAll('.', '_')}`

        if (this.$te(key)) {
          accumulator.push({ version, messages: this.$t(key) })
        }

        return accumulator
      }, [])

      return releaseNotes
    },
    versions: function () {
      return [
        '1.0.0',
        '1.0.1',
        '1.0.2',
        '1.1.0',
        '1.2.0'
      ]
    }
  },
  methods: {
    cancelDialog: function () {
      this.hide()
    },
    hide: function () {
      this.$refs.dialog.hide()
    },
    hideDialog: function () {
      this.$emit('hide')
    },
    show: function () {
      this.$refs.dialog.show()
    },
    submitDialog: function () {
      this.$emit('ok')
      this.hide()
    }
  }
}
</script>
