import Vue from 'vue';
import App from './App.vue';
import './index.css';
import router from './router';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faPlus, faCirclePlus, faXmark, faXmarkCircle} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';

// for FontAwesome
library.add(faPlus, faCirclePlus, faXmark, faXmarkCircle)
Vue.component('v-fa', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
