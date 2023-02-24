import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Api from '@/plugins/api'
import Router from '@/router'
import {createPinia} from "pinia";
const apiUrl = import.meta.env.VITE_API_URL

createApp(App).use(Api, { tokenName: 'authBearer', basePath: apiUrl }).use(createPinia()).use(Router).mount('#app')
