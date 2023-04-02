<template>
  <div>这是Home</div>
</template>
<script>
// import { getJinpingApi } from '@/request/api';
console.log('import');

export default {
  name: 'HomePage',
  // created() {
  //   // getJinpingApi().then((res) => {
  //   //   console.log(res)
  //   // })
  //   const getDate = async () => {
  //     const res = await getJinpingApi()
  //     console.log(res)
  //   }
  //   getDate()
  // },
  // async created() {
  //   const res = await getJinpingApi();
  //   console.log(res);
  //   console.log('created');
  // },
  created() {
    console.log('created');
  },
  mounted() {
    console.log('mounted');
  },

  //  生命周期钩子函数
  beforeCreate() {
    console.log('beforeCreate');
  },
  beforeMount() {
    console.log('beforeMount');
  },
  beforeUpdate() {
    console.log('beforeUpdate');
  },
  updated() {
    console.log('updated');
  },
  beforeDestroy() {
    console.log('beforeDestroy');
  },
  destroyed() {
    console.log('destroyed');
  },
};
</script>
