<template>
  <div class="section">
    <h3>{{listInfo.navName}}</h3>
    <ul class="outerUl">
      <li :class="{active: item.flag}" v-for="item in listInfo.data">
        <div class="title" @click="outerLiClick(item)">
          <span><i :class="item.icon"></i>{{item.title}}</span>
          <i v-if="item.children" class="el-icon-arrow-right"/>
        </div>
        <transition name="t1">
          <ul class="innerUl" v-if="item.children" v-show="item.flag">
            <li v-for="item2 in item.children">
              <transition name="fade">
                <div v-show="item.flag">{{item2.title}}</div>
              </transition>
            </li>
          </ul>
        </transition>


      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "LeftNavList",
    props: {
      listInfo: {
        type: Object
      }
    },
    mounted() {
      this.init()
    },
    methods: {
      init() {
        this.transitionInit()
      },
      outerLiClick(item) {
        if (item.path) {
          this.$router.push(item.path)
        }else{
          item.flag = !item.flag
        }
      },
      transitionInit() {
        let ul = document.querySelectorAll("ul.innerUl");
        ul.forEach(item=>{
          let start = 0;
          let step = 0.05;
          let divList = item.querySelectorAll("div");
          divList.forEach(div=>{
            start += step;
            div.style.transitionDelay = start + "s";
          })
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  .section {
    border-top: 1px solid white;
    border-bottom: 1px solid white;

    h3 {
      font-weight: 200;
      font-size: 15px;
      line-height: 3;
      text-indent: 1em;
    }

    ul.outerUl {
      & > li {
        cursor: pointer;

        .fade {
          transform: translateX(-100px);
          transition: all 3s;
        }

        i {
          transition: all 0.2s;
        }

        .title {
          padding: 5px 20px;
          display: flex;
          justify-content: space-between;
          i{
            margin-right: 10px;
          }
        }

        .title:hover {
          background-color: var(--border-color);
        }
      }

      & > li.active {
        i {
          transform: rotate(90deg);
        }

        .fade {
          transform: translateX(0);
        }
      }

      ul.innerUl {

        li {
          padding: 8px 25px;
          font-size: 15px;
          background-color: var(--background-color);

          &:hover {
            background-color: #ccced2
          }
        }
      }
    }
  }

  .fade-enter-active, .fade-leave-active {
    transition: all 0.5s;
    transform: translateX(0);
    opacity: 1;
  }

  .fade-enter, .fade-leave-to {
    transform: translateX(100px);
    opacity: 0;
  }
</style>
