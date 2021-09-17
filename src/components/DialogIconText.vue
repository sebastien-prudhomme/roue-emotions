<template>
  <q-dialog class="dialog-icon-text" persistent ref="dialog" @hide="hideDialog">
    <q-card class="q-dialog-plugin">
      <q-card-section>{{ message }}</q-card-section>
      <q-card-section>
        <q-icon-picker :icons="icons" v-model="icon" />
      </q-card-section>
      <q-card-section>
        <q-input counter dense :maxlength="20" outlined v-model="text" />
      </q-card-section>
      <q-card-actions align="right">
        <q-btn color="primary" flat :label="$t('cancel')" :ripple="false" rounded @click="cancelDialog" />
        <q-btn color="primary" :disable="disable" flat :label="$t('save')" :ripple="false" rounded @click="submitDialog" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import { defineComponent } from 'vue'
import validate from '../helpers/validate'
import Joi from 'joi'

export default defineComponent({
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
        { name: 'img:emotions/rigolett/angry.png' },
        { name: 'img:emotions/rigolett/calm.png' },
        { name: 'img:emotions/rigolett/disappointed.png' },
        { name: 'img:emotions/rigolett/happy.png' },
        { name: 'img:emotions/rigolett/jealous.png' },
        { name: 'img:emotions/rigolett/joyful.png' },
        { name: 'img:emotions/rigolett/offended.png' },
        { name: 'img:emotions/rigolett/sad.png' },
        { name: 'img:emotions/rigolett/scared.png' },
        { name: 'img:emotions/rigolett/tired.png' },
        { name: 'img:emotions/openmoji/1f600.png' },
        { name: 'img:emotions/openmoji/1f603.png' },
        { name: 'img:emotions/openmoji/1f604.png' },
        { name: 'img:emotions/openmoji/1f601.png' },
        { name: 'img:emotions/openmoji/1f606.png' },
        { name: 'img:emotions/openmoji/1f605.png' },
        { name: 'img:emotions/openmoji/1f923.png' },
        { name: 'img:emotions/openmoji/1f602.png' },
        { name: 'img:emotions/openmoji/1f642.png' },
        { name: 'img:emotions/openmoji/1f643.png' },
        { name: 'img:emotions/openmoji/1f609.png' },
        { name: 'img:emotions/openmoji/1f60a.png' },
        { name: 'img:emotions/openmoji/1f607.png' },
        { name: 'img:emotions/openmoji/1f970.png' },
        { name: 'img:emotions/openmoji/1f60d.png' },
        { name: 'img:emotions/openmoji/1f929.png' },
        { name: 'img:emotions/openmoji/1f618.png' },
        { name: 'img:emotions/openmoji/1f617.png' },
        { name: 'img:emotions/openmoji/263a.png' },
        { name: 'img:emotions/openmoji/1f61a.png' },
        { name: 'img:emotions/openmoji/1f619.png' },
        { name: 'img:emotions/openmoji/1f972.png' },
        { name: 'img:emotions/openmoji/1f60b.png' },
        { name: 'img:emotions/openmoji/1f61b.png' },
        { name: 'img:emotions/openmoji/1f61c.png' },
        { name: 'img:emotions/openmoji/1f92a.png' },
        { name: 'img:emotions/openmoji/1f61d.png' },
        { name: 'img:emotions/openmoji/1f911.png' },
        { name: 'img:emotions/openmoji/1f917.png' },
        { name: 'img:emotions/openmoji/1f92d.png' },
        { name: 'img:emotions/openmoji/1f92b.png' },
        { name: 'img:emotions/openmoji/1f914.png' },
        { name: 'img:emotions/openmoji/1f910.png' },
        { name: 'img:emotions/openmoji/1f928.png' },
        { name: 'img:emotions/openmoji/1f610.png' },
        { name: 'img:emotions/openmoji/1f611.png' },
        { name: 'img:emotions/openmoji/1f636.png' },
        { name: 'img:emotions/openmoji/1f636-200d-1f32b-fe0f.png' },
        { name: 'img:emotions/openmoji/1f60f.png' },
        { name: 'img:emotions/openmoji/1f612.png' },
        { name: 'img:emotions/openmoji/1f644.png' },
        { name: 'img:emotions/openmoji/1f62c.png' },
        { name: 'img:emotions/openmoji/1f62e-200d-1f4a8.png' },
        { name: 'img:emotions/openmoji/1f925.png' },
        { name: 'img:emotions/openmoji/1f60c.png' },
        { name: 'img:emotions/openmoji/1f614.png' },
        { name: 'img:emotions/openmoji/1f62a.png' },
        { name: 'img:emotions/openmoji/1f924.png' },
        { name: 'img:emotions/openmoji/1f634.png' },
        { name: 'img:emotions/openmoji/1f637.png' },
        { name: 'img:emotions/openmoji/1f912.png' },
        { name: 'img:emotions/openmoji/1f915.png' },
        { name: 'img:emotions/openmoji/1f922.png' },
        { name: 'img:emotions/openmoji/1f92e.png' },
        { name: 'img:emotions/openmoji/1f927.png' },
        { name: 'img:emotions/openmoji/1f975.png' },
        { name: 'img:emotions/openmoji/1f976.png' },
        { name: 'img:emotions/openmoji/1f974.png' },
        { name: 'img:emotions/openmoji/1f635.png' },
        { name: 'img:emotions/openmoji/1f635-200d-1f4ab.png' },
        { name: 'img:emotions/openmoji/1f92f.png' },
        { name: 'img:emotions/openmoji/1f920.png' },
        { name: 'img:emotions/openmoji/1f973.png' },
        { name: 'img:emotions/openmoji/1f978.png' },
        { name: 'img:emotions/openmoji/1f60e.png' },
        { name: 'img:emotions/openmoji/1f913.png' },
        { name: 'img:emotions/openmoji/1f9d0.png' },
        { name: 'img:emotions/openmoji/1f615.png' },
        { name: 'img:emotions/openmoji/1f61f.png' },
        { name: 'img:emotions/openmoji/1f641.png' },
        { name: 'img:emotions/openmoji/2639.png' },
        { name: 'img:emotions/openmoji/1f62e.png' },
        { name: 'img:emotions/openmoji/1f62f.png' },
        { name: 'img:emotions/openmoji/1f632.png' },
        { name: 'img:emotions/openmoji/1f633.png' },
        { name: 'img:emotions/openmoji/1f97a.png' },
        { name: 'img:emotions/openmoji/1f626.png' },
        { name: 'img:emotions/openmoji/1f627.png' },
        { name: 'img:emotions/openmoji/1f628.png' },
        { name: 'img:emotions/openmoji/1f630.png' },
        { name: 'img:emotions/openmoji/1f625.png' },
        { name: 'img:emotions/openmoji/1f622.png' },
        { name: 'img:emotions/openmoji/1f62d.png' },
        { name: 'img:emotions/openmoji/1f631.png' },
        { name: 'img:emotions/openmoji/1f616.png' },
        { name: 'img:emotions/openmoji/1f623.png' },
        { name: 'img:emotions/openmoji/1f61e.png' },
        { name: 'img:emotions/openmoji/1f613.png' },
        { name: 'img:emotions/openmoji/1f629.png' },
        { name: 'img:emotions/openmoji/1f62b.png' },
        { name: 'img:emotions/openmoji/1f971.png' },
        { name: 'img:emotions/openmoji/1f624.png' },
        { name: 'img:emotions/openmoji/1f621.png' },
        { name: 'img:emotions/openmoji/1f620.png' },
        { name: 'img:emotions/openmoji/1f92c.png' },
        { name: 'img:emotions/openmoji/1f608.png' },
        { name: 'img:emotions/openmoji/1f47f.png' }
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
})
</script>
