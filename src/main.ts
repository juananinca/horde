import { createApp } from "vue";
import { createPinia } from "pinia";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import BootstrapVue3 from 'bootstrap-vue-3'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import App from "./App.vue";
import "./assets/main.css";

const app = createApp(App);

app.use(BootstrapVue3)

app.use(createPinia());

app.mount("#app");
