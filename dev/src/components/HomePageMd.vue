<script setup>
import LinkBubble from './LinkBubble.vue'
</script>
<template>
        <div class="mx-auto h-screen md:flex flex-col justify-center group w-1/2 max-w-2xl">
            <div class="flex justify-between transition ease-in-out delay-150 opacity-0 group-hover:opacity-100 duration-300">
                <LinkBubble to="/Assignment1//profile" title="Profile"/>
                <LinkBubble to="/Assignment1//idealJob" title="Ideal Job"/>
            </div>
            <div class="flex flex-col items-center justify-center rounded-full">
                <img src="../assets/profile.jpg"
                    class="border shadow-2xl object-cover rounded-full w-96 h-96 animate-pulse group-hover:hidden" />
                <router-link to="/Assignment1//personal">
                    <div class="bg-white items-center justify-center shadow-xl hover:shadow-2xl hover:font-semibold rounded-full w-96 h-96 hidden group-hover:flex text-2xl">
                        Personal Information
                    </div>
                </router-link>
                <p class="mt-4">Leigh White - <span class="font-semibold">S3930650</span></p>
                <br />
                <a href="mailto:s3930650@student.rmit.edu.au">📧 <span class="underline hover:text-gray-500">S3930650@student.rmit.edu.au</span></a>
            </div>

            <div class="flex justify-between transition ease-in-out delay-150 opacity-0 group-hover:opacity-100 duration-300">
                <LinkBubble to="/Assignment1/interests" title="Interests in IT"/>
                <LinkBubble to="/Assignment1/project" title="Project Idea"/>
            </div>
        </div>
</template>