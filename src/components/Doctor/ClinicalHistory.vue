<template lang="pug">
.q-pa-md
  q-card.absolute-center.q-pa-sm.q-mt-lg(style="width: 40%" class="flex flex-center justify-center q-gutter-y-sm")
    Form(:validation-schema='registerSchema' class="")
      div(class="bg-white lato-light row justify-center")
        q-avatar(size="150px" class="q-mr-sm")
          img(src="src/assets/Logo/Zooland.png")
      .q-gutter-y-sm.q-py-sm.text-center(style="width: 500px")
        Input(:name="'date_visited'" label="Fecha visita" v-model="registerFields.date_visited" type="datetime-local")
          template(v-slot:prependIcon)
            q-icon(name="today" color="brown")
        Input(:name="'symptoms'" label="Sintomas" v-model="registerFields.symptoms")
          template(v-slot:prependIcon)
            q-icon(name="fact_check" color="brown")
        Input(:name="'diagnosis'" label="Diagnostico" v-model="registerFields.diagnosis")
          template(v-slot:prependIcon)
            q-icon(name="event_note" color="brown")
        Input(:name="'treatment'" label="Tratamiento" v-model="registerFields.treatment")
          template(v-slot:prependIcon)
            q-icon(name="article" color="brown")

        div.flex.justify-center.q-gutter-md
        q-btn.q-mr-sm(label="Crear Historia" color="brown" @click="validateRegisterForm()")
        q-btn(label="Editar Historia clinica" color="brown" @click="validateEdit()")
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { mainStore } from 'src/stores/example-store'
// Form
import { Form } from 'vee-validate'
import * as yup from 'yup'
import Input from 'src/components/Form/EditableInput.vue'
import { isEmptyBindingElement } from 'typescript'

const store = mainStore()

const registerFields = ref({
  dog_id: '',
  date_visited: '',
  symptoms: '',
  diagnosis: '',
  treatment: ''
})

const registerSchema = yup.object().shape({
  date_visited: yup.string().required('Este campo no puede ir vacio')
    .min(1, 'Minimo 1 caracteres')
    .max(254, 'Maximo 254 caracteres'),
  symptoms: yup.string().required('Este campo no puede ir vacio')
    .min(1, 'Minimo 1 caracteres'),
  diagnosis: yup.string().required('Este campo no puede ir vacio')
    .min(1, 'Minimo 1 caracteres'),
  treatment: yup.string().required('Este campo no puede ir vacio')
    .min(1, 'Minimo 1 caracteres'),
})

const register = async () => {
  registerFields.value.dog_id = store.dogId
  const response = await store.post('clinical_history/', registerFields.value)
  response >= 200 && response < 300 ? store.notify('Exito!', 'Edicion exitosa', 'success') : store.notify('Error', 'Registro invalido', 'error')
  cleanRegisterFields()
}

const edit = async () => {
  const response = await store.put('clinical_history/', store.dogId + '/', registerFields.value)
  response >= 200 && response < 300 ? store.notify('Exito!', 'Edicion exitosa', 'success') : store.notify('Error', 'Registro invalido', 'error')
  cleanRegisterFields()
}

const cleanRegisterFields = () => {
  registerFields.value = {
    dog_id: '',
    date_visited: '',
    symptoms: '',
    diagnosis: '',
    treatment: ''
  }
}

const validateRegisterForm = () => {
  registerSchema.validate(registerFields.value).then((valid) => {
    register()
  }).catch((err) => {
    console.log(err)
  })
}

const validateEdit = () => {
  registerSchema.validate(registerFields.value).then((valid) => {
    edit()
  }).catch((err) => {
    console.log(err)
  })
}

const getArticle = async () => {
  const request = await store.get('clinical_history/' + store.dogId)
  registerFields.value = request
}

onMounted(() => {
  getArticle()
})
</script>
