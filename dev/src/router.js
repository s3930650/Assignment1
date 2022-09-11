import {createRouter, createWebHistory} from 'vue-router';
import Home from './pages/HomePage.vue'
import PersonalInfo from './pages/PersonalInfo.vue'
import IdealJob from './pages/IdealJob.vue'
import Interest from './pages/Interests.vue'
import Profile from './pages/Profile.vue'
import Project from './pages/ProjectIdea.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Home,
            name: 'Home'
        },
        {
            path: '/personal',
            component: PersonalInfo
        },
        {
            path: '/idealJob',
            component: IdealJob
        },
        {
            path: '/profile',
            component: Profile
        },
        {
            path: '/project',
            component: Project
        },
        {
            path: '/interests',
            component: Interest
        }
    ]
})

export default router