import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/LoginLyt.vue'),
    children: [{ path: '', component: () => import('pages/Login/LoginPg.vue') },
    { path: '/owner', component: () => import('pages/Login/OwnerPg.vue') },
    { path: '/register', component: () => import('pages/Login/RegisterPg.vue') },
    { path: '/doctor', component: () => import('pages/Login/DoctorPg.vue') }
  ]
  },

  {
    path: '/user-main',
    component: () => import('layouts/OwnerLyt.vue'),
    children: [
    { path: '/user-main', component: () => import('pages/User/IndexPg.vue') },
    { path: '/user-list', component: () => import('pages/User/ListMascot.vue') },
    { path: '/user-create', component: () => import('pages/User/CreateMascot.vue') },
    { path: '/user-edit', component: () => import('pages/User/EditMascot.vue') },
    { path: '/user-date', component: () => import('pages/User/DateMascot.vue') },
    { path: '/user-list-date', component: () => import('pages/User/ListDate.vue') }
  ]
  },

  {
    path: '/doctor-main',
    component: () => import('layouts/DoctorLyt.vue'),
    children: [
    { path: '/doctor-main', component: () => import('pages/Doctor/IndexPg.vue') },
    { path: '/doctor-history', component: () => import('pages/Doctor/ClinicalHistory.vue') },
    { path: '/doctor-pets', component: () => import('pages/Doctor/ListMascot.vue') },
    { path: '/doctor-dates', component: () => import('pages/Doctor/DoctorDates.vue') },
    { path: '/doctor-edit-date', component: () => import('pages/Doctor/EditDate.vue') }

  ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
