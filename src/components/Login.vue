<template>
  <div class="login-model">
    <div class="mask" @click="changeShowLoginModal(false)"></div>
    <div class="login-box">
      <i class="el-icon-close" @click="changeShowLoginModal(false)"></i>
      <ul class="title">
        <li :class="isShowForm ? 'active' : ''" @click="isShowForm = true">
          <i class="el-icon-mobile-phone"></i>
          手机号登录
        </li>
        <li style="cursor: auto">|</li>
        <li :class="{ active: !isShowForm }" @click="isShowForm = false">
          <i class="el-icon-chat-dot-round"> </i>
          微信扫码登录
        </li>
      </ul>
      <div class="body">
        <div class="form" v-if="isShowForm">
          <div class="input-group">
            <input type="text" placeholder="请输入手机号" />
          </div>

          <slide-verify
            class="slide-verify"
            :l="42"
            :r="10"
            :w="310"
            :h="120"
            slider-text="向右滑动"
            @success="onSuccess"
            @fail="onFail"
            @refresh="onRefresh"
          ></slide-verify>
          <!-- <div>{{ msg }}</div> -->

          <div class="input-group">
            <input type="text" placeholder="请输入验证码" />
            <div class="btn getcode">获取验证码</div>
          </div>
          <div class="btn">登录</div>
        </div>
        <div v-else class="qrcode">22</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'LoginCom',
  data() {
    return {
      isShowForm: true,
      // 验证码提示信息
      msg: '',
    }
  },

  methods: {
    ...mapMutations({
      changeShowLoginModal: 'showLoginModal/changeShowLoginModal',
    }),
    onSuccess() {
      this.msg = 'login success'
    },
    onFail() {
      this.msg = ''
    },
    onRefresh() {
      this.msg = ''
    },
  },
}
</script>

<style lang="less" scoped>
@import '@/assets/styles/global.less';
.login-model {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  .mask {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .login-box {
    width: 400px;
    height: 450px;
    background: url('@/assets/loginbg.png') no-repeat center center / cover;
    // filter: blur(1px); // 模糊度

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    .el-icon-close {
      position: absolute;
      top: 20px;
      right: 20px;
      font-size: 25px;
      cursor: pointer;
    }
    .title {
      display: flex;
      justify-content: center;
      padding-top: 20px;
      li {
        color: #ccc;
        padding: 10px 10px;
        cursor: pointer;
      }
      .active {
        color: @base-color;
      }
    }
    .body {
      width: 310px;
      margin: 0 auto;
      .form {
        .btn {
          background-color: @base-color;
          height: 40px;
          color: #fff;
          text-align: center;
          line-height: 40px;
          cursor: pointer;
        }
        .getcode {
          padding: 0 7px;
          font-size: 16px;
          margin-left: 10px;
        }
        .input-group {
          display: flex;
          justify-content: space-between;
          margin: 10px 0;
          input {
            flex-grow: 1;
            font-size: 16px;
            height: 40px;
          }
        }
      }
    }
  }
}
</style>
