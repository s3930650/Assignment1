<script setup>
    const props = defineProps({
        to: String,
        title: String
    })
</script>

<template>
<router-link :to="to">
    <div class="bg-white w-36 h-36 shadow-xl hover:shadow-2xl hover:font-semibold flex items-center text-lg justify-center rounded-full">
        {{title}}
    </div>
</router-link>
</template>