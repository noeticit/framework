import Vue from 'vue';

Vue.component('nits-input', () => import('./_nits_input.js'))
Vue.component('nits-select', () => import('./_nits_select.js'))
Vue.component('nits-textarea', () => import('./_nits_textarea.js'))
Vue.component('nits-file-input', () => import('./_nits_file_input.js'))
Vue.component('nits-checkbox', () => import('./_nits_checkbox.js'))
Vue.component('static-type-1', () => import('./_static-type-1.vue'))