import { main, Vue } from '@yishitec/web';
import { ContainerView } from '@yishitec/web/views';
import Vant from 'vant';
import 'vant/lib/index.css';

import './assets/styles/app-mixins.scss';
import './assets/styles/app.scss';
import Home from './views/Home.vue';
import AppTodo from './components/AppTodo.vue';

Vue.use(Vant);

Vue.component('AppField', require('./components/AppField.vue').default);
Vue.component('AppTodo', AppTodo);

main({
  routes: [
    {
      component: Home,
      name: 'home',
      path: '/',
      children: [],
    },
    {
      path: '/member',
      name: 'member',
      component: require('./views/MemberContainer.vue').default,
      children: [
        {
          path: 'posts',
          name: 'member-posts',
          component: ContainerView,
          children: [
            {
              path: 'post',
              name: 'member-posts-post',
              component: require('./views/member/posts/Post.vue').default,
            },
            {
              path: ':id',
              name: 'member-posts-detail',
              component: require('./views/member/posts/Post.vue').default,
            },
            {
              path: '',
              name: 'member-posts-home',
              component: require('./views/member/Posts.vue').default,
            },
          ],
        },
        {
          path: 'books',
          name: 'member-books',
          component: ContainerView,
          children: [
            {
              path: 'select-book',
              name: 'member-books-select-book',
              component: require('./views/member/books/SelectBook.vue').default,
            },
            {
              path: 'new-book',
              name: 'member-books-new-book',
              component: require('./views/member/books/BookDetail.vue').default,
            },
            {
              path: 'categories',
              name: 'member-books-categories',
              component: ContainerView,
              children: [
                {
                  path: 'add-category',
                  name: 'member-books-categories-add-category',
                  component: require('./views/member/books/categories/CategoryDetail.vue')
                    .default,
                },
                {
                  path: ':id',
                  name: 'member-books-categories-detail',
                  component: require('./views/member/books/categories/CategoryDetail.vue')
                    .default,
                },
              ],
            },
            {
              path: ':id',
              name: 'member-books-detail',
              component: require('./views/member/books/BookDetail.vue').default,
            },
            {
              path: '',
              name: 'member-books-home',
              component: require('./views/member/Books.vue').default,
            },
          ],
        },
        {
          path: 'reports',
          name: 'member-reports',
          component: ContainerView,
          children: [
            {
              path: ':type',
              name: 'member-reports-report',
              component: require('./views/member/reports/Report.vue').default,
            },
          ],
        },
        {
          path: 'budgets',
          name: 'member-budgets',
          component: ContainerView,
          children: [
            {
              path: 'by-category',
              name: 'member-budgets-by-category',
              component: ContainerView,
              children: [
                {
                  path: ':id',
                  name: 'member-budgetes-by-category-detail',
                  component: require('./views/member/budgets/by-category/BudgetCategoryDetail.vue')
                    .default,
                },
              ],
            },
            {
              path: '',
              name: 'member-budgets-home',
              component: require('./views/member/Budgets.vue').default,
            },
          ],
        },
        {
          path: 'my',
          name: 'my',
          component: ContainerView,
          children: [
            {
              path: 'security',
              name: 'member-my-security',
              component: require('./views/member/my/Security.vue').default,
            },
            {
              path: '',
              name: 'member-my',
              component: require('./views/member/My.vue').default,
            },
          ],
        },
        {
          path: '',
          name: 'member-home',
          component: require('./views/member/Home.vue').default,
        },
        {
          path: '*',
          name: 'member-todo',
          component: AppTodo,
        },
      ],
    },
    {
      path: '*',
      name: 'app-todo',
      component: AppTodo,
    },
  ],
  componentsConfig: {
    common: {
      appName: 'TalenTick 记账',
      appLogo: require('./assets/images/logo/logo-horizontal.png'),
    },
    container: {
      maxWidth: '1100px',
    },
  },
});
