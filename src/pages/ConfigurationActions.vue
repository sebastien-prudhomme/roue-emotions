<template>
  <q-page>
    <div class="text-center">{{ $t('i_can') }}</div>
    <q-list>
      <vue-draggable animation="150" class="q-gutter-y-md" force-fallback="true" handle=".q-item__section--avatar" item-key="index" :scroll-sensitivity="sensitivity" v-model="actionElements">
        <template #item="{ element, index }">
          <q-item class="bg-white inset-shadow rounded-borders">
            <q-item-section avatar>
              <q-icon color="primary" name="fas fa-arrows-alt-v" />
            </q-item-section>
            <q-item-section class="text-center">{{ element.action }}</q-item-section>
            <q-item-section side>
              <q-btn :aria-label="$t('menu')" color="primary" dense flat icon="fas fa-ellipsis-v" round>
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
        </template>
      </vue-draggable>
    </q-list>
  </q-page>
</template>

<script>
import { defineComponent, defineAsyncComponent } from 'vue'
import validate from '../helpers/validate'
import Joi from 'joi'

export default defineComponent({
  name: 'ConfigurationActions',
  components: {
    VueDraggable: defineAsyncComponent(() => import('vuedraggable'))
  },
  computed: {
    actionElements: {
      get: function () {
        const actions = this.$store.state.configuration.actions

        return actions.map((action, index) => ({ action, index }))
      },
      set: function (actionElements) {
        const actions = actionElements.map(actionsElement => actionsElement.action)

        this.$store.commit('configuration/setActions', { actions })
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
          counter: true,
          isValid: validate(Joi.string().trim().min(1)),
          maxlength: 40,
          model: this.$store.state.configuration.actions[index],
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
      }).onOk(action => {
        this.$store.dispatch('configuration/updateAction', { index, action })
      })
    }
  }
})
</script>
