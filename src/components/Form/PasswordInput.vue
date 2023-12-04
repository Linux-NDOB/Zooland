<template>
  <q-input standout v-model="value" :type="isPwd ? 'password' : 'text'" hint="Ingrese su clave"
    prefix="Clave:" :error-message="errorMessage" :error="!!errorMessage">
    <template v-slot:prepend>
      <q-icon name="lock" color="brown"/>
    </template>
    <template v-slot:append>
      <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="isPwd = !isPwd"
        color="brown" />
    </template>
  </q-input>
</template>

<script setup lang="ts">
import { defineProps, toRef, ref } from 'vue'
import { useField } from 'vee-validate'

const props = defineProps({
  name: {
    type: String,
    required: true
  }
})

const { errorMessage, value } = useField(toRef(props, 'name'))
const isPwd = ref(true)
</script>
