<template>
  <q-input standout v-model="value" type="text" prefix="Nombres:" hint="Ingrese sus nombres" :error-message="errorMessage"
    :error="!!errorMessage">
    <template v-slot:prepend>
      <q-icon name="account_circle" color="brown" />
    </template>
  </q-input>
</template>

<script setup lang="ts">
import { defineProps, toRef } from 'vue'
import { useField } from 'vee-validate'

const props = defineProps({
  name: {
    type: String,
    required: true
  }
})

const { errorMessage, value } = useField(toRef(props, 'name'))
</script>
