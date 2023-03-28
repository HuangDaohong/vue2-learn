import Vue from 'vue';
import App from './App.vue';
import 'reset-css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import '@/assets/styles/global.less';
import router from './router';
import store from './store';
import SlideVerify from 'vue-monoplasty-slide-verify';

Vue.use(ElementUI).use(Antd).use(SlideVerify);

Vue.config.productionTip = false;// 阻止启动生产消息

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
