<template>
  <div class="layout" v-if="$store.state.username">
    <!--头部-->
    <HeaderNav/>
    <el-row>

      <!--左边nav-->
      <el-col :span="4">
        <LeftNav/>
      </el-col>

      <!--中间主体内容-->
      <el-col :span="16">
        <Main/>
      </el-col>

      <!--右边nav-->
      <el-col :span="4">
        <RightNav/>
      </el-col>

    </el-row>
  </div>
</template>

<script>
  import HeaderNav from "@/views/layout/HeaderNav";
  import LeftNav from "@/views/layout/LeftNav";
  import Main from "@/views/layout/Main";
  import RightNav from "@/views/layout/RightNav";

  export default {
    name: "Layout",
    components: {RightNav, Main, LeftNav, HeaderNav}
  }
</script>

<style scoped lang="scss">
  div.layout {
    color: var(--text-color);
  }
</style>
