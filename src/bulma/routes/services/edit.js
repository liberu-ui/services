const ServiceEdit = () => import('../../pages/services/Edit.vue');

export default {
    name: 'services.edit',
    path: ':service/edit',
    component: ServiceEdit,
    meta: {
        breadcrumb: 'edit',
        title: 'Edit Services',
    },
};
