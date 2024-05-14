import { createApp } from "vue";
import PrimeVue from "primevue/config";
import "primevue/resources/themes/aura-light-blue/theme.css";
import App from "./App.vue";
import Button from "primevue/button";
import OverlayPanel from "primevue/overlaypanel";

let app = createApp(App);

app.use(PrimeVue);
app.component("Button", Button);
app.component("OverlayPanel", OverlayPanel);
app.mount("#app");