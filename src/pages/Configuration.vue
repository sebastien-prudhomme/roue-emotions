<template>
  <q-page>
    <q-list class="q-gutter-y-md">
      <q-item class="bg-white inset-shadow rounded-borders" to="/configuration/emotions">
        <q-item-section class="text-center">{{ $t('my_emotions') }}</q-item-section>
      </q-item>
      <q-item class="bg-white inset-shadow rounded-borders" to="/configuration/needs">
        <q-item-section class="text-center">{{ $t('my_needs') }}</q-item-section>
      </q-item>
      <q-item class="bg-white inset-shadow rounded-borders" to="/configuration/actions">
        <q-item-section class="text-center">{{ $t('my_actions') }}</q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Configuration'
})
</script>
