import { RouteConfig } from 'vue-router';
import { Context } from 'require-context';
import routeImporter from '@liberu-ui/ui/src/modules/importers/routeImporter';

/**
 * Imports routes from the given context using routeImporter.
 * @param context - The require context object.
 * @returns The imported routes.
 */
const importRoutes = (context: Context) => {
  return routeImporter(context);
};

/**
 * The router view component.
 */
const RouterView = () => import('@liberu-ui/ui/src/bulma/pages/Router.vue');

/**
 * The services routes.
 */
const servicesRoutes: RouteConfig = {
  path: '/services',
  component: RouterView,
  meta: {
    breadcrumb: 'services',
    route: 'services.index',
  },
  children: importRoutes(require.context('./services', false, /.*\.ts$/)),
};

export default servicesRoutes;