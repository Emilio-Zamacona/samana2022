import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faExternalLinkAlt, faChevronRight, faTimes, faBars, faEnvelope, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add([faExternalLinkAlt, faChevronRight, faTimes, faInstagram, faWhatsapp, faBars, faEnvelope, faShoppingCart])

Vue.component('FaIcon', FontAwesomeIcon)
