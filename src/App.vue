<template>
  <div id="app">
      <el-row>
          <el-col :span="18" :offset="3">
              <Layout/>
          </el-col>
      </el-row>
  </div>
</template>

<style lang="scss">

</style>
<script>
  import Layout from "@/views/layout/Layout";
  export default {
    components: {Layout}
  }
</script>
