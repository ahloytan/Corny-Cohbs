<template>
  <div id="contact" class="bgCornyPurple text-white px-4 md:px-0">
    <div class="text-center md:text-left container lg:pl-32 py-16 md:flex">
      <div class="md:pr-16 lg:pr-32">
        <span class="cornyYellow cheee-bingbong text-5xl md:text-7xl">Corny</span>
        <span class="text-white  cheee-bingbong text-5xl md:text-7xl">Cohbs</span>
        <p class="degular font-semibold max-width-350 pt-8 pb-4">Looking to collab with us or have some corny ideas you want to share?</p>
        <CornButton content="GET CORNY WITH US"/>
        <p class="degular text-base pt-4 md:pt-16"> &copy;CornyCohbs 2023 | NFTs with utilities</p>
      </div>
      <div class="pt-8 md:pt-0 md:pl-16 lg:pl-32 degular">
        <p class="font-bold underline text-2xl">STORY</p>
        <p class="py-2 font-bold cornyLightPurple text-2xl">Team (Coming Soon)</p>
        <p class="py-2 font-bold cornyLightPurple text-2xl">Collections (Coming Soon)</p>
        <div class="flex justify-center md:justify-start pt-4 md:pt-20 text-base">
          <a target="_blank" :href="twitterLink" class="pr-8" >
            <img src="@/assets/twitter.png" alt="twitter_icon">
            <span>Twitter</span>
          </a>
          <a target="_blank" :href="discordLink" class="px-4" >
            <img src="@/assets/discord.png" alt="discord_icon">
            <span>Discord</span>
          </a>
        </div>
        <p class="pt-4 md:pt-12 text-base">Proudly minting on <a target="_blank" :href="hederaLink"><span class="font-bold underline">Hedera</span></a></p>
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
    }
}
</script>
