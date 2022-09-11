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
            path: '/Assignment1/',
            component: Home,
            name: 'Home'
        },
        {
            path: '/Assignment1/personal',
            component: PersonalInfo
        },
        {
            path: '/Assignment1/idealJob',
            component: IdealJob
        },
        {
            path: '/Assignment1/profile',
            component: Profile
        },
        {
            path: '/Assignment1/project',
            component: Project
        },
        {
            path: '/Assignment1/interests',
            component: Interest
        }
    ]
})

export default router