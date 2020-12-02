import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    metadatas: {
      common: {
        title: 'MySite',
        fd_appid: ''
      },
      top: {
        title: 'TopPage',
        description: 'This is toppage.',
        keywords: 'top,mysite',
        next: '',
        prev: ''
      },
      about: {
        title: 'AboutPage',
        description: 'This is aboutpage.',
        keywords: 'about,mysite',
        next: '',
        prev: ''
      }
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  getters: {
    meta (state) {
      return state.metadatas
    }
  }
})
