import Vue from 'vue';
import Vuex from 'vuex';
import us from '../service/user'
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // 根据token状态判断是否登陆
    isLogin: localStorage.getItem('token') ? true : false
  },
  mutations: {
    changeStatus: (state, x) => {
      state.isLogin = x;
    }
  },
  actions: {
    login({commit}, user) {
      return us.login(user).then(res => {
        // 请求成功返回token和code码
        let {code, token} = res.data;
        console.log('data', res.data);
        if (code) {
          commit('changeStatus', true);
          localStorage.setItem('token', token);
        }
        return code;
      })
    },
    logout({commit}) {
      localStorage.removeItem('token');
      commit('changeStatus', false);
    }
  }
})