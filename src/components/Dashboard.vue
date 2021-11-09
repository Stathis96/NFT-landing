<template>

  <div class="w-screen h-screen flex flex-row">
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
      
      <div class="pt-2 md:pt-40 w-2/3">
        <p class="px-20 text-white font-bold lg:text-8xl md:text-4xl text-sm">Discover super rare artwork and sell it</p>
        <p class="pt-8 px-20 text-gray-400 text-sm lg:text-lg md:text-lg">More than 1000 digital artoworks are available to be yours, start 
          by searching according to the category you are interested in.</p>
          <div class="pt-10 px-20 inline-flex space-x-4 font-mono">
            <button class="text-lg text-black font-bold h-10 w-40 rounded-md text-sm font-medium border-b-2 focus:outline-none focus:ring transition bg-yellow-300 border-yellow-800 hover:bg-yellow-600 active:bg-yellow-700 focus:ring-yellow-300">
              Discover
            </button>

            <button class="pl-2 md:pl-10 inline-flex items-center">
              <span class="text-white font-mono">Create NFT</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>

          </div>
      </div>
    </div>

    <div class="w-1/3 h-full bg-gradient-to-r from-darkkhaki-light to-darkkhaki-dark flex items-center justify-center">

    <transition
      appear
      @before-enter="beforeEnter"
      @enter="enter"
    >
     <div class="slider overflow-hidden">
      <div class="slide-track ">
        <Card class="slide-track"
          v-for="(source,index) in sources" :key="source.id" :source="source" :data-index="index"/>
       </div>
       </div> 
    </transition>

    </div>
  </div>

  <div class="w-screen h-auto bg-gradient-to-r from-darkslategray-lighter to-darkslategray-darker">
    <div class="flex flex-col md:flex-row justify-between w-full h-full px-60 py-20 text-gray-300 font-bold ">

      <div class="inline flex">
        <div class="rounded-full h-20 w-20 flex items-center justify-center bg-gradient-to-r from-darkslategray-light to-darkslategray-dark">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="darkkhaki">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>
        <span class="w-1/4 pl-4 pt-2 text-sm lg:text-base md:text-base">Trusted with 10 achievements</span>
      </div>

      <div class="inline flex">
        <div class="rounded-full h-20 w-20 flex items-center justify-center bg-gradient-to-r from-darkslategray-light to-darkslategray-dark">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="darkkhaki">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
        </div>
        <span class="w-1/4 pl-4 pt-2 font-mono text-sm lg:text-base md:text-base">Easy payment and order</span>
      </div>

      <div class="inline flex">
        <div class="rounded-full h-20 w-20 flex items-center justify-center bg-gradient-to-r from-darkslategray-light to-darkslategray-dark">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="darkkhaki">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
          </svg>
        </div>
        <span class="w-1/4 pl-4 pt-2 font-mono text-sm lg:text-base md:text-base">Get discount membership</span>
      </div>

    </div>
  </div>

  <div class="w-screen h-auto bg-gradient-to-r from-gray-900 to-darkslategray-dark ">
    
    <div class="flex flex-col md:flex-row font-mono text-lg font-bold text-white items-center">

      <div class="flex flex-row w-1/2 items-center">
        <Card class="anim1" :source="sources[5]"/>
        <Card class="anim3" :source="sources[0]"/>
        <Card class="anim2" :source="sources[4]"/>
      </div>
<!-- 
      <div class="anim1 w-1/2 ">
        <Card :source="sources[5]"/>
      </div>

      <div class="anim3 w-1/2 ">
        <Card :source="sources[0]"/>
      </div>
      
      <div class="anim2 w-1/2 ">
        <Card :source="sources[4]"/>
      </div> -->


        <div class="w-1/2 flex flex-col items-center mx-20 ">

          <p class="text-base lg:text-3xl md:text-xl text-yellow-300 mb-4">Miracle Feature</p>
          <p class="text-gray-300 px-48 text-base lg:text-5xl md:text-2xl my-2 font-mono">Best Digital art martketplace</p>
          <p class="text-gray-400 px-40 my-2 text-sm lg:text-xl md:text-base">A digital marketplace to buy or sell and find all the exclusive
            digital artwork assets. Also Miracle can create digital art.
          </p>
          <button class="mt-6 text-lg text-black font-bold h-10 w-40 rounded-md text-sm font-medium border-b-2 focus:outline-none focus:ring transition bg-yellow-300 border-yellow-800 hover:bg-yellow-600 active:bg-yellow-700 focus:ring-yellow-300">
            Learn More
          </button>

        </div>
        
    </div>

    <div class="flex flex-col md:flex-row mt-20">
        <p class="w-1/2 text-base lg:text-6xl md:text-3xl my-20 text-white mx-56">Popular Feature Artwork</p>
        <p class="w-1/2 text-base lg:text-xl md:text-base my-20 text-gray-400 mx-56">Search and find the most popular digital artwork for this week! We have a serach feature that can be used to make searching easier.</p>
    </div>

  <div class="grid gap-2 grid-cols-3 " >
    <Card v-for="source in sources" :key="source.id" :source="source" />
  </div>
  
  <div class="w-full flex flex-row justify-center">
    <button class="mt-2 text-lg text-black font-bold h-10 w-40 rounded-md text-sm font-medium border-b-2 focus:outline-none focus:ring transition bg-yellow-300 border-yellow-800 hover:bg-yellow-600 active:bg-yellow-700 focus:ring-yellow-300">
      See More
    </button>
  </div>

    <div class="flex flex-col lg:flex-row md:flex-row mt-20">
        <p class="w-1/2 text-base lg:text-6xl md:text-4xl my-20 text-white mx-56">Weekly Popular Creator</p>
        <p class="w-1/2 text-base lg:text-xl md:text-xl my-20 text-gray-400 mx-56 ">Find the best creator of the week, ranked creators filtered by creator popularity in creating digital art, like saved and everything hommies.</p>
    </div>

  <div class="flex flex-col md:flex-row justify-between space-x-4 mx-8">
    <Card v-for="source in sources" :key="source.id" :source="source" />
  </div>

  </div>

  <div class="w-screen h-auto bg-darkslategray-darkest">
    <p class="text-gray-300 text-3xl text-center pt-10 font-mono">Trusted By</p>
    <div class="flex flex-col md:flex-row justify-between w-full h-full px-60 pt-4 text-gray-700 font-bold ">
      <div><img src="https://www.vectorlogo.zone/logos/discordapp/discordapp-ar21.svg" class="w-40 h-40" style="filter: grayscale(100%);" alt=""></div>
      <div><img src="https://www.vectorlogo.zone/logos/etsy/etsy-ar21.svg" class="w-40 h-40" style="filter: grayscale(100%);" alt=""></div>
      <div><img src="https://www.vectorlogo.zone/logos/fusionauthio/fusionauthio-ar21.svg" class="w-40 h-40" style="filter: grayscale(100%);" alt=""></div>
      <div><img src="https://www.vectorlogo.zone/logos/dask/dask-ar21.svg" class="w-40 h-40" style="filter: grayscale(100%);" alt=""></div>
    </div>
  </div>

  <div class="w-screen h-auto bg-gradient-to-r from-gray-900 to-darkslategray-dark">
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted} from 'vue'
import Footer from './Footer.vue'
import Card from './Card.vue'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

defineProps<{ msg: string }>()

  onMounted(async () => {
    gsap.fromTo('.anim3', {x:0, zIndex:1 },{ ease:"bounce.inOut", zIndex:1, duration: 2})

    gsap.registerPlugin(ScrollTrigger)
    const mqs = [
      window.matchMedia("(max-width: 600px)"),
      window.matchMedia("(max-width: 768px)"),
      window.matchMedia("(max-width: 1024px)")
    ]   
    if (mqs[0].matches) {
      console.log("Diastasi ",mqs[0])
      console.log("600px")

           
        gsap.from('.anim1', {
           x:150
        })
        gsap.to('.anim1', {
        scrollTrigger:{
          trigger: '.anim1',
          toggleActions: "restart pause restart pause"
        } ,
        x:50,
        y:15,
        rotation: -15,
        duration: 1.5
      })

      gsap.from('.anim2', {
      x:-150,

    })
    
      gsap.to('.anim2', {
        scrollTrigger:{
          trigger: '.anim2',
          toggleActions: "restart pause restart pause"
        } ,
        x:-50,
        y:15,
        rotation: 15,
        duration: 1.5
      })

      } else if (mqs[1].matches) {
      console.log("Diastasi ",mqs[0])

      console.log("800px")

        gsap.from('.anim1', {
            x:250
          })
        gsap.to('.anim1', {
        scrollTrigger:{
          trigger: '.anim1',
          toggleActions: "restart pause restart pause"
        } ,
        x:100,
        y:5,
        rotation: -15,
        duration: 1.5
      })

      gsap.from('.anim2', {
      x:-250,

    })
    
      gsap.to('.anim2', {
        scrollTrigger:{
          trigger: '.anim2',
          toggleActions: "restart pause restart pause"
        } ,
        x:-100,
        y:5,
        rotation: 15,
        duration: 1.5
      })

      } else {
      console.log("Diastasi ",mqs[0])
        gsap.from('.anim1', {
            x:350
          })
        gsap.to('.anim1', {
        scrollTrigger:{
          trigger: '.anim1',
          toggleActions: "restart pause restart pause"
        } ,
        x:250,
        y:15,
        rotation: -15,
        duration: 1.5
      })

      gsap.from('.anim2', {
      x:-350,

    })
    
      gsap.to('.anim2', {
        scrollTrigger:{
          trigger: '.anim2',
          toggleActions: "restart pause restart pause"
        } ,
        x:-250,
        y:15,
        rotation: 15,
        duration: 1.5
      })

      console.log("1000px")
   
      }
    
    // gsap.from('.anim1', {
    //   x:350
    // })
    
    // gsap.to('.anim1', {
    //   scrollTrigger:{
    //     trigger: '.anim1',
    //     toggleActions: "restart pause restart pause"
    //   } ,
    //   x:250,
    //   y:15,
    //   rotation: -15,
    //   duration: 1.5
    // })

    // gsap.fromTo('.anim1',{
    //   scrollTrigger: '.anim1',
    //  {x:350},
    //  { x: 250 ,y:15 ,ease:"bounce.out", rotation: -15, duration: 2}
    //  )

    // gsap.from('.anim2', {
    //   x:-350,

    // })
    
    // gsap.to('.anim2', {
    //   scrollTrigger:{
    //     trigger: '.anim2',
    //     toggleActions: "restart pause restart pause"
    //   } ,
    //   x:-250,
    //   y:15,
    //   rotation: 15,
    //   duration: 1.5
    // })

    // gsap.fromTo('.anim2', {x:-350},{x:-250,y:15, ease:"bounce.out", rotation: 15, duration: 2})
    
    // gsap.fromTo('.anim3', {x:0, zIndex:1 },{ ease:"bounce.inOut", zIndex:1, duration: 2})
   })
      

    const beforeEnter = (el:any) => {
      console.log('before enter - set intial state')
      // el.style.transform = 'translateY(-60px)'
      el.style.transform = 'translateX(200px)'
      el.style.opacity = 0
    }
    const enter = (el:any, done:any) => {
      console.log('starting to enter - make transition')
      gsap.to(el, {
        duration: 3,
        x: 0,
        y: 0,
        opacity: 1,
        ease: 'bounce.out',
        onComplete: done,
        delay: el.dataset.index * 0.4
      })
    }

  const sources = ref([
    'https://media.giphy.com/media/oWjyixDbWuAk8/giphy.gif',
    'https://media.giphy.com/media/10J0650fCjXwty/giphy.gif',
    'https://media.giphy.com/media/PnPU9GhN3V7oVizSHG/giphy.gif',
    'https://media.giphy.com/media/26FPLsoMq5cPEVgg8/giphy.gif',
    'https://media.giphy.com/media/c5wbvuaVVLWzC/giphy.gif',
    'https://media.giphy.com/media/BY8ORoRpnJDXeBNwxg/giphy.gif',
  ])
</script>

<style scoped>
/* Carousel effect */
.slider::before, .slider::after {
    /* background: linear-gradient(to right, #fff 0%, rgba(255, 255, 255, 0) 100%); */
    content: "";
    height: 100%;
    position: absolute;
    width: 100px;
    z-index: 2;
}

.slider::after {
    right: 0;
    top: 0;
    -webkit-transform: rotateZ(180deg);
    transform: rotateZ(180deg);
}

.slider::before {
    left: 0;
    top: 0;
}

.slider .slide-track {
    animation: scroll 10s linear infinite;
    display: flex;
    width: calc(250px * 18);
}

.slider .slide-track:hover {
    animation-play-state: paused;
}



@keyframes scroll {
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(calc(-250px * 9));
    }
}
</style>
