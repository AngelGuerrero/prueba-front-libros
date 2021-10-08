<template>
  <div v-show="isThereBooks" class="dev px-3 md:px-16">
    <h1 class="h-2">Listado de libros</h1>
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

      this.$notify(error, 'Listado de libros', message, false)
    }
  }
}
</script>
