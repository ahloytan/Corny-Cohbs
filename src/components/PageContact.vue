<template>
  <div id="contact" class="bgCornyPurple text-white px-4 md:px-0 py-4">
    <div v-if="isMobile" class="text-center mb-4">
      <span class="cornyYellow cheee-bingbong text-6xl md:text-7xl">Corny</span>
      <span class="text-white cheee-bingbong text-6xl md:text-7xl">Cohbs</span>
    </div>
    <div class="flex flex-col-reverse md:flex-row text-center md:text-left container lg:pl-32 md:py-16">
      <div class="md:pr-12 xl:pr-32">
        <div v-if="!isMobile">
          <span class="cornyYellow cheee-bingbong text-6xl md:text-7xl">Corny</span>
          <span class="text-white cheee-bingbong text-6xl md:text-7xl">Cohbs</span>
        </div>
        <p class="degular font-semibold max-width-350 pt-8 md:pb-4">Looking to collab with us or have some corny ideas you want to share?</p>
        <a href="mailto:cornycohbs@gmail.com"> 
          <CornButton content="GET CORNY WITH US"/>
        </a>
        <p v-if="isMobile" class="pt-4 md:pt-12 text-base">Proudly minting on <a target="_blank" :href="hederaLink"><span class="font-bold underline">Hedera</span></a></p>

        <p class="degular text-base px-4 md:px-0 pt-4 md:pt-16">&copy;CornyCohbs 2023 | NFTs with utilities</p>
      </div>
      <div class="md:pl-12 xl:pl-32 degular">
        <p class="font-bold underline text-2xl hoverState" @click="refreshPage()">HOME</p>
        <!-- <p class="py-2 font-bold cornyLightPurple text-2xl">Team (Coming Soon)</p>
        <p class="py-2 font-bold cornyLightPurple text-2xl">Collections (Coming Soon)</p> -->
        <div class="flex justify-center md:justify-start pt-4 sm:pt-10 md:pt-20 text-base">
          <a target="_blank" :href="twitterLink" class="pr-8 hoverState">
            <svg fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" class="iconsHoverState"><path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"/></svg>
            <span>Twitter</span>
          </a>
          <a target="_blank" :href="discordLink" class="hoverState">
            <svg fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" class="iconsHoverState"><path d="M 41.625 10.769531 C 37.644531 7.566406 31.347656 7.023438 31.078125 7.003906 C 30.660156 6.96875 30.261719 7.203125 30.089844 7.589844 C 30.074219 7.613281 29.9375 7.929688 29.785156 8.421875 C 32.417969 8.867188 35.652344 9.761719 38.578125 11.578125 C 39.046875 11.867188 39.191406 12.484375 38.902344 12.953125 C 38.710938 13.261719 38.386719 13.429688 38.050781 13.429688 C 37.871094 13.429688 37.6875 13.378906 37.523438 13.277344 C 32.492188 10.15625 26.210938 10 25 10 C 23.789063 10 17.503906 10.15625 12.476563 13.277344 C 12.007813 13.570313 11.390625 13.425781 11.101563 12.957031 C 10.808594 12.484375 10.953125 11.871094 11.421875 11.578125 C 14.347656 9.765625 17.582031 8.867188 20.214844 8.425781 C 20.0625 7.929688 19.925781 7.617188 19.914063 7.589844 C 19.738281 7.203125 19.34375 6.960938 18.921875 7.003906 C 18.652344 7.023438 12.355469 7.566406 8.320313 10.8125 C 6.214844 12.761719 2 24.152344 2 34 C 2 34.175781 2.046875 34.34375 2.132813 34.496094 C 5.039063 39.605469 12.972656 40.941406 14.78125 41 C 14.789063 41 14.800781 41 14.8125 41 C 15.132813 41 15.433594 40.847656 15.621094 40.589844 L 17.449219 38.074219 C 12.515625 36.800781 9.996094 34.636719 9.851563 34.507813 C 9.4375 34.144531 9.398438 33.511719 9.765625 33.097656 C 10.128906 32.683594 10.761719 32.644531 11.175781 33.007813 C 11.234375 33.0625 15.875 37 25 37 C 34.140625 37 38.78125 33.046875 38.828125 33.007813 C 39.242188 32.648438 39.871094 32.683594 40.238281 33.101563 C 40.601563 33.515625 40.5625 34.144531 40.148438 34.507813 C 40.003906 34.636719 37.484375 36.800781 32.550781 38.074219 L 34.378906 40.589844 C 34.566406 40.847656 34.867188 41 35.1875 41 C 35.199219 41 35.210938 41 35.21875 41 C 37.027344 40.941406 44.960938 39.605469 47.867188 34.496094 C 47.953125 34.34375 48 34.175781 48 34 C 48 24.152344 43.785156 12.761719 41.625 10.769531 Z M 18.5 30 C 16.566406 30 15 28.210938 15 26 C 15 23.789063 16.566406 22 18.5 22 C 20.433594 22 22 23.789063 22 26 C 22 28.210938 20.433594 30 18.5 30 Z M 31.5 30 C 29.566406 30 28 28.210938 28 26 C 28 23.789063 29.566406 22 31.5 22 C 33.433594 22 35 23.789063 35 26 C 35 28.210938 33.433594 30 31.5 30 Z"/></svg>            
            <span>Discord</span>
          </a>
        </div>
        <p v-if="!isMobile" class="pt-4 md:pt-12 text-base">Proudly minting on <a target="_blank" :href="hederaLink"><span class="font-bold underline hoverState">Hedera</span></a></p>
      </div>
    </div>
  </div>
</template>
<script>
import CornButton from './CornButton.vue';
import useIsMobile  from '../mixins/index';


export default {
  name: 'PageContact',
  components: {
      CornButton
  },
  mounted() {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    }
  },
  setup() {
    const { isMobile } = useIsMobile();

    return {
      isMobile
    };
  },
  methods: {
    refreshPage() {
      location.reload();
    }
  }
}
</script>
<style>
.icons {
  width: 50px;
  height: 50px;
}

.hoverState:hover {
  color: #FCEA4D;
}
</style>
