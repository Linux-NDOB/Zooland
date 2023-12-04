<template lang="pug">
q-layout(view="lHh Lpr lFf")
  q-header(reveal elevated)
    q-toolbar(class="bg-white q-pa-none lato-light")
      q-avatar(size="70px" class="q-ma-none q-pa-none")
        img(src="logo/zooland.png")
      q-toolbar-title
        div.text-black.text-bold.text-italic Zooland
      q-space
      q-btn(label="Inicio" class="text-black" flat to="/")
      q-btn(label="Entrar" class="text-black" flat to="/owner")
      q-btn(label="Registrarse" class="text-black" flat to="register")
      q-btn(label="Doctor" class="text-black" flat to="doctor")

  q-footer(elevated class="lato-light")
    q-toolbar(class="bg-white q-pa-none")
      q-avatar(size="90px" class="q-ma-none q-pa-none")
        img(src="logo/zooland.png")
      q-toolbar-title
        div.text-black.text-bold.text-italic Zooland
      div.text-black.text-bold.text-italic Todos los derechos reservados

  q-page-container(class="flex justify-center align-items-center roboto-light")
    router-view
</template>
