import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import "primevue/resources/themes/aura-light-green/theme.css";
import "primevue/resources/primevue.min.css"; /* Deprecated */


import App from './App.vue'
import PrimeVue from 'primevue/config';


// Импорт компонентов
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Button from 'primevue/button';

const app = createApp(App)

// Декларирование компонентов
app.component('DataTable', DataTable);
app.component('Column', Column);
app.component('Button', Button);

app.use(createPinia())
app.use(PrimeVue)   

app.mount('#app')
