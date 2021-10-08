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
    isThereBooks: state => state.books.length > 0,

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

    async createBookAction (_, { title, year, author }) {
      const { error, message } = await booksResource.post({
        payload: { title, year, author }
      })

      if (error) return { error, message }

      return { message }
    }
  }
}
