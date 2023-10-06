import routeImporter from '@liberu-ui/ui/src/modules/importers/routeImporter';

const routes = routeImporter(require.context('./services', false, /.*\.js$/));
const RouterView = () => import('@liberu-ui/ui/src/bulma/pages/Router.vue');

export default {
    path: '/services',
    component: RouterView,
    meta: {
        breadcrumb: 'services',
        route: 'services.index',
    },
    children: routes,
};
