<template>
  <XBoxContainer>
    <XTitle>Agregar nuevo libro</XTitle>

    <form @submit.prevent="submit">
      <!-- Título -->
      <div class="form__control my-5">
        <label for="title" class="font-bold">Titulo</label>
        <input
          name="title"
          class="input"
          v-model="book.title"
          type="text"
          placeholder="Ingresa el título del libro"
          required
        />
      </div>

      <!-- Año -->
      <div class="form__control my-5">
        <label for="year" class="font-bold">Año del libro</label>
        <input
          name="year"
          class="input"
          v-model="book.year"
          type="number"
          placeholder="Ingresa el año del libro"
          required
        />
      </div>

      <!-- Author -->
      <div class="form__control my-5">
        <label for="author" class="font-bold">Author</label>
        <input
          name="author"
          class="input"
          v-model="book.author"
          type="text"
          placeholder="Ingresa el autor del libro"
          required
        />
      </div>
      <input type="submit" class="btn--primary" value="Agregar" />
    </form>
  </XBoxContainer>
</template>

<script>
import { mapActions } from 'vuex'

const book = () => ({
  title: '',
  year: '',
  author: ''
})

export default {
  name: 'BooksForm',

  data () {
    return {
      book: book()
    }
  },

  methods: {
    ...mapActions('booksModule', ['createBookAction']),

    async submit () {
      const { error, message } = await this.createBookAction(this.book)

      this.$notify(error, 'Agregar nuevo libro', message)

      if (!error) this.reset()
    },

    reset () {
      this.book = book()
    }
  }
}
</script>
