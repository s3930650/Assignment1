<script setup>
    const props = defineProps({
        heading: String
    })
</script>
<template>
    <h2 class="font-bold text-lg text-gray-400">{{heading}}</h2>
</template>