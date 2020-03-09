<template>
  <div class="bar">
    <el-autocomplete
      v-model="state"
      :fetch-suggestions="querySearchAsync"
      placeholder="请输入关键词"
      size="mini"
      suffix-icon="el-icon-search"
      @select="handleSelect"
    ></el-autocomplete>
  </div>
</template>

<script>
  import {getSearchInfoAPI} from "@/apis";

  export default {
    name: "HeaderSearchBar",
    data() {
      return {
        state: "",
        restaurants: [],
      }
    },
    created() {
      this.init()
    },
    methods: {
      init() {
        this.dataInject()
      },
      dataInject() {
        getSearchInfoAPI.then(ret=>{
          this.restaurants = ret.data;
        })
      },
      querySearchAsync(queryString, cb) {
        var restaurants = this.restaurants;
        var results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants;

        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          cb(results);
        }, 3000 * Math.random());
      },
      createStateFilter(queryString) {
        return (state) => {
          return (state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      handleSelect(item) {
        console.log(item);
      }
    }
  }
</script>

<style scoped>

</style>
