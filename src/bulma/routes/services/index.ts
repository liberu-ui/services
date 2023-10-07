/**
 * The type for the Service Index component.
 */
type ServiceIndexComponent = () => Promise<typeof import("../../pages/services/Index.vue")>;

/**
 * The type for the metadata of the Service Index component.
 */
type ServiceIndexMetadata = {
    breadcrumb: string;
    title: string;
};

/**
 * The configuration object for the Service Index route.
 */
const serviceIndexRoute = {
    /**
     * The name of the route.
     */
    name: 'services.index',

    /**
     * The path of the route.
     */
    path: '',

    /**
     * The component to render for the route.
     */
    component: ServiceIndex as ServiceIndexComponent,

    /**
     * The metadata for the route.
     */
    meta: {
        breadcrumb: 'index',
        title: 'Services',
    } as ServiceIndexMetadata,
};

export default serviceIndexRoute;
