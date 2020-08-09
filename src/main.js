import Vue from 'vue';
import App from './App.vue';
import moment from 'moment';

import '@/assets/css/tailwind.css';

Vue.config.productionTip = false;

new Vue({
    render: (h) => h(App),
}).$mount('#app');

Vue.filter('formatDate', function(value) {
    if (value) {
        return moment(String(value)).format('MM/DD/YYYY');
    }
});
