<template>
  <q-dialog class="dialog-export" persistent ref="dialog" @hide="hideDialog">
    <q-card class="q-dialog-plugin">
      <q-card-section>{{ $t('file_name') }}</q-card-section>
      <q-card-section>
        <q-input dense outlined suffix=".pdf" v-model="fileName" />
      </q-card-section>
      <q-card-section>{{ $t('paper_size') }}</q-card-section>
      <q-card-section>
        <q-select behavior="dialog" emit-value map-options :options="paperSizeOptions" outlined v-model="paperSize" />
      </q-card-section>
      <q-card-actions align="right">
        <q-btn color="primary" flat :label="$t('cancel')" :ripple="false" rounded @click="cancelDialog" />
        <q-btn color="primary" data-autofocus="true" :disable="disable" flat :label="$t('export')" :ripple="false" rounded @click="submitDialog" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import pdfExport from '../helpers/pdf-export'
import validate from '../helpers/validate'
import Joi from 'joi'

export default {
  name: 'DialogPdfExport',
  data () {
    return {
      fileName: this.$t('file_name_wheel_emotions'),
      paperSize: 'a4',
      paperSizeOptions: [
        { label: this.$t('paper_size_a4'), value: 'a4' },
        { label: this.$t('paper_size_letter'), value: 'letter' }
      ]
    }
  },
  computed: {
    disable: function () {
      const fileNameIsValid = validate(Joi.string().trim().min(1))

      return (fileNameIsValid(this.fileName) !== true)
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
      pdfExport(this.$store.state.configuration.emotions, this.$store.state.configuration.needs, this.$store.state.configuration.actions, this.fileName.trim(), this.paperSize)

      this.$emit('ok')
      this.hide()
    }
  }
}
</script>
