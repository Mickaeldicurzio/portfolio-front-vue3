import {createApp} from 'vue'
import App from './App.vue'
import {apolloProvider} from "@/services/apolloProvider";
import { getStrapiBaseUrl } from "@/services/getStrapiBaseUrl";
import router from './router'

// Create app
let app = createApp(App)


// FONT AWESOME
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import MasonryWall from '@yeger/vue-masonry-wall'
library.add(fas, far, fab)

// VUETIFY
import 'vuetify/styles'
import {createVuetify} from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
const vuetify = createVuetify({
    components,
    directives,
})

// MITT
import mitt from 'mitt';
const emitter = mitt();
app.config.globalProperties.emitter = emitter;

// VARIABLES
app.config.globalProperties.$variables = {
    getStrapiBaseUrl
}

// DIRECTIVE
import {fadeInDirective} from "@/directives/fadeIn";
app.directive("fade-in", fadeInDirective)

// app use and mount
app.use(apolloProvider)
    .use(vuetify)
    .use(MasonryWall)
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(router)
    .mount('#app')