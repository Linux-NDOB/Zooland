<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card" flat>
      <q-img class="login-img"
        src="logo/zooland.png"
      />

      <q-card-section>
        <div class="text-overline text-orange-9">Zooland</div>
        <div class="text-h5 q-mt-sm q-mb-xs">Bienvenido a Zooland</div>
        <div class="text-caption text-grey">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
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

