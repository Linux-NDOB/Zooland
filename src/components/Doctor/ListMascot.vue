<template>
  <div class="q-pa-md container">
    <q-table title="Mascotas" :rows="rows" :columns="columns" row-key="name" selection="multiple"
      v-model:selected="selected" :filter="filter" grid hide-header>
      <template v-slot:top-right>
        <q-input borderless dense debounce="300" v-model="filter" placeholder="Buscar mascota">
          <template v-slot:append>
            <q-icon name="pets" />
          </template>
        </q-input>
      </template>

      <template v-slot:item="props">
        <div class="q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition"
          :style="props.selected ? 'transform: scale(0.95);' : ''">
          <q-card class="index-card" flat bordered>
            <q-img class="my-image"
              src="https://t3.ftcdn.net/jpg/05/30/48/54/360_F_530485466_BQWjzzkuCwUqI3iBVHgY76yA0sLjJpmg.jpg" />

            <q-card-section>
              <div class="row no-wrap items-center">
                <div class="col text-bold text-black ellipsis">
                  <q-icon name="pets" />
                  Mascota: {{ props.row.name }}
                </div>
                <div class="col-auto row no-wrap items-center text-bold text-black ellipsis">
                  <q-icon name="pets" />
                  Raza: {{ props.row.breed }}
                </div>
              </div>
            </q-card-section>
            <q-card-section>
              <div class="row no-wrap items-center">
                <div class="col text-bold text-black ellipsis">
                  <q-icon name="pin" />
                  Edad: {{ props.row.age }}
                </div>
                <div class="col-auto row no-wrap items-center text-bold text-black ellipsis">
                  <q-icon name="person" />

                  Id: {{ props.row.dog_id }}
                </div>
              </div>
            </q-card-section>
            <q-separator />
            <q-card-actions class="justify-center">
              <q-btn flat round icon="description" color="brown" />
              <q-btn flat color="brown" @click="editProduct(props.row.dog_id)">
                Historia clinica
              </q-btn>
            </q-card-actions>
          </q-card>
        </div>
      </template>
    </q-table>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { mainStore } from 'src/stores/example-store'

const router = useRouter()
const store = mainStore()

const columns = [
  { name: 'Nombre', align: 'center', label: 'Nombre', field: 'product_name', sortable: true },
  { name: 'Precio', align: 'center', label: 'Precio', field: 'price', sortable: true },
  { name: 'Categoria', align: 'center', label: 'Precio', field: 'category', sortable: true }
]

const rows = ref([])
const filter = ref('')
const selected = ref([])

const fillRows = async () => {

  const data = await store.get('pets/' + store.userId)
  let index = 0
  data.forEach((row: any) => {
    const newRow = {
      index,
      owner_id: row.owner_id,
      dog_id: row.dog_id,
      breed: row.breed,
      age: row.age,
      name: row.name,
    }
    rows.value.push(newRow)
    index += 1
  })
}

const editProduct = async (id: string) => {
  store.setDog(id)
  router.push('doctor-history')
}

onMounted(() => fillRows())
</script>

<style lang="sass">
.grid-style-transition
  transition: transform .28s, background-color .28s

.container
  width: 1000px
  height: 50vh

.my-image
  height: 150px

.index-card
  border-radius: 15%
</style>
