import { createStore } from 'vuex'

export default createStore({
  state: {
    userInfo: {}, // 用户信息
  },
  mutations: {
    setUserInfo: (state, value) => {
      state.userInfo = value;
    },
  },
  actions: {
  },
  getters: {
    getUserInfo: (state) => {
      return state.userInfo;
    }
  },
})
