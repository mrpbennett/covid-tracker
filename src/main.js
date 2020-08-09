import Vue from 'vue';
import App from './App.vue';
import moment from 'moment';
import numeral from 'numeral';

import '@/assets/css/tailwind.css';

Vue.config.productionTip = false;

new Vue({
    render: (h) => h(App),
}).$mount('#app');

// Format Dates
Vue.filter('formatDate', function(value) {
    return moment(String(value)).format('MM/DD/YYYY');
});

// Format Numbers
Vue.filter('formatNumber', function(value) {
    return numeral(value).format('0,0');
});
