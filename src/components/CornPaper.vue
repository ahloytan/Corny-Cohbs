<template>
  <div id="cornPaper" class="bgCornyLightYellow px-4 md:px-0 min-h-70">
    <div class="container lg:flex py-4 md:py-16 items-center">
      <img id="cornPaper" src="@/assets/cornpaper.webp" class="mx-auto xl:mr-48" alt="corn_paper">
      <div class="text-center xl:pr-24">
        <h1 class="cornyOrange cheee-bingbong pb-8">CORNPAPER</h1>
        <h2 class="mx-auto degular text-xl font-bold cornyBlack max-width-350">Want to know more about the project and collections like The Golden Corn utility NFTs?</h2>
        <a href="https://cdn.discordapp.com/attachments/1055723179970134017/1088403406428852344/CORNPAPER_v1.0.pdf">
          <CornButton content="DOWNLOAD CORNPAPER 1.0"/>
        </a>
        <p class="degular pt-4 mb-4 cornyBlack">Cornpaper PDF 3.9MB</p>
        <img v-if="!isMobile" src="@/assets/stickers-set2.webp" class="mx-auto px-8 sm:px-48 lg:px-16" alt="stickers-set2">
      </div>
    </div>
  </div>
</template>
<script>
import CornButton from './CornButton.vue';
import useIsMobile  from '../mixins/index';

export default {
    name: 'CornPaper',
    components: {
        CornButton
    },
    setup() {
    const { isMobile } = useIsMobile();

    return {
      isMobile
    };
  }
}
</script>
