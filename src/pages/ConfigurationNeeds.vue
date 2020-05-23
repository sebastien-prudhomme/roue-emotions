<template>
  <q-page class="bg-yellow-4">
    <div class="text-center">{{ $t('i_need') }}</div>
    <q-list>
      <vue-draggable animation="150" class="q-gutter-y-md" handle=".q-item__section--avatar" :scroll-sensitivity="sensitivity" v-model="needs">
        <q-item v-for="(need, index) in needs" class="bg-white inset-shadow rounded-borders" :key="index">
          <q-item-section avatar>
            <q-icon color="primary" name="fas fa-arrows-alt-v" />
          </q-item-section>
          <q-item-section class="text-center">{{ need }}</q-item-section>
          <q-item-section side>
            <q-btn color="primary" dense flat icon="fas fa-ellipsis-v" round>
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
      </vue-draggable>
    </q-list>
  </q-page>
</template>

<script>
export default {
  name: 'ConfigurationNeeds',
  components: {
    VueDraggable: () => import('vuedraggable')
  },
  computed: {
    needs: {
      get: function () {
        return this.$store.state.configuration.needs
      },
      set: function (needs) {
        this.$store.commit('configuration/setNeeds', { needs })
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
    removeNeed: function (index) {
      this.$q.dialog({
        message: this.$t('remove_this_need'),
        ok: {
          flat: true,
          label: this.$t('remove')
        },
        cancel: {
          flat: true,
          label: this.$t('cancel')
        },
        persistent: true
      }).onOk(() => {
        this.$store.dispatch('configuration/removeNeed', { index })
      })
    },
    updateNeed: function (index) {
      this.$q.dialog({
        message: this.$t('i_need'),
        prompt: {
          model: this.$store.state.configuration.needs[index]
        },
        ok: {
          flat: true,
          label: this.$t('save')
        },
        cancel: {
          flat: true,
          label: this.$t('cancel')
        },
        persistent: true
      }).onOk(need => {
        this.$store.dispatch('configuration/updateNeed', { index, need })
      })
    }
  }
}
</script>
