<template lang="pug">
q-layout(view="lHh Lpr lFf")
    q-header(reveal elevated)
      q-toolbar(class="bg-white q-pa-none lato-light")
        q-avatar(size="70px" class="q-ma-none q-pa-none")
          img(src="src/assets/Logo/Zooland.png")
        q-toolbar-title
          div.text-black.text-bold.text-italic Zooland
        q-space
        q-btn(label="Mascotas" class="text-black" flat to="/doctor-pets")
        q-btn(label="Citas" class="text-black" flat to="/doctor-dates")
        q-btn(label="Salir" class="text-black" flat to="/")

    q-page-container(class="flex justify-center align-items-center roboto-light")
      router-view
</template>
