import Vue from 'vue'
import App from './App.vue'
import router from './routers'
Vue.config.productionTip = false
import './assets/css/normalsize.css';
import './assets/css/style.css';
import "./modules/axios";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import moment from 'moment';
Vue.use(ElementUI);

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
