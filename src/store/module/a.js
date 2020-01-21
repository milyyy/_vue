const moduleA = {

  state: {
    number: 0 
  },

  mutations: {
    add: state => {
      state.number += 50;
    }
  },
  
  actions :{
    asynAdd: ({commit}) => {
      setTimeout(() => {
        commit('add')
      }, 1000);
    }
  },

  getters: {}
}

export default moduleA
