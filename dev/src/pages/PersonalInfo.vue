<script setup>
import Navigation from '../components/Navigation.vue';
</script>

<template>
    <Navigation />
    <div class="flex mt-12 justify-evenly items-center">
        <div class="w-1/3">
            <img class="rounded-full mx-auto shadow-2xl h-96 w-96 object-cover" src="../assets/profile.jpg" />
        </div>
        <div class="flex flex-col mt-12 w-3/4 mx-16">
            <div class="text-sm flex space-x-1">
                <div class="rounded-2xl w-96 h-12 flex justify-center items-center bg-white shadow-xl">
                    <p>Name: <span class="font-semibold">Leigh White</span></p>
                </div>
                <div class="rounded-2xl h-12 w-96 flex justify-center items-center bg-white shadow-xl">
                    <p>Student Number: <span class="font-semibold">S3930650</span></p>
                </div>
                <div class="rounded-2xl h-12 w-96 flex justify-center items-center bg-white shadow-xl">
                    <p>Student Email: <a href="mailto:s3930650@student.rmit.edu.au"
                            class="font-semibold hover:underline">s3930650@student.rmit.edu.au</a></p>
                </div>
            </div>
            <div class="bg-white shadow-xl w-full h-44 mb-32 mt-6 mx-auto flex flex-col items-center text-center justify-center space-y-2 rounded-2xl">
                <p class="px-16">Hi, my name is Leigh! I grew up in a regional area of Victoria about three hours away
                    from Melbourne, and have recently moved to South East Melbourne.
                    I’m a bit of a gamer, but my biggest hobby is software and web development.</p>
                <p class="px-16">Outside of IT, I enjoy music production and DJ'ing, and I am known to be a bit of a
                    Magic the Gathering enjoyer.</p>
            </div>
        </div>
    </div>
</template>

