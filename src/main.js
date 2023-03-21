import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";

import axios from "axios";

import "../dist/assets/css/output.css";

const app = createApp(App)

app.config.globalProperties.$axios = axios;
app.config.globalProperties.$env = process.env;

app.use(router).mount("#app");