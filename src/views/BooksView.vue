<template>
  <div>
    <!-- Formulario para agregar nuevo libro -->
    <BooksForm />
  </div>
</template>

<script>
import BooksForm from '@/components/books/BooksForm'

export default {
  name: 'BooksView',

  components: {
    BooksForm
  }
}
</script>
