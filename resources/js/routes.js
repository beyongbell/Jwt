import Home  from './components/Home.vue';
import Login from './components/auth/Login.vue';
import CustomersMain from './components/customers/Main.vue';
import CustomersList from './components/customers/List.vue';

export const routes = [
    {
        path: '/',
        component : Home,
        meta : {
            requiresAuth : true
        }
    },
    {
        path: '/login',
        component : Login,
    },
    {
        path: '/customers',
        component : CustomersMain,
        meta: {
            requiresAuth : true
        },
        children : [
            {
                path: '/',
                component: CustomersList
            }
        ]
    }
]
