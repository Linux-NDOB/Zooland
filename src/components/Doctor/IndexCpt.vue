<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card" flat>
      <q-img class="login-img" src="logo/zooland.png" />

      <q-card-section>
        <div class="text-overline text-orange-9">Administrador</div>
        <div class="text-h5 q-mt-sm q-mb-xs">Bienvenido Doctor</div>
        <div class="text-caption text-grey">
          Capacidad para comunicarse con los propietarios de las mascotas en relación al diagnostico, pronóstico y
          tratamiento

          Experiencia educando al equipo acerca de los procedimientos médicos y los protocolos para el cuidado de
          mascotas.

          Experiencia en consulta y hospitalización en clinica.
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    return {
      expanded: ref(false),
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  }
}
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 450px
  height: 100%
  max-height: 500px
  overflow: hidden

.login-img
  height: 300px
</style>

