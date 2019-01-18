import Vue from "vue";
import App from "./App";
import router from "./router/index";
import store from './store'
import 'element-ui/lib/theme-chalk/index.css'

import PaperDashboard from "./plugins/paperDashboard";
import "vue-notifyjs/themes/default.css";

Vue.use(PaperDashboard);

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  if (requiresAuth) {
    if (!localStorage.getItem('Authenticated')) {
      next('/login');
    } else {
      next();
    }
  } else {
    next();
  }
})
/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
