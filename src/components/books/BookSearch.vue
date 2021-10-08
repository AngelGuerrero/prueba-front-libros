<template>
  <form @submit.prevent="submit">
    <div class="form__control my-5">
      <label for="search" class="font-bold">Buscar</label>
      <input
        name="search"
        class="input"
        v-model="input"
        type="search"
        placeholder="Buscar por título, autor o año"
      />
    </div>
  </form>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'BookSearch',

  data () {
    return {
      input: null
    }
  },

  watch: {
    input (newValue) {
      if (!newValue || newValue === '') {
        this.getBooksAction()
      }
    }
  },

  methods: {
    ...mapActions('booksModule', ['getBooksAction', 'searchBookAction']),

    async submit () {
      if (!this.input) return

      const { error, message } = await this.searchBookAction(this.input)

      if (error) this.$notify(error, 'Búsqueda de libro', message)
    }
  }
}
</script>
