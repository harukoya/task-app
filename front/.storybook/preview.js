import '../src/index.css';
import Vue from 'vue';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faPlus, faCirclePlus, faXmark, faXmarkCircle} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';

// for FontAwesome
library.add(faPlus, faCirclePlus, faXmark, faXmarkCircle)
Vue.component('v-fa', FontAwesomeIcon)

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
