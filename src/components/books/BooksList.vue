<template>
  <div class="dev px-3 md:px-16">
    <h1 class="text-gray-700">Listado de libros</h1>

    <div
      v-show="!isThereBooks"
      class="text-center border-solid rounded-xl border-gray-600 bg-white shadow-lg"
    >
      <h1 class="text-lg text-gray-700">No hay libros registrados de momento</h1>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'BooksList',

  created () {
    this.submit()
  },

  destroyed () {
    this.$clearNotify()
  },

  computed: mapGetters('booksModule', ['isThereBooks']),

  methods: {
    ...mapActions('booksModule', ['getBooksAction']),

    async submit () {
      const { error, message } = await this.getBooksAction()

      if (error) this.$notify(error, 'Listado de libros', message, false)
    }
  }
}
</script>
