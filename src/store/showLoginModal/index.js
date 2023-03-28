export default {
  namespaced: true,//开启命名空间,在组件中使用时需要加上模块名,如: this.$store.state.showLoginModal.isShowLoginModal
  state: {
    // 是否显示登录弹窗
    isShowLoginModal: false
  },
  getters: {
    isShowLoginModal: state => state.isShowLoginModal
  },
  mutations: {
    changeShowLoginModal (state, payload) {
      state.isShowLoginModal = payload;
    }

  },
  actions: {
  }
};