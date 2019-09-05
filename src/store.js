import Vue from 'vue'
import Vuex from 'vuex'
import { fetchMain } from './api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {},
    mylist: {
      alpha: [],
      bravo: []
    }
  },
  getters: {
    user: state => state.user,
    mylistTypes: state => Object.keys(state.mylist),
    mylist: state => type => state.mylist[type]
  },
  mutations: {
    updateMainData(state, payload) {
      state.user = payload.user
      state.mylist = payload.mylist
    }
  },
  actions: {
    async loadMain({ commit }) {
      const mainData = await fetchMain()
      commit('updateMainData', mainData)
    }
  }
})
