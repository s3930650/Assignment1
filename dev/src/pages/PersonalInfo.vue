<script setup>
import Navigation from '../components/Navigation.vue';
</script>

<template>
    <Navigation />
    <div class="flex w-full mt-12 mx-auto max-w-6xl">
        <div class="w-96">
            <img  class="w-full h-full rounded-full object-cover" id="portrait" alt="Picture of Leigh" title="Hello there" src="../assets/profile.jpg" />
        </div>
        <div class="rounded-2xl w-3/4 text-sm flex flex-col justify-center px-12 space-y-4 py-4 ml-8 bg-white shadow-xl">
            <p>Name: <span class="font-semibold">Leigh White</span></p>
            <p>Student Number: <span class="font-semibold">S3930650</span></p>
            <p>Student Email: <a href="mailto:s3930650@student.rmit.edu.au" class="font-semibold hover:underline">s3930650@student.rmit.edu.au</a></p>
            <div>
                <p>Hi, my name is Leigh! I grew up in a regional area of Victoria about three hours away
                    from Melbourne, and have recently moved to South East Melbourne.
                    I’m a bit of a gamer, but my biggest hobby is software and web development.</p>
                    <p>Outside of IT, I enjoy music production and DJ'ing, and I am known to be a bit of a
                    Magic the Gathering enjoyer.</p>
                </div>
        </div>
    </div>
</template>

