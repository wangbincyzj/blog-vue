<template>
    <div class="layout">
        <el-row>
            <el-col :span="24">
                <HeaderNav/>
            </el-col>
        </el-row>
        <el-row>
            <el-col  :xs="1" :sm="12" >
                <LeftNav/>
            </el-col>
            <el-col   :xs="23" :sm="12">
                <Main/>
            </el-col>
            <el-col :span="4" :sm="0">
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
    div.layout{
        height: 300px;
        background-color: #42b983;
    }
</style>
