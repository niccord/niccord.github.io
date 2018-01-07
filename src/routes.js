import appAbout from './components/about.vue';
import appWrkplcs from './components/workplaces.vue'
import appStudies from './components/studies.vue'
import appOther from './components/other.vue'

export const routes = [
    { path: '/workplaces', component: appWrkplcs },
    { path: '/studies', component: appStudies },
    { path: '/other', component: appOther },
    { path: '*', component: appAbout }
]