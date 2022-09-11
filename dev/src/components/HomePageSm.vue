<script setup>
  import SmallLink from './SmallLink.vue'
</script>

<template>
    <div @click="showMenu = !showMenu" class="flex">
        <button type="button" class="text-gray-800 hover:text-gray-400 focus:outline-none focus:text-gray-400 ml-12 mt-12 transform" v-on:focusout="showMenu = false" :class="{'focus:rotate-90': showMenu}">
            <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
            </svg>
        </button>
    </div>
    <ul :class="showMenu ? 'flex' : 'hidden'" class="flex-col mt-8 space-y-4 items-center">
        <SmallLink to="/Assignment1//personal" title="Personal Information"/>
        <SmallLink to="/Assignment1//profile" title="Profile"/>
        <SmallLink to="/Assignment1//interests" title="Interests in IT"/>
        <SmallLink to="/Assignment1//idealJob" title="Ideal Job"/>
        <SmallLink to="/Assignment1//project" title="Project Idea"/>
        </ul>
</template>

<script>
    export default {
      data() {
        return {
          showMenu: false,
        };
      },
    };
</script>