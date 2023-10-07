/**
 * The ServiceEdit component is responsible for editing services.
 *
 * @component
 * @name ServiceEdit
 */
const ServiceEdit = () => import('../../pages/services/Edit.vue');

export default {
  /**
   * The name of the route for editing services.
   *
   * @type {string}
   */
  name: 'services.edit',
  /**
   * The path of the route for editing services.
   *
   * @type {string}
   */
  path: ':service/edit',
  /**
   * The component that should be rendered when editing services.
   *
   * @type {Component}
   */
  component: ServiceEdit,
  /**
   * Metadata for the route for editing services.
   *
   * @type {object}
   * @property {string} breadcrumb - The breadcrumb for the route.
   * @property {string} title - The title for the route.
   */
  meta: {
    breadcrumb: 'edit',
    title: 'Edit Services',
  },
};