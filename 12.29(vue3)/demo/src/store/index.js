import { createStore } from 'vuex'

export default createStore({
  state: {
    lists: [],
  },
  getters: {
  },
  mutations: {
    person(state, name) {
      state.lists = [];
      state.lists.push(name);
      console.log(state.lists);
    },
  },
  actions: {
  },
  modules: {
  }
})

