<template>
  <div class="container">
    <div class="wrap">
      <div class="l">欢迎你</div>
      <div class="r">
        <ul>
          <li>
            <img :src="AvatarImg" alt="" />
            用户名：游客
          </li>
          <li>我的积分:1001</li>
          <li>获取积分</li>
          <li>讯飞官网</li>
          <li @click="changeShowLoginModal(true)" class="login-button">登录</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

// import Avatar from '@/assets/logo.png'
export default {
  name: 'TopBarCom',
  data() {
    return {
      // AvatarImg: Avatar,
      AvatarImg: require('@/assets/logo.png'),
    }
  },

  methods: {
    ...mapMutations({
      changeShowLoginModal: 'showLoginModal/changeShowLoginModal',
    }),
  },
}
</script>

<style lang="less" scoped>
@import '@/assets/styles/global.less';
.container {
  width: 100%;
  height: 40px;
  background-color: #d0edda;
}
.wrap {
  line-height: 40px;
  display: flex;
  justify-content: space-between;
  .r ul {
    display: flex;
    li {
      display: flex;
      align-items: center;
      margin-left: 20px;
      cursor: pointer;

      img {
        width: 20px;
        height: 20px;
        border-radius: 20px;
        margin-right: 10px;
      }
    }
    & .login-button {
      background-color: @base-color;
      color: #fff;
      padding: 0 10px;
      width: 80px;
      justify-content: center;
    }
  }
}
</style>
