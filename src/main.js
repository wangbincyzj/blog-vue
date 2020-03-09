import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// css入口
import '@/assets/css/index.css'

// element
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)

// 伪数据
import {ajax} from "@/utils/pAjax";
Vue.prototype.$ajax = ajax;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


