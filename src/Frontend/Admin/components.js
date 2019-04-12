import Vue from 'vue'

require('./components/Layouts/Base/_globals')
require('./components/Elements/Portlets/_portlets')
require('./components/Elements/Widgets/_widgets')
require('./components/Elements/Tabs/_tabs')
require('./components/Elements/Forms/_forms')
require('./components/Layouts/_layouts')

Vue.component('NitsTable', () => import('./components/Elements/Tables/_nits_table.js'))
Vue.component('NitsSpinners', () => import('./components/Elements/Spinners/_nits_spinner.js'))
Vue.component('NitsPagination', () => import('./components/Elements/Pagination/Pagination.vue'))
