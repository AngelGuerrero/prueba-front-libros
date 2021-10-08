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
        class="
          dev
          no-underline
          p-3
          flex
          justify-center
          items-center
          font-bold
          text-yellow-400
          hover:text-yellow-300
        "
      >
        {{ item.title }}
      </router-link>

      <!-- Iniciar y cerrar sesión -->
      <router-link
        v-if="!isAuthenticated"
        :to="{ name: 'Login' }"
        class="
          dev
          no-underline
          p-3
          flex
          justify-center
          items-center
          font-bold
          text-green-400
          hover:text-green-300
        "
      >
        Iniciar sesión
      </router-link>
      <a
        v-else
        @click="onLogout"
        class="
          dev
          no-underline
          cursor-pointer
          p-3
          flex
          justify-center
          items-center
          font-bold
          text-red-400
          hover:text-red-300
        "
      >
        Cerrar sesión
      </a>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      menu: [
        { title: 'Inicio', to: '/' },
        { title: 'Agregar libro', to: '/libros' }
      ]
    }
  },

  computed: mapGetters('authModule', ['isAuthenticated']),

  methods: {
    ...mapActions('authModule', ['logout']),

    onLogout () {
      this.logout()
      this.$router.push({ name: 'Login' }).catch(_ => ({}))
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
