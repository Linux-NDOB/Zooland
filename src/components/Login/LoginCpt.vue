<template lang="pug">
.q-pa-md
    q-card.absolute-center.q-pa-sm(style="width: 30%" class="flex flex-center justify-center q-gutter-y-sm")
      Form(:validation-schema='userSchema' class="")
        div(class="bg-white lato-light row justify-center")
          q-avatar(size="150px" class="q-mr-sm")
            img(src="logo/zooland.png")
        .q-gutter-y-sm.q-py-sm.text-center(style="max-width: 300px")
          EmailInput(:name="'email'" v-model="fields.email")
          PasswordInput(:name="'password'" v-model="fields.password")
          div.flex.justify-center
          q-btn(label="Entrar" color="brown" @click="validateUserForm()")
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { mainStore } from 'src/stores/example-store'
// Form
import { Form } from 'vee-validate'
import * as yup from 'yup'
import EmailInput from 'src/components/Form/EmailInput.vue'
import PasswordInput from 'src/components/Form/PasswordInput.vue'

const router = useRouter()
const store = mainStore()

// User
interface UserData {
  email: string,
  password: string
}

const fields = ref<UserData>({
  email: '',
  password: ''
})

const userSchema = yup.object().shape({
  email: yup.string().required('Este campo no puede ir vacio')
    .email('Ingrese un email valido')
    .min(12, 'Minimo 12 caracteres')
    .max(254, 'Maximo 254 caracteres'),
  password: yup.string().required('Este campo no puede ir vacio')
    .min(8, 'Minimo 8 caracteres')
    .max(128, 'Maximo 128 caracteres')
})

const validateUser = async () => {
  const data = await store.get('owner/')
  const user = data.find((u: UserData) => u.email === fields.value.email && u.password === fields.value.password)
  if (user) {
    store.setUser(user.owner_id)
    router.push('/user-main')
    return true
  }
  store.notify('Error', 'Datos incorrectos', 'error')
  cleanFields()
  return false
}

const cleanFields = () => { fields.value = { email: '', password: '' } }

const validateUserForm = () => {
  userSchema.validate(fields.value).then((valid) => {
    validateUser()
  }).catch((err) => {
    console.log(err)
  })
}

// Register
interface RegisterData {
  user_name: string,
  email: string,
  password: string
}

const registerFields = ref<RegisterData>({
  user_name: '',
  email: '',
  password: ''
})

const registerSchema = yup.object().shape({
  user_name: yup.string().required('Este campo no puede ir vacio')
    .min(5, 'Minimo 5 caracteres')
    .max(50, 'Maximo 50 caracteres'),
  email: yup.string().required('Este campo no puede ir vacio')
    .email('Ingrese un email valido').min(12, 'Minimo 12 caracteres')
    .max(50, 'Maximo 50 caracteres'),
  password: yup.string().required('Este campo no puede ir vacio')
    .min(8, 'Minimo 8 caracteres')
    .max(20, 'Maximo 20 caracteres')
})

const register = async () => {
  const data = await store.get('user/')
  const emailToCheck = registerFields.value.email.trim().toLowerCase()
  const user = data.find((u: UserData) => u.email.trim().toLowerCase() === emailToCheck)
  console.log(user, emailToCheck)
  if (user) {
    store.notify('Error', 'Email en uso', 'error')
    return false
  } else {
    const response = await store.post('user/', registerFields.value)
    response >= 200 && response < 300 ? store.notify('Exito!', 'Registro exitoso', 'success') : store.notify('Error', 'Registro invalido', 'error')
  }
  cleanRegisterFields()
}

const cleanRegisterFields = () => { registerFields.value = { user_name: '', email: '', password: '' } }

const validateRegisterForm = () => {
  registerSchema.validate(registerFields.value).then((valid) => {
    register()
  }).catch((err) => {
    console.log(err)
  })
}
</script>

