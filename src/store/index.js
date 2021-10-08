import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ui: {
      show: false,
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

  actions: {}
})
