<template lang="pug">
q-layout(view="lHh Lpr lFf")
    q-header(reveal elevated)
      q-toolbar(class="bg-white q-pa-none lato-light")
        q-avatar(size="70px" class="q-ma-none q-pa-none")
          img(src="logo/zooland.png")
        q-toolbar-title
          div.text-black.text-bold.text-italic Zooland
        q-space
        q-btn(label="Mascotas" class="text-black" flat to="user-list")
        q-btn(label="Registrar Mascotas" class="text-black" flat to="/user-create")
        q-btn(label="Citas" class="text-black" flat to="/user-list-date")
        q-btn(label="Salir" class="text-black" flat to="/")

    q-footer(elevated class="lato-light")
      q-toolbar(class="bg-white q-pa-none")
        q-avatar(size="40px" class="q-ma-none q-pa-none")
          img(src="logo/zooland.png")
        q-toolbar-title
          div.text-black.text-bold.text-italic Zooland
        div.text-black.text-bold.text-italic Todos los derechos reservados

    q-page-container(class="flex justify-center align-items-center roboto-light")
      router-view
</template>
