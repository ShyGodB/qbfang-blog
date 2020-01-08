import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/'
import api from '../util/api'
import echarts from 'echarts'
import './registerServiceWorker'
import Element from 'element-ui'
import VueSession from 'vue-session'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css';
import VuePhotoZoomPro from 'vue-photo-zoom-pro'
import VueCropper from 'vue-cropper'
import '../public/css/bootstrap-grid.css'
import '../public/css/bootstrap.css'
import '../public/css/bootstrap-reboot.css'
import '../public/css/main.css'
import '../public/css/mg.css'
import '../public/css/pd.css'
import '../public/css/text.css'

var options = {
    persist: true
}

Vue.use(Element)
Vue.use(VueCropper)
Vue.prototype.$echarts = echarts;
Vue.prototype.$api = api
Vue.use(VuePhotoZoomPro)
Vue.config.productionTip = false
Vue.use(VueSession, options)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
