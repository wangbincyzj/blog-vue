<template>
  <el-row class="header">
    <el-col :span="4">
      <div class="logo">
        <i class="iconfont icon-home"/>{{username}}
      </div>
    </el-col>
    <el-col :span="16">
      <HeaderSearchBar/>
    </el-col>
    <el-col :span="4">

    </el-col>
  </el-row>
</template>

<script>
  import HeaderSearchBar from "@/views/header/HeaderSearchBar";
  export default {
    name: "Header",
    components: {HeaderSearchBar},
    data() {
      return{
        username: ""
      }
    },
    created() {
      this.init()
    },
    methods:{
      init() {
        this.dataInject();
      },
      dataInject() {
        this.username = this.$store.state.username || "defaultName";
      }
    }
  }
</script>

<style scoped lang="scss">
  div.header{
    height: 50px;
    line-height: 50px;
    overflow: hidden;
    background-color: var(--background-color);
    .logo{
      i{
        font-size: 22px;
      }
      font-size: 22px;
      text-align: center;
    }
  }
</style>
