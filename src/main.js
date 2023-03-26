import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";

import axios from "axios";

import "./assets/css/output.css";

const app = createApp(App);

app.config.globalProperties.$axios = axios;
app.config.globalProperties.$env = process.env;

import { i18n } from "./localization.js";

app.use(router).use(i18n).mount("#app");
