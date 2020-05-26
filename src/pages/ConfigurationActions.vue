<template>
  <q-page class="bg-yellow-4">
    <div class="text-center">{{ $t('i_can') }}</div>
    <q-list>
      <vue-draggable animation="150" class="q-gutter-y-md" force-fallback="true" handle=".q-item__section--avatar" :scroll-sensitivity="sensitivity" v-model="actions">
        <q-item v-for="(action, index) in actions" class="bg-white inset-shadow rounded-borders" :key="index">
          <q-item-section avatar>
            <q-icon color="primary" name="fas fa-arrows-alt-v" />
          </q-item-section>
          <q-item-section class="text-center">{{ action }}</q-item-section>
          <q-item-section side>
            <q-btn color="primary" dense flat icon="fas fa-ellipsis-v" round>
              <q-menu>
                <q-list>
                  <q-item clickable v-close-popup @click="updateAction(index)">
                    <q-item-section>{{ $t('edit') }}</q-item-section>
                  </q-item>
                  <q-item clickable v-close-popup @click="removeAction(index)">
                    <q-item-section>{{ $t('remove') }}</q-item-section>
                  </q-item>
                </q-list>
              </q-menu>
            </q-btn>
          </q-item-section>
        </q-item>
      </vue-draggable>
    </q-list>
  </q-page>
</template>

<script>
import validate from '../helpers/validate'
import Joi from '@hapi/joi'

export default {
  name: 'ConfigurationActions',
  components: {
    VueDraggable: () => import('vuedraggable')
  },
  computed: {
    actions: {
      get: function () {
        return this.$store.state.configuration.actions
      },
      set: function (actions) {
        this.$store.commit('configuration/setActions', { actions })
      }
    },
    sensitivity: function () {
      const vh = window.innerHeight / 100
      const sensitivity = 8 * vh

      return sensitivity + 8 * vh // Take header into account
      // return {
      //   top: sensitivity + 8 * vh, // Take header into account
      //   bottom: sensitivity,
      //   left: 0,
      //   right: 0
      // }
    }
  },
  methods: {
    removeAction: function (index) {
      this.$q.dialog({
        message: this.$t('remove_this_action'),
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
        this.$store.dispatch('configuration/removeAction', { index })
      })
    },
    updateAction: function (index) {
      this.$q.dialog({
        message: this.$t('i_can'),
        prompt: {
          isValid: validate(Joi.string().trim().min(1)),
          model: this.$store.state.configuration.actions[index]
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
      }).onOk(action => {
        this.$store.dispatch('configuration/updateAction', { index, action })
      })
    }
  }
}
</script>
