import {createApp} from 'vue'
import App from './App.vue'
import {apolloProvider} from "@/services/apolloProvider";
import router from './router'

// Create app
let app = createApp(App)


// FONT AWESOME
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
library.add(fas, far, fab)

// Vuetify
import 'vuetify/styles'
import {createVuetify} from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
const vuetify = createVuetify({
    components,
    directives,
})

// mitt
import mitt from 'mitt';
const emitter = mitt();

// app use and mount
app.config.globalProperties.emitter = emitter;
app.use(apolloProvider)
    .use(vuetify)
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(router)
    .mount('#app')