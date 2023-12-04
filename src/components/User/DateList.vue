<template>
  <div class="q-pa-md container">
    <q-table title="Citas" :rows="rows" :columns="columns" row-key="name" selection="multiple"
      v-model:selected="selected" :filter="filter" grid hide-header>

      <template v-slot:item="props">
        <div class="q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition"
          :style="props.selected ? 'transform: scale(0.95);' : ''">
          <q-card class="index-card" flat bordered>
            <q-img class="my-image" src="https://t3.ftcdn.net/jpg/05/30/48/54/360_F_530485466_BQWjzzkuCwUqI3iBVHgY76yA0sLjJpmg.jpg" />

            <q-card-section>
              <div class="row no-wrap items-center column">
                <div class="col text-bold text-black ellipsis">
                  <q-icon name="pets" />
                  Mascota: {{ props.row.dog_name }}
                </div>
                <div class="col-auto row no-wrap items-center text-bold text-black ellipsis">
                  <q-icon name="pets" />
                  Fecha: {{ props.row.date }}
                </div>
              </div>
            </q-card-section>
            <q-separator />
            <q-card-actions class="justify-center">
              <q-btn flat round icon="remove" color="red" />
              <q-btn flat color="red" @click="delProduct(props.row.date_id)">
                Cancelar
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

  const data = await store.get('dog_date_id/' + store.userId)
  let index = 0
  data.forEach((row: any) => {
    const newRow = {
      index,
      date: row.date,
      dog_name: row.dog_name,
      owner_name: row.owner_name,
      owner_id: row.owner_id,
      date_id: row.date_id
    }
    rows.value.push(newRow)
    index += 1
  })
}

const delProduct = async (id: string) => {
  const response = await store.del('dog_date/', id + '/')
  response >= 200 && response < 300 ? store.notify('Exito!', 'Eliminado', 'success') : store.notify('Error', 'No eliminado', 'error')
  rows.value = []
  fillRows()
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
