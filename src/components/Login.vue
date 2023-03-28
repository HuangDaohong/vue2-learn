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
            <input type="text" placeholder="请输入手机号" v-model="phone" />
          </div>

          <slide-verify
            class="slide-verify"
            :l="42"
            :r="10"
            :w="310"
            :h="120"
            :slider-text="msg"
            @success="onSuccess"
            @fail="onFail"
            @refresh="onRefresh"
          ></slide-verify>
          <!-- <div>{{ msg }}</div> -->

          <div class="input-group">
            <input
              type="text"
              placeholder="请输入验证码"
              v-model="verifycode"
            />
            <div class="btn getcode">
              <span v-show="!isShowCount" @click="getVerifyCode"
                >获取验证码</span
              >
              <span v-show="isShowCount">{{ count }}s</span>
            </div>
          </div>
          <div class="btn" @click="submitLogin">登录</div>
        </div>
        <div v-else class="qrcode">22</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import { sendCodeApi } from '@/request/api'
// 封装节流函数
function throttle(fn, delay = 1000) {
  let timer = null
  return function (...args) {
    if (timer) {
      return
    }
    timer = setTimeout(() => {
      fn.apply(this, args)
      timer = null
    }, delay)
  }
}
export default {
  name: 'LoginCom',
  data() {
    return {
      isShowForm: true, // 是否显示表单
      msg: '向右滑动', // 验证码提示信息
      phone: '', // 用户输入手机号
      verifycode: '', // 用户输入验证码
      trueCode: '', // 真实验证码
      count: 60, // 倒计时
      isShowCount: false, // 是否显示倒计时
    }
  },

  methods: {
    ...mapMutations({
      changeShowLoginModal: 'showLoginModal/changeShowLoginModal',
    }),
    onSuccess() {
      this.msg = '成功'
    },
    onFail() {
      // this.msg = '失败了'
      this.onRefresh()
    },
    onRefresh() {
      this.msg = '再试一次'
    },

    messageError: throttle(function (errorinfo) {
      this.$message.error(errorinfo)
    }, 500),

    countDown() {
      // 定时器叠加问题
      // let timer = setInterval(() => {
      //   this.count--
      //   if (this.count === 0) {
      //     clearInterval(timer)
      //     this.isShowCount = false
      //     this.count = 60
      //   }
      // }, 1000)

      this.count--
      if (this.count <= 0) {
        this.isShowCount = false
        this.count = 60
        return
      }
      setTimeout(() => {
        this.countDown()
      }, 1000)
    },

    async getVerifyCode() {
      // 1. 验证
      const reg = /^1[3456789]\d{9}$/
      if (!reg.test(this.phone)) {
        this.messageError('手机号格式不正确')
        return
      }
      if (this.msg !== '成功') {
        return this.messageError('请完成滑块验证')
      }

      let res = await sendCodeApi({ phone: this.phone })
      if (!res) return
      this.isShowCount = true
      this.countDown()
    },

    submitLogin() {
      if (this.msg !== '成功') {
        return this.messageError('请完成滑块验证')
      }
      const reg = /^1[3456789]\d{9}$/
      if (!reg.test(this.phone)) {
        this.messageError('手机号格式不正确')
        return
      }

      // 验证验证码
      if (this.verifycode !== this.trueCode) {
        return this.messageError('验证码不正确')
      }

      // 4. 跳转到首页
      this.$router.push('/home')
      // 5、隐藏登录窗口
      this.changeShowLoginModal(false)
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
          width: 95px;
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
