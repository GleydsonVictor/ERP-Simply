import Index from '../pages/Index'
import NotFound from '../pages/elements/404'

export const routes = [
    {
        path:'/',
        name: 'Index',
        component: Index
    },
    {
        path:'*',
        name: 'NotFound',
        component: NotFound
    },
];