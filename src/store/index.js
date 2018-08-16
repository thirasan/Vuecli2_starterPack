import Vuex from 'vuex'

const state = {
  list: []
}

const actions = {
  setList ({commit}, name) {
    commit('appendList', name)
  }
}

const mutations = {
  appendList (state, name) {
    state.list.push(name)
  }
}

const getters = {
  getList (state) {
    return state.list
  }
}

const store = () => {
  return new Vuex.Store({
    state,
    actions,
    mutations,
    getters
  })
}

export default store
