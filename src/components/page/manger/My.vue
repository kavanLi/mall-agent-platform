<template>
  <div>
    <h1>my.data</h1>
    <h5>my name is: {{ username }}</h5>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: ""
    }
  },
  mounted () {
    // 从内存读取数据
    let user = sessionStorage.getItem("user")
    // 判断数据是否存在
    if (user) {
      user = JSON.parse(user)
      this.username = user.name
    }
  }
}
</script>

<style>

</style>
