import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbvue/lib/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Vuelidate from "vuelidate";
Vue.use(Vuelidate);

import * as mdbvue from "mdbvue";
for (const component in mdbvue) {
	Vue.component(component, mdbvue[component]);
}
Vue.use(BootstrapVue);

Vue.use(IconsPlugin);

Vue.config.productionTip = false;

new Vue({
	router,
	render: (h) => h(App),
}).$mount("#app");
