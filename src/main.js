import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faMoon, faSun, faEnvelope, faNewspaper ,faUser,faStar} from '@fortawesome/free-regular-svg-icons'
import { faBilibili,faQq,faSuperpowers } from '@fortawesome/free-brands-svg-icons'
import {
    faMugHot, faTrophy, faPersonWalking, faTabletScreenButton,
    faLocationDot, faHouse, faListUl, faPhone, faBars, faXmark
} from '@fortawesome/free-solid-svg-icons'
library.add(faMoon, faSun, faEnvelope, faBilibili,
    faNewspaper, faUser, faMugHot, faTrophy,
    faPersonWalking, faTabletScreenButton, faQq, faLocationDot,
    faHouse, faSuperpowers, faStar, faListUl, faPhone, faBars,faXmark)

import App from './App.vue'
// import router from './router'
const app = createApp(App)

app.component('font-awesome-icon',FontAwesomeIcon)
app.use(createPinia())
// app.use(router)

app.mount('#app')
