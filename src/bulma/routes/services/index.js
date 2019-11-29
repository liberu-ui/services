const ServiceIndex = () => import('../../pages/services/Index.vue');

export default {
    name: 'services.index',
    path: '',
    component: ServiceIndex,
    meta: {
        breadcrumb: 'index',
        title: 'Services',
    },
};
