import Vue from 'vue';

//Forms

Vue.component('amchart-xy-chart', () => import('./Amcharts/_amchart_xy_chart.vue'))
Vue.component('amchart-pie-chart', () => import('./Amcharts/_amchart_pie_chart.vue'))
Vue.component('amchart-radius-pie-chart', () => import('./Amcharts/_amchart_radius_pie_chart.vue'))
Vue.component('amchart-semi-pie-chart', () => import('./Amcharts/_amchart_semi_pie_chart.vue'))
Vue.component('amchart-donut-chart', () => import('./Amcharts/_amchart_donut_chart.vue'))
Vue.component('amchart-bar-chart', () => import('./Amcharts/_amchart_bar_chart.vue'))
Vue.component('amchart-treemap-chart', () => import('./Amcharts/_amchart_treemap_chart.vue'))
Vue.component('amchart-rotated-series-chart', () => import('./Amcharts/_amchart_rotated_series_chart.vue'))
