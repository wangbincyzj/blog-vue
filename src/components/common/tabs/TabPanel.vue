<template>
  <div class="tabPanel">
    <ul class="title" ref="titleUl">
      <slot :activeIndex="activeIndex">
        <li
          :class="{active: index===activeIndex}"
          v-for="(li,index) in titleUl"
          @click="activeIndex=index">
          {{li}}
        </li>
      </slot>
    </ul>
    <ul class="content" ref="contentUl">
      <slot name="content"/>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "TabPanel",
    props: {
      titleUl: {type: Array},
      defaultIndex: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {
        activeIndex: 0,
      }
    },
    watch:{
      activeIndex(newVal, oldVal){
        this.navChange()
      }
    },
    created() {
      this.init()
    },
    mounted() {
      this.navChange()
    },
    methods: {
      init() {
        this.activeIndex = this.defaultIndex || 0;
        this.titleSlotEventInit();
        this.titleSlotStyleInit();
      },

      /*给外部slot的li标签注入一个click方法*/
      titleSlotEventInit() {
        this.$nextTick().then(ret => {
          let that = this;
          let liList = Array.from(this.$refs.titleUl.children);
          liList.forEach((li, index) => {
            li.addEventListener("click", function () {
              that.activeIndex = liList.indexOf(this);
              that.titleSlotStyleInit()
            });
          })
        })
      },

      /*给外部slot的li标签增加active样式检测*/
      titleSlotStyleInit() {
        this.$nextTick().then(ret => {
          let that = this;
          let liList = Array.from(this.$refs.titleUl.children);
          liList.forEach((li, index) => {
            if (index === that.activeIndex) {
              liList.forEach(item => item.classList.remove("active"));
              li.classList.add("active")
            }
          })
        })

      },

      /*index的改变促使主体内容改变*/
      navChange() {
        let contentUl = Array.from(this.$refs.contentUl.children/*children必须是li*/);
        contentUl.forEach((li, index) => {
          li.style.display = "none";
        });
        contentUl[this.activeIndex].style.display = "block";
      }
    }
  }
</script>

<style scoped lang="scss">
  .tabPanel {
    ul.title {
      display: flex;
      justify-content: space-evenly;

      li {
        /*flex: 1;*/
        font-size: 15px;
        border-bottom: 2px solid transparent;
        transition: all 0.5s;

        &:hover {
          color: var(--el-brand);
        }

        &.active {
          border-bottom: 2px solid var(--el-brand);
          color: var(--el-brand);
        }

        cursor: pointer;
        text-align: center;
        padding: var(--custome-padding);
      }
    }
  }
</style>
