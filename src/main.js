import { createApp } from 'vue'
import App from './App.vue'
import { apolloProvider } from "@/services/apolloProvider";
import router from './router'

 createApp(App)
     .use(apolloProvider)
     .use(router)
     .mount('#app')