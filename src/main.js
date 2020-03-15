import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import Button from "primevue/button";
import Editor from 'primevue/editor';
import FullCalendar from 'primevue/fullcalendar';
import Dialog from 'primevue/dialog';

import 'primevue/resources/themes/nova-light/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import Menu from 'primevue/menu';

Vue.component('Button', Button);
Vue.component('Editor', Editor);
Vue.component('FullCalendar', FullCalendar);
Vue.component('Dialog', Dialog);
Vue.component('Menu', Menu);




Vue.config.productionTip = false


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')