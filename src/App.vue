<template>
  <div>
    <TopBar />
    <Header :searchMsg="msg" @sendClickEvent="getDataHandler" :fatherMethod2="fatherMethod2" ref="headerRef" />
    <router-view />
    <Footer />

    <Login v-show="isShowLoginModal" />
  </div>
</template>

<script>
import TopBar from '@/components/TopBar.vue';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import Login from '@/components/Login.vue';

import { mapState } from 'vuex';

export default {
  name: 'App',
  components: {
    TopBar,
    Header,
    Footer,
    Login,
  },
  data() {
    return {
      msg: '搜索你想要的', // 用于传递给Header组件
    };
  },
  // computed 里面的数据是响应式的，当数据发生变化时，会自动更新视图
  computed: {
    // mapState里用的是对象，而不是数组，因为做了模块
    ...mapState({
      isShowLoginModal: (state) => state.showLoginModal.isShowLoginModal,
    }),
  },
  methods: {
    getDataHandler(data) {
      console.log(data);
      this.msg = data;
    },
    fatherMethod() {
      console.log('子组件调用父组件方法2');
    },
    fatherMethod2() {
      console.log('子组件调用父组件方法3');
    },
  },
  mounted() {
    this.$refs.headerRef.parentClickHandler('父组件调用子组件的方法');
    console.log('mounted');
  },
};
</script>

<style></style>
