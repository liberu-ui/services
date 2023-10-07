/**
 * The component for creating a service.
 *
 * @packageDocumentation
 */

import { ComponentOptions } from 'vue';

import ServiceCreate from '../../pages/services/Create.vue';

/**
 * The route configuration for the create service page.
 */
const createServiceRoute: ComponentOptions = {
  /**
   * The name of the component.
   */
  name: 'ServicesCreate',

  /**
   * The path of the route.
   */
  path: 'create',

  /**
   * The component to be rendered.
   */
  component: ServiceCreate,

  /**
   * The meta information of the route.
   */
  meta: {
    /**
     * The breadcrumb for the route.
     */
    breadcrumb: 'create',

    /**
     * The title of the page.
     */
    title: 'Create Services',
  },
};

export default createServiceRoute;
