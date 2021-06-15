import Vue from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import router from '@/router';
import 'primeicons/primeicons.css';
import 'primevue/resources/primevue.min.css';
import 'primeflex/primeflex.css';    
import'primevue/resources/themes/bootstrap4-light-purple/theme.css';



Vue.use(PrimeVue, {ripple: true});

Vue.config.productionTip = false

new Vue({
  router,
  data:{
    loggedIn:true
  },
  render: h => h(App),
}).$mount('#app')
