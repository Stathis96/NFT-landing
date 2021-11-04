<template>

  <div class="flex flex-row h-screen">
    <div class="w-2/3  bg-gradient-to-r from-darkslategray-light to-darkslategray-dark">
      <div class="flex flex-row pl-10 pt-10 font-mono text-lg font-bold text-white">
        <img class="w-10 h-10" alt="Vue logo" src="../assets/logo.png" />
          Vue Js.
          <div class="px-20 text-gray-400">
            <button class="px-10">How it works?</button>
            <button class="px-10">About</button>
            <button class="px-10 inline-flex">Community
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 pl-2 pt-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
          </div>
      </div>
      <div class="pt-40 w-2/3">
        <p class="px-20 text-white font-bold md:text-8xl">Discover super rare artwork and sell it</p>
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

    <!-- <div class="w-1/3 h-full bg-gradient-to-r from-darkkhaki-light to-darkkhaki-dark flex items-center justify-center"> -->
    <div class="w-1/3 h-full bg-gradient-to-r from-darkkhaki-light to-darkkhaki-dark">
      <div class="pt-10 pr-10 font-mono text-lg text-white text-right"> Join Us </div>
      <Card /> 
    </div>
  </div>

  <div class="w-full h-64 bg-gradient-to-r from-darkslategray-lighter to-darkslategray-darker">
    <div class="inline flex justify-between w-full h-full px-60 pt-20 text-gray-300 font-bold ">

      <div class="inline flex">
        <div class="rounded-full h-20 w-20 flex items-center justify-center bg-gradient-to-r from-darkslategray-light to-darkslategray-dark">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="darkkhaki">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>
        <span class="w-1/4 pl-4 pt-2 font-mono text-md">Trusted with 10 achievements</span>
      </div>

      <div class="inline flex">
        <div class="rounded-full h-20 w-20 flex items-center justify-center bg-gradient-to-r from-darkslategray-light to-darkslategray-dark">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="darkkhaki">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
        </div>
        <span class="w-1/4 pl-4 pt-2 font-mono text-md">Easy payment and order</span>
      </div>

      <div class="inline flex">
        <div class="rounded-full h-20 w-20 flex items-center justify-center bg-gradient-to-r from-darkslategray-light to-darkslategray-dark">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="darkkhaki">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
          </svg>
        </div>
        <span class="w-1/4 pl-4 pt-2 font-mono text-md">Get discount membership</span>
      </div>

    </div>
  </div>

  <div class="w-full h-auto bg-gradient-to-r from-gray-900 to-darkslategray-dark">
    
    <div class="flex flex-row pl-10 font-mono text-lg font-bold text-white items-center">
      <div class="w-1/2 flex flex-col items-center justify-center">
        <Card />
      </div>

        <div class="w-1/2 flex flex-col items-center mx-20 ">

          <p class="text-3xl text-yellow-300 mb-4">Miracle Feature</p>
          <p class="text-gray-300 px-48 text-5xl my-2 font-mono">Best Digital art martketplace</p>
          <p class="text-gray-400 px-40 my-2">A digital marketplace to buy or sell and find all the exclusive
            digital artwork assets. Also Miracle can create digital art.
          </p>
          <button class="mt-6 text-lg text-black font-bold h-10 w-40 rounded-md text-sm font-medium border-b-2 focus:outline-none focus:ring transition bg-yellow-300 border-yellow-800 hover:bg-yellow-600 active:bg-yellow-700 focus:ring-yellow-300">
            Learn More
          </button>
        </div>
    </div>

    <div class="flex flex-row mt-20">
        <p class="w-1/2  text-6xl my-20 text-white mx-56">Popular Feature Artwork</p>
        <p class="w-1/2 text-xl my-20 text-gray-400 mx-56">Search and find the most popular digital artwork for this week! We have a serach feature that can be used to make searching easier.</p>
    </div>

  <div class="grid gap-2 grid-cols-3">
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
  </div>
  
  <div class="w-full flex flex-row justify-center">
    <button class="mt-2 text-lg text-black font-bold h-10 w-40 rounded-md text-sm font-medium border-b-2 focus:outline-none focus:ring transition bg-yellow-300 border-yellow-800 hover:bg-yellow-600 active:bg-yellow-700 focus:ring-yellow-300">
      See More
    </button>
  </div>

    <div class="flex flex-row mt-20">
        <p class="w-1/2  text-6xl my-20 text-white mx-56">Weekly Popular Creator</p>
        <p class="w-1/2 text-xl my-20 text-gray-400 mx-56">Find the best creator of the week, ranked creators filtered by creator popularity in creating digital art, like saved and everything hommies.</p>
    </div>

  <div class="inline flex justify-between space-x-4 mx-8">
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
  </div>

  </div>

  <div class="w-full h-64 bg-darkslategray-darkest">
    <p class="text-gray-300 text-3xl text-center pt-10 font-mono">Trusted By</p>
    <div class="inline flex justify-between w-full h-full px-60 pt-4 text-gray-700 font-bold ">
      <div><img src="https://www.vectorlogo.zone/logos/discordapp/discordapp-ar21.svg" class="w-40 h-40" style="filter: grayscale(100%);" alt=""></div>
      <div><img src="https://www.vectorlogo.zone/logos/etsy/etsy-ar21.svg" class="w-40 h-40" style="filter: grayscale(100%);" alt=""></div>
      <div><img src="https://www.vectorlogo.zone/logos/fusionauthio/fusionauthio-ar21.svg" class="w-40 h-40" style="filter: grayscale(100%);" alt=""></div>
      <div><img src="https://www.vectorlogo.zone/logos/dask/dask-ar21.svg" class="w-40 h-40" style="filter: grayscale(100%);" alt=""></div>
    </div>
  </div>

  <div class="w-full bg-gradient-to-r from-gray-900 to-darkslategray-dark">
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Footer from './Footer.vue'
import Card from './Card.vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<style scoped>

</style>
