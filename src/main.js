import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { useProductStore } from "./stores/counter.js";

//Aqui importo los links de menu del navegador ej: home, perfil, etc..
import App from './App.vue'
import router from './router'
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './assets/main.scss'

const app = createApp(App)

app.use(createPinia())
app.use(router)

const store = useProductStore()

app.mount('#app')
