<script setup>
    const props = defineProps({
        to: String,
        title: String
    })
</script>
<template>
<li @click="showMenu = !showMenu" class="text-md"><router-link :to="to" class="text-gray-800 hover:text-gray-400">{{title}}</router-link></li>
</template>