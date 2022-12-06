import { createApp } from 'vue';
import '../css/style.scss';
import App from '../App.vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

library.add(faPlay, faInstagram, faLinkedinIn, faFacebookF, faTwitter)
{/* <font-awesome-icon icon="fa-brands fa-instagram" /> */}
createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
