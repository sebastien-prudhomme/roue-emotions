<template>
  <q-dialog persistent ref="dialog" @hide="hideDialog">
    <q-card class="q-dialog-plugin">
      <q-card-section>{{ message }}</q-card-section>
      <q-card-section>
        <q-icon-picker :icons="icons" style="height: 27.5vh;" v-model="icon" />
      </q-card-section>
      <q-card-section>
        <q-input counter dense :maxlength="40" v-model="text" />
      </q-card-section>
      <q-card-actions align="right">
        <q-btn color="primary" flat :label="$t('cancel')" :ripple="false" rounded @click="cancelDialog" />
        <q-btn color="primary" :disable="disable" flat :label="$t('save')" :ripple="false" rounded @click="submitDialog" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import validate from '../helpers/validate'
import Joi from 'joi'

export default {
  name: 'DialogIconText',
  props: {
    message: {
      type: String,
      default: ''
    },
    initialIcon: {
      type: String,
      default: ''
    },
    initialText: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      icon: this.initialIcon,
      text: this.initialText
    }
  },
  computed: {
    disable: function () {
      const iconIsValid = validate(Joi.string().trim().min(1))
      const textIsValid = validate(Joi.string().trim().min(1))

      return (iconIsValid(this.icon) !== true) || (textIsValid(this.text) !== true)
    },
    icons: function () {
      return [
        { name: 'img:emotions/rigolett-angry.png' },
        { name: 'img:emotions/rigolett-calm.png' },
        { name: 'img:emotions/rigolett-disappointed.png' },
        { name: 'img:emotions/rigolett-happy.png' },
        { name: 'img:emotions/rigolett-jealous.png' },
        { name: 'img:emotions/rigolett-joyful.png' },
        { name: 'img:emotions/rigolett-offended.png' },
        { name: 'img:emotions/rigolett-sad.png' },
        { name: 'img:emotions/rigolett-scared.png' },
        { name: 'img:emotions/rigolett-tired.png' }
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
      const data = {
        icon: this.icon,
        text: this.text.trim()
      }

      this.$emit('ok', data)
      this.hide()
    }
  }
}
</script>
