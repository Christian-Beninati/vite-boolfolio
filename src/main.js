import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.vue'
import { router } from "./assets/router";

createApp(App).use(router).mount("#app");