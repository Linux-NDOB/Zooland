<template lang="pug">
.q-pa-md
    q-card.absolute-center.q-pa-sm(style="width: 30%" class="flex flex-center justify-center q-gutter-y-sm")
      Form(:validation-schema='registerSchema' class="")
        div(class="bg-white lato-light row justify-center")
          q-avatar(size="150px" class="q-mr-sm")
            img(src="src/assets/Logo/Zooland.png")
        .q-gutter-y-sm.q-py-sm.text-center(style="max-width: 300px")
          Input(:name="'name'" label="Nombre" v-model="registerFields.name")
            template(v-slot:prependIcon)
              q-icon(name="badge" color="brown")
          Input(:name="'breed'" label="Raza" v-model="registerFields.breed")
            template(v-slot:prependIcon)
              q-icon(name="pets" color="brown")
          Input(:name="'age'" label="Edad" v-model="registerFields.age")
            template(v-slot:prependIcon)
              q-icon(name="pin" color="brown")

          div.flex.justify-center
          q-btn(label="Editar Datos" color="brown" @click="validateRegisterForm()")
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { mainStore } from 'src/stores/example-store'
// Form
import { Form } from 'vee-validate'
import * as yup from 'yup'
import Input from 'src/components/Form/EditableInput.vue'

const store = mainStore()

const registerFields = ref({
  name: '',
  breed: '',
  age: '',
  owner_id: ''
})

const registerSchema = yup.object().shape({
  name: yup.string().required('Este campo no puede ir vacio')
    .min(1, 'Minimo 1 caracteres')
    .max(254, 'Maximo 254 caracteres'),
  breed: yup.string().required('Este campo no puede ir vacio')
    .min(1, 'Minimo 1 caracteres')
    .max(254, 'Maximo 254 caracteres'),
  age: yup.string().required('Este campo no puede ir vacio')
    .min(1, 'Minimo 1 caracteres')
    .max(50, 'Maximo 50 caracteres'),
})

const register = async () => {
  registerFields.value.owner_id = store.userId
  const response = await store.put('dog/', store.dogId + '/', registerFields.value)
  response >= 200 && response < 300 ? store.notify('Exito!', 'Edicion exitosa', 'success') : store.notify('Error', 'Registro invalido', 'error')

  cleanRegisterFields()
}

const cleanRegisterFields = () => {
  registerFields.value = {
    name: '',
    breed: '',
    age: '',
    owner_id: ''
  }
}

const validateRegisterForm = () => {
  registerSchema.validate(registerFields.value).then((valid) => {
    register()
  }).catch((err) => {
    console.log(err)
  })
}

const getArticle = async () => {
  const request = await store.get('dog/' + store.dogId)
  registerFields.value = request
}

onMounted(() => {
  getArticle()
})
</script>
