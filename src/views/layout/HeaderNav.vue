<template>
    <div id="headerNav">
        <Header/>
    </div>
</template>

<script>
  import Header from "@/views/header/Header";
  export default {
    name: "HeaderNav",
    components: {Header},
    data() {
      return{
        username: "",
      }
    },
  }
</script>

<style scoped lang="scss">
    #headerNav{

    }
</style>
