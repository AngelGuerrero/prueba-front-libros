<template>
  <div class="mynavbar px-3 md:px-2">
    <!-- Logotipo -->
    <div class="dev py-3 flex items-center justify-center">
      <router-link to="/" class="no-underline">
        <h2 class="text-indigo-100 h-2">Librería</h2>
      </router-link>
    </div>

    <!-- Lista de menús -->
    <div class="dev hidden md:flex-1 md:flex md:justify-end">
      <router-link
        v-for="item in menu"
        :key="item.id"
        :to="item.to"
        class="dev
          no-underline
          p-3
          flex
          justify-center
          items-center
          font-bold
          text-yellow-400
          hover:text-yellow-300"
        >{{ item.title }}</router-link
      >

      <!-- Iniciar sesión -->
      <router-link
        :to="{ name: 'Login' }"
        class="dev
          no-underline
          p-3
          flex
          justify-center
          items-center
          font-bold
          bg-indigo-800
          text-white
          hover:text-yellow-300"
        >Iniciar sesión</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      menu: [
        { title: 'Inicio', to: '/' },
        { title: 'Libros', to: '/libros' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.mynavbar {
  height: 100%;

  border: 1px solid;
  display: flex;
  background-color: $dark;
}
</style>
