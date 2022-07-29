import { createApp } from 'vue'
import './style.css'
import './index.css'
import App from './App.vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

import { Button } from 'ant-design-vue';

const app = createApp(App)

app.mount('#app')

app.use(Button)

app.config.productionTip = false;
app.use(Antd);
