<template>
  <div id="contact" class="bgCornyPurple text-white px-4 md:px-0 py-4">
    <div v-if="isMobile" class="text-center">
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
        <p class="font-bold underline text-2xl">HOME</p>
        <p class="py-2 font-bold cornyLightPurple text-2xl">Team (Coming Soon)</p>
        <p class="py-2 font-bold cornyLightPurple text-2xl">Collections (Coming Soon)</p>
        <div class="flex justify-center md:justify-start pt-4 sm:pt-10 md:pt-20 text-base">
          <a target="_blank" :href="twitterLink" class="pr-8" >
            <img src="@/assets/twitter.png" class="icons" alt="twitter_icon">
            <span>Twitter</span>
          </a>
          <a target="_blank" :href="discordLink" class="icons" >
            <img src="@/assets/discord.png" class="" alt="discord_icon">
            <span>Discord</span>
          </a>
        </div>
        <p v-if="!isMobile" class="pt-4 md:pt-12 text-base">Proudly minting on <a target="_blank" :href="hederaLink"><span class="font-bold underline">Hedera</span></a></p>
      </div>
    </div>
  </div>
</template>
<script>
import CornButton from './CornButton.vue';

export default {
    name: 'PageContact',
    components: {
        CornButton
    },
    computed: {
      isMobile(){
        return window.innerWidth <= 420;
      }
    }
}
</script>
