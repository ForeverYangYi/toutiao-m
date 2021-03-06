import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//加载Vant核心组件库
import Vant from 'vant'
import 'vant/lib/index.css'
//加载全局样式
import './styles/index.less'
import './styles/icon.less'
//注册使用Vant使用库
Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')