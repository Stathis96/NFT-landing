<template>

  <div class="flex flex-row h-screen">
    <div class="w-2/3  bg-gradient-to-r from-darkslategray-light to-darkslategray-dark">
      <div class="flex flex-row pl-10 pt-10 font-mono text-lg font-bold text-white">
        <img class="w-10 h-10" alt="Vue logo" src="../assets/logo.png" />
          Vue Js.
          <div class="px-20 text-gray-400">
            <button class="px-10">How it works?</button>
            <button class="px-10">About</button>
            <button class="px-10">Community</button>
          </div>
      </div>
      <div class="pt-40 w-2/3">
        <p class="px-20 text-white font-bold text-8xl">Discover super rare artwork and sell it</p>
        <p class="pt-8 px-20 text-gray-400">More than 1000 digital artoworks are available to be yours, start 
          by searching according to the category you are interested in.</p>
          <div class="pt-10 px-20 inline-flex space-x-4 font-mono">
            <button class="text-lg text-black font-bold h-10 w-40 rounded-md text-sm font-medium border-b-2 focus:outline-none focus:ring transition bg-yellow-300 border-yellow-800 hover:bg-yellow-600 active:bg-yellow-700 focus:ring-yellow-300">
              Discover
            </button>

            <button class="pl-10 inline-flex items-center">
              <span class="text-white font-mono">Create NFT</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>

          </div>
      </div>
    </div>

    <div class="w-1/3  bg-gradient-to-r from-darkkhaki-light to-darkkhaki-dark">
      <div class="pt-10 pr-10 font-mono text-lg text-white text-right"> Join Us </div>
    </div>
  </div>

  <div class="w-full h-64 bg-gradient-to-r from-darkslategray-lighter to-darkslategray-darker">
    imhere too 
  </div>

  <div class="w-full h-screen bg-gradient-to-r from-gray-900 to-darkslategray-dark">
    HEYYEYEYEY
  </div>

  <div class="w-full h-64 bg-darkslategray-darkest">
    imhere too 2nd time
  </div>

  <div class="w-full h-64 bg-gradient-to-r from-gray-900 to-darkslategray-dark">
    HEYYEYEYEY
  </div>

</template>

<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<style scoped>

</style>
