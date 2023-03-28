<template>
  <div>这是Home</div>
</template>
<script>
import { getJinpingApi } from '@/request/api'
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
  async created() {
    const res = await getJinpingApi()
    console.log(res)
  },
}
</script>
