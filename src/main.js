import { createApp } from 'vue'

// 引入element
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import './styles/index.scss'
import './iconfont/iconfont.css'
import installIcons from './icons/index'

import App from './App.vue'
import router from './router'
import store from './store'
const app = createApp(App)
installIcons(app)

app.use(ElementPlus).use(store).use(router).mount('#app')
