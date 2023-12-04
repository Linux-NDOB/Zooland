<template>
  <q-input standout v-model="value" type="email" prefix="Email:" hint="Ingrese su email" :error-message="errorMessage"
    :error="!!errorMessage">
    <template v-slot:prepend>
      <q-icon name="contact_mail" color="brown" />
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
