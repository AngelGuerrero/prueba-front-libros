/**
 * Authorized copying of this file, via any medium.
 *
 * Proprietary and public.
 *
 * Written by Ángel Guerrero <lasantiagoguerrero@gmail.com>, 2021.
 * */
import Resource from '@/api/resource'

const booksResource = new Resource({
  resource: 'api/v1/books/',
  module: 'booksModule',
  withDebug: false
})

export default {
  namespaced: true,

  state: {
    books: []
  },

  getters: {
    isThereBooks: state => Boolean(state.books > 0),

    getBooks: state => state.books
  },

  mutations: {
    SET_BOOKS (state, payload) {
      state.books = payload
    }
  },

  actions: {
    /**
     * Obtiene el listado de libros.
     */
    async getBooksAction ({ commit }) {
      const { error, data, message } = await booksResource.get({})

      if (error) return { error, message }

      commit('SET_BOOKS', data)

      return { data, message }
    },

    /**
     * me
     *
     * Obtiene la información del usuario actualmente autenticado.
     *
     * @param {Number} id Id del usuario para obtener su información
     *
     * @returns {Object} Retorna la información del usuario actualmente autenticado.
     */
    async me ({ commit }, { id }) {
      const { error, data, message } = await booksResource.get({
        url: `/me/${id}`
      })

      const user = error ? null : data.data

      commit('setAuthUser', user)

      return { error, data: user, message }
    },

    /**
     * login
     *
     * Manda los siguientes parámetros para el inicio de sesión.
     *
     * @param {Object} object.email          "angel@demo.com"
     * @param {Object} object.password       "c5b29f2f0034bd40c"
     *
     * @returns {Object} Retorna la información del usuario actualmente autenticado.
     */
    async login ({ commit }, { email, password }) {
      const { error, data, message } = await booksResource.post({
        url: '/login',
        data: { email, password }
      })

      const user = data ? data.data : null
      commit('setAuthUser', user)

      return { error, data, message }
    },

    /**
     * logout
     *
     * Manda una señal con el id del usuario actualmente autenticado para cerrar la sesión en backend.
     *
     * @returns Retorna información si ha ocurrido un error o no, y un mensaje del proceso.
     */
    async logout ({ state, commit }) {
      const { id } = state.authUser

      if (!id) return

      const { error, message } = await booksResource.post({
        url: '/logout',
        data: { id }
      })

      if (!error) commit('setAuthUser', null)

      return { error, message }
    },

    /**
     * recoverPassword
     *
     * @param {String} email Email del usuario a mandar el email para la recuperación de contraseña.
     */
    async recoverPassword (_, { email }) {
      const { error, message } = await booksResource.post({
        url: '/forget-password',
        data: { email }
      })

      return { error, message }
    },

    /**
     * resetPassword
     *
     * @param {String} email Email del usuario para cambiar su nueva contraseña.
     * @param {String} token Token generado por el backend para el cambio de contraseña.
     * @param {password} password La nueva contraseña del usaurio a establecer.
     */
    async resetPassword (_, { email, token, password }) {
      const { error, message } = await booksResource.post({
        url: '/reset-password',
        data: { email, token, password }
      })

      return { error, message }
    }
  }
}
