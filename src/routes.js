import appAbout from './components/about.vue';
import appWrkplcs from './components/workplaces.vue'

export const routes = [
    { path: '/workplaces', component: appWrkplcs },
    { path: '/', component: appAbout }
]