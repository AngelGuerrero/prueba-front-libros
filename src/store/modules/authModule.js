/**
 * Authorized copying of this file, via any medium.
 *
 * Proprietary and public.
 *
 * Written by Ángel Guerrero <lasantiagoguerrero@gmail.com>, 2021.
 * */

import Resource from '@/api/resource'

const authResource = new Resource({
  resource: 'api/v1/auth',
  module: 'authModule',
  withDebug: false
})

export default {
  namespaced: true,

  state: {
    authUser: null,

    userToken: null
  },

  getters: {
    isAuthenticated: state => Boolean(state.userToken),

    getUserToken: state => state.userToken
  },

  mutations: {
    SET_AUTH_USER (state, payload) {
      state.authUser = payload
    },

    SET_USER_TOKEN (state, payload) {
      state.userToken = payload
    }
  },

  actions: {
    /**
     * login
     *
     * Manda los siguientes parámetros para el inicio de sesión.
     *
     * @param {Object} object.username        "master"
     * @param {Object} object.password        "master"
     */
    async login ({ commit, getters }, { username, password }) {
      if (getters.isAuthenticated) return { message: 'Sesión iniciada' }

      const { error, data, message } = await authResource.post({
        url: 'login',
        payload: { username, password }
      })

      if (error) return { error, message }

      commit('SET_USER_TOKEN', data)

      return { message }
    },

    /**
     * logout
     *
     * Manda una señal con el id del usuario actualmente autenticado para cerrar la sesión en backend.
     *
     * @returns Retorna información si ha ocurrido un error o no, y un mensaje del proceso.
     */
    async logout ({ commit }) {
      commit('SET_USER_TOKEN', null)
    }
  }
}
