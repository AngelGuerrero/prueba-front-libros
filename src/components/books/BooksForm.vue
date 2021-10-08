<template>
  <div class="dev px-3 md:px-16">
    <h1>Agregar nuevo libro</h1>

    <XNotification />

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
      <input type="submit" class="btn" value="Agregar" />
    </form>
  </div>
</template>

<script>
import XNotification from '@/components/notification/XNotification'

const book = () => ({
  title: '',
  year: '',
  author: ''
})

export default {
  name: 'BooksForm',

  components: {
    XNotification
  },

  data () {
    return {
      book: book()
    }
  },

  methods: {
    reset () {
      this.book = book()
    }
  }
}
</script>

<style lang="scss" scoped>
.input {
  width: 100%;
  font-size: clamp(0.8rem, 1.2rem, 1.5rem);
  padding: 0.25em 0.5em;
  background-color: #fff;
  border: 2px solid rgb(78, 22, 168);
  border-radius: 4px;
}

.btn {
  border: 1px solid transparent;
  padding: 8px;
  margin: 10px 0;
  background-color: $blue;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: lighten($color: $blue, $amount: 20);
  }
  &:active {
    background-color: lighten($color: $blue, $amount: 50);
  }
}
</style>
