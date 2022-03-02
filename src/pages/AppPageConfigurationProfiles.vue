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

<script>
import { defineComponent } from 'vue'
import validate from '../helpers/validate'
import Joi from 'joi'

export default defineComponent({
  name: 'AppPageConfigurationProfiles',
  computed: {
    profileIndex: function () {
      return this.$store.state.configuration.profileIndex
    },
    profiles: function () {
      return this.$store.state.configuration.profiles
    }
  },
  methods: {
    removeProfile: function (index) {
      this.$q.dialog({
        message: this.$t('remove_this_profile'),
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
        this.$store.dispatch('configuration/removeProfile', { index })
      })
    },
    setProfileIndex: function (profileIndex) {
      this.$store.dispatch('configuration/setProfileIndex', { profileIndex })
    },
    updateProfile: function (index) {
      this.$q.dialog({
        message: this.$t('profile_name'),
        prompt: {
          counter: true,
          isValid: validate(Joi.string().trim().min(1)),
          maxlength: 10,
          model: this.$store.state.configuration.profiles[index].name,
          outlined: true
        },
        ok: {
          flat: true,
          label: this.$t('save'),
          rounded: true
        },
        cancel: {
          flat: true,
          label: this.$t('cancel'),
          rounded: true
        },
        persistent: true
      }).onOk(profile => {
        this.$store.dispatch('configuration/updateProfile', { index, profile })
      })
    }
  }
})
</script>
