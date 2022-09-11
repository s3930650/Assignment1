<template>
    <div class="flex m-4 justify-between border-b">
        <div class="ml-4">
            <router-link to="/" class="text-xl font-semibold">Leigh White</router-link>
        </div>
        <div class="flex space-x-4 mr-4">
            <router-link to="/personal" class="hover:scale-110">Personal Information</router-link>
            <router-link to="/profile" class="hover:scale-110">Profile</router-link>
            <router-link to="/interests" class="hover:scale-110">Interest in IT</router-link>
            <router-link to="/idealJob" class="hover:scale-110">Ideal Job</router-link>
            <router-link to="/project" class="hover:scale-110">Project Idea</router-link>
        </div>
    </div>
</template>