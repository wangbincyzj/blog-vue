<template>
  <ul class="hotArticle">
    <li v-for="article in articles">

    </li>
  </ul>
</template>

<script>
  export default {
    name: "HotArticle",
    props:{
      articles:{type:Array}
    },
    created() {
      console.log(this.articles)
    }
  }
</script>

<style scoped>

</style>
