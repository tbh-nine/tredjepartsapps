import 'dkfds/dist/css/dkfds.min.css';
import Vue from 'vue';
// INFO: Changes to this file will not be included in final build
const App = () => import(/* webpackPreload: true */ './App.vue');

Vue.config.productionTip = false;

const vue = new Vue({
  render: (h: any) => h(App)
});

vue.$mount('#app');
