import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/views/index.vue';
import TokenView from '@/views/tokensPage.vue';
import SettingView from '@/views/accountSetting.vue';
import ClassView from '@/views/classPage.vue';
import OrderInfoView from '@/views/OrderInfo.vue';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
      redirect: '/home/tokensPage',
      children: [
        {   
          path: 'tokensPage',
          name: 'TokenView',
          component: TokenView,
        },
        {   
          path: 'accountSetting',
          name: 'SettingView',
          component: SettingView,
        },
        {   
          path: 'classPage',
          name: 'ClassView',
          component: ClassView,
        },
        {   
          path: 'OrderInfo',
          name: 'OrderInfoView',
          component: OrderInfoView,
        },
      ]
    }
  ]
});

router.beforeEach((to, from, next) => {
  next();
})

export default router;