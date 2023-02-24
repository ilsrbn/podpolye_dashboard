import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Api from '@/plugins/api'
import Router from '@/router'
import {createPinia} from "pinia";

createApp(App).use(Api, { tokenName: 'authBearer' }).use(createPinia()).use(Router).mount('#app')
