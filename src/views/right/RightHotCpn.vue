<template>
  <div class="hot">
    <TabPanel :title-ul="['测试1', '测试2']">
      <template #default="{activeIndex}">
        <li><i class="el-icon-notebook-1"/>热门文章</li>
        <li><i class="el-icon-s-comment"/>最新评论</li>
      </template>
      <template #content>
        <li>
          <HotArticle :articles="hotArticles"  v-if="hotArticles"/>
        </li>
        <li>内容2</li>
      </template>
    </TabPanel>
  </div>
</template>

<script>
  import TabPanel from "@/components/common/tabs/TabPanel";
  import HotArticle from "@/components/project/rightNavHotContent/HotArticle";
  export default {
    name: "RightHotCpn",
    components: {HotArticle, TabPanel},
    data() {
      return {
        hotArticles: null
      }
    },
    created() {
      this.init()
    },
    methods:{
      init() {
        this.dataInject()
      },
      dataInject() {
        this.$ajax("/hotInfo").then(ret=>{
          this.hotArticles = ret.data.hotArticles;
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  .hot{

  }
</style>
