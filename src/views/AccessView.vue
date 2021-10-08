<template>
  <XBoxContainer>
    <XTitle>Iniciar sesión</XTitle>

    <form @submit.prevent="submit">
      <!-- Nombre de usuario -->
      <div class="form__control my-5">
        <label for="username" class="font-bold">Usuario</label>
        <input
          name="username"
          class="input"
          v-model="user.username"
          type="text"
          placeholder="Ingresa tu nombre de usuario"
          required
        />
      </div>

      <!-- Contraseña -->
      <div class="form__control my-5">
        <label for="password" class="font-bold">Contraseña</label>
        <input
          name="password"
          class="input"
          v-model="user.password"
          type="password"
          placeholder="Ingresa tu contraseña"
          required
        />
      </div>

      <input type="submit" class="btn--success" value="Iniciar sesión" />
    </form>
  </XBoxContainer>
</template>

<script>
import { mapActions } from 'vuex'

const user = () => ({
  username: '',
  password: ''
})

export default {
  name: 'AccessView',

  data () {
    return {
      user: user()
    }
  },

  methods: {
    ...mapActions('authModule', ['login']),

    async submit () {
      const { error, message } = await this.login(this.user)

      this.$notify(error, 'Inicio de sesión', message)

      this.$router.push({ name: 'Home' }).catch(_ => ({}))
    }
  }
}
</script>
