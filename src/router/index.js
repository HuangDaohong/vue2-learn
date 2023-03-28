import Vue from "vue";
import VueRouter from "vue-router";

// 编程式导航重复点击报错解决
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err);
};

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("@/views/Home.vue"),

  },
  {
    path: "/goods",
    name: "Goods",
    component: () => import("@/views/Goods.vue"),
  },
  {
    path: "/user",
    name: "User",
    component: () => import("@/views/User.vue"),
  }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

export default router;