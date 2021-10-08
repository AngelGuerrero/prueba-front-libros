<template>
  <XContainer>
    <XTitle>Listado de libros</XTitle>

    <div
      v-if="!isThereBooks"
      class="text-center border-solid rounded-md border-gray-600 bg-white shadow-lg"
    >
      <h1 class="text-lg text-gray-700">No hay libros registrados de momento</h1>
    </div>
    <div v-else class="dev bg-white p-3 rounded-2xl shadow-2xl">
      <BookSearch />
      <vs-table striped>
        <template #thead>
          <vs-tr>
            <vs-th>Título</vs-th>
            <vs-th>Autor</vs-th>
            <vs-th>Año</vs-th>
          </vs-tr>
        </template>
        <template #tbody>
          <vs-tr :key="i" v-for="(tr, i) in getBooks" :data="tr">
            <vs-td>
              {{ tr.title }}
            </vs-td>
            <vs-td>
              {{ tr.author }}
            </vs-td>
            <vs-td>
              {{ tr.year }}
            </vs-td>
          </vs-tr>
        </template>
      </vs-table>
    </div>
  </XContainer>
</template>

<script>
import BookSearch from '@/components/books/BookSearch'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'BooksList',

  components: {
    BookSearch
  },

  created () {
    this.submit()
  },

  destroyed () {
    this.$clearNotify()
  },

  computed: mapGetters('booksModule', ['isThereBooks', 'getBooks']),

  methods: {
    ...mapActions('booksModule', ['getBooksAction']),

    async submit () {
      const { error, message } = await this.getBooksAction()

      if (error) this.$notify(error, 'Listado de libros', message, false)
    }
  }
}
</script>
