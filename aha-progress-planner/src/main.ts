import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import PrimeVue from "primevue/config";
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import Toast from "primevue/toast";
import ToastService from "primevue/toastservice";

import "./assets/app.css"; 
import "primevue/resources/themes/saga-blue/theme.css";  // theme
// import "primevue/resources/themes/luna-amber/theme.css";
import "primevue/resources/primevue.min.css";			// core css
import "primeicons/primeicons.css";						// icons


const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(PrimeVue);
app.use(ToastService);

app.component('InputText', InputText);
app.component('Button', Button);
app.component('Toast', Toast);

app.mount("#app");