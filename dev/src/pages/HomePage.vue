<script setup>
    import HomePageMd from '../components/HomePageMd.vue'
    import HomePageSm from '../components/HomePageSm.vue'
</script>

<template>
 <HomePageMd class="hidden md:flex"/>
 <HomePageSm class="flex md:hidden"/>
</template>