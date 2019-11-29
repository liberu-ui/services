const ServiceCreate = () => import('../../pages/services/Create.vue');

export default {
    name: 'services.create',
    path: 'create',
    component: ServiceCreate,
    meta: {
        breadcrumb: 'create',
        title: 'Create Services',
    },
};
