import { createApp } from 'vue'
import './index.css'
import './style.css'
import App from './App.vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import { createPinia } from 'pinia'

const app = createApp(App)

app.use(createPinia())

app.mount('#app')
app.use(Antd)
