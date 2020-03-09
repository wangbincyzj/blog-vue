<template>
  <div class="left">

    <!--slogan区域块-->
    <div class="slogan">
      <h3>{{username}}</h3>
      <p>{{slogan}}</p>
    </div>

    <!--navList区域块-->
    <div class="navList">
      <LeftNavList
        v-if="leftNav"
        v-for="item in leftNav.modules"
        :list-info="item"
      />
    </div>

  </div>
</template>

<script>
  import LeftNavList from "@/views/left/LeftNavList";
  export default {
    name: "Left",
    components: {LeftNavList},
    data() {
      return {
        username: "",
        slogan: "",
        avatar: "",
        leftNav: null
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
        this.username = this.$store.state.username;
        this.avatar = this.$store.state.avatar;
        this.slogan = this.$store.state.slogan;
        this.leftNav = this.$store.state.leftNav;
      }
    }
  }
</script>

<style scoped lang="scss">
  .left {
    background-color: var(--background-color-light);
    padding: 20px 0;
    .slogan {
      font-size: 12px;
      line-height: 1.2;
      h3 {
        text-align: center;
      }
      p {
        text-indent: 2em;
        padding: 10px;
      }
    }
    .navList {

    }
  }
</style>
