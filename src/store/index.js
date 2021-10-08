import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedstate from 'vuex-persistedstate'
import SecureLs from 'secure-ls'

import booksModule from '@/store/modules/booksModule'
import authModule from '@/store/modules/authModule'

const ls = new SecureLs({ isCompression: false })

Vue.use(Vuex)

const persistedstate = createPersistedstate({
  //
  // Pertiste en local storage los siguientes estados
  paths: ['authModule.userToken']
})

/**
 * El almacenamiento de información por razones de seguridad
 * es encriptado, esto se hace automáticamente para los estados
 * que se ha establecido en el path "perseverar".
 */
if (process.env.NODE_ENV === 'production') {
  persistedstate.storage = {
    getItem: key => ls.get(key),
    setItem: (key, value) => ls.set(key, value),
    removeItem: key => ls.remove(key)
  }
}

export default new Vuex.Store({
  state: {
    ui: {
      show: false,
      hideOnTimeOut: true,
      title: '',
      message: '',
      error: false
    }
  },
  mutations: {
    SET_MESSAGE (state, payload) {
      state.ui = payload
    }
  },
  actions: {
    showNotificationAction ({ commit }, { error, title, message, hideOnTimeOut = true }) {
      commit('SET_MESSAGE', { show: true, error, title, message, hideOnTimeOut })
    },
    hideNotificationAction ({ commit }) {
      commit('SET_MESSAGE', {
        show: false,
        hideOnTimeOut: true,
        error: false,
        title: '',
        message: ''
      })
    }
  },
  modules: {
    booksModule,
    authModule
  },
  plugins: [persistedstate]
})
