<template>
  <div class="right">

    <!--热门文章和评论-->
    <RightHotCpn/>

  </div>
</template>

<script>
  import RightHotCpn from "@/views/right/RightHotCpn";
  export default {
    name: "Right",
    components: {RightHotCpn}
  }
</script>

<style scoped lang="scss">
  .right{
    padding: var(--custome-padding) 0;
    background-color: var(--background-color-light);
  }
</style>
