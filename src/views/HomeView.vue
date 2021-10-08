<template>
  <div>
    <!-- Listado de libros -->
    <BooksList />
  </div>
</template>

<script>
import BooksList from '@/components/books/BooksList'

export default {
  name: 'Home',

  components: {
    BooksList
  }
}
</script>
