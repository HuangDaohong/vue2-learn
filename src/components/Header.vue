<template>
  <div class="header11 wrap">
    <img src="@/assets/avatar.gif" alt="" />
    <ul class="nav">
      <li
        :class="$route.path == '/home' ? 'active' : ''"
        @click="$router.push('/')"
      >
        首页
      </li>
      <!-- 动态class绑定 https://blog.csdn.net/u012320487/article/details/121806858 -->
      <li
        :class="{ active: $route.path == '/goods' }"
        @click="$router.push('/goods')"
      >
        全部商品
      </li>
      <!-- <li><router-link to="/goods">全部商品</router-link></li> -->
      <li
        :class="$route.path == '/user' ? 'active' : ''"
        @click="$router.push('/user')"
      >
        个人中心
      </li>
    </ul>
    <div class="search">
      <input type="text" :placeholder="searchMsg" />
      <span @click="searchClickHandler">搜索</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderCom',
  props: {
    searchMsg: {
      type: String,
      default: '搜索...',
    },
    fatherMethod2: {
      type: Function,
      default: () => {},
    },
  },
  data() {
    return {
      newMsg: '子组件调用父组件方法1',
    }
  },
  methods: {
    searchClickHandler() {
      // 子调父的方法1：通过$emit触发父组件函数,并传递数据,参数1是事件名称,参数2是传递的数据
      this.$emit('sendClickEvent', this.newMsg)
      // 子调父的方法2：通过$parent调用父组件函数
      this.$parent.fatherMethod()
      console.log(this.$parent, 'aaa')
      // 子调父的方法3
      this.childMethod()
    },
    parentClickHandler(e) {
      console.log(e)
    },
    childMethod() {
      if (this.fatherMethod2) {
        this.fatherMethod2()
      }
    },
  },
}
</script>

<style lang="less" scoped>
@import '@/assets/styles/global.less';

// .header等价于.header[class^='header'] ，后者会匹配到所有的 .header 开头的 class，而 .header 只会匹配到 .header
[class^='header'] {
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    width: 60px;
    height: 60px;
  }
  .nav {
    display: flex;
    li {
      margin: 0 10px;
      cursor: pointer;
      &.active {
        color: @base-color;
      }
      &:hover {
        color: @base-color;
      }
    }
  }

  .search {
    display: flex;
    span {
      background-color: @base-color;
      color: #fff;
      border-radius: 0 15px 15px 0;
      cursor: pointer;
      // display: inline-block;
      // height: 30px;
      // line-height: 30px;
      width: 40px;
      // 利用两个flex实现按钮居中也行
      display: flex;
      justify-content: center;
      align-items: center;
    }
    input {
      border: 1px solid #ccc;
      border-radius: 15px 0 0 15px;
      width: 200px;
      height: 30px;
      // 文字缩进
      // text-indent: 10px;
    }
  }
}
</style>
