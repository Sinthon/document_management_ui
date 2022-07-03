import { createApp } from 'vue'
import App from './App.vue'

// import tailwind css
import './dist/app.css';

// import primevue component
import PrimeVue from 'primevue/config';

// import primevue style 
import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

//import vue router
import router from './router'

import store from "./store/index";

//import plugin
import './plugin/axios'

const app = createApp(App)

app.use(PrimeVue);
app.use(router);
app.use(store)

app.mount('#app');
