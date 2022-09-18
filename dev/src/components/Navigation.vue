<template>
    <div>
      <div>
        <nav class="container px-6 py-8 mx-auto md:flex md:justify-between md:items-center">
          <div class="flex items-center justify-between">
            <router-link to="/" class="text-xl font-bold text-gray-800 md:text-2xl hover:text-gray-400">Leigh White</router-link>
            <!-- Mobile menu button -->
            <div @click="showMenu = !showMenu" class="flex md:hidden">
              <button type="button" class="text-gray-800 hover:text-gray-400 focus:outline-none focus:text-gray-400">
                <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                  <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
                </svg>
              </button>
            </div>
          </div>
  
  
          <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
          <ul :class="showMenu ? 'flex' : 'hidden'" class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row items-center md:space-x-2 text-sm lg:space-x-10 md:mt-0">
            <li @click="showMenu = !showMenu" class="text-md hover:scale-105"><router-link to="/personal" class="text-gray-800 hover:text-gray-400">Personal Information</router-link></li>
            <li @click="showMenu = !showMenu" class="text-md hover:scale-105"><router-link to="/profile" class="text-gray-800 hover:text-gray-400">Personal Profile</router-link></li>
            <li @click="showMenu = !showMenu" class="text-md hover:scale-105"><router-link to="/interests" class="text-gray-800 hover:text-gray-400">Interest in IT</router-link></li>
            <li @click="showMenu = !showMenu" class="text-md hover:scale-105"><router-link to="/idealJob" class="text-gray-800 hover:text-gray-400">Ideal Job</router-link></li>
            <li @click="showMenu = !showMenu" class="text-md hover:scale=105"><router-link to="/project" class="text-gray-800 hover:text-gray-400">Project Idea</router-link></li>


          </ul>
        </nav>
      </div>
    </div>
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
  