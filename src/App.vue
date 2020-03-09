<template>
  <div id="app">
      <div class="container">
        <Layout/>
      </div>
  </div>
</template>

<style lang="scss">

</style>
<script>
  import Layout from "@/views/layout/Layout";
  import {getUserInfoAPI} from "@/apis";
  export default {
    components: {Layout},
    data() {
      return {
        appStyle: {}
      }
    },
    created() {
      this.init()
    },
    updated() {

    },
    methods:{
      init() {
        this.getUserInfo();
      },
      getUserInfo() {
        getUserInfoAPI.then(ret=>{
          this.$store.state.username = ret.data.username;
          this.$store.state.avatar = ret.data.avatar;
          this.$store.state.slogan = ret.data.slogan;
          this.$store.state.leftNav = ret.data.leftNav;
          console.log(this.$store.state)
        })
      }
    }
  }
</script>
