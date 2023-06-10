<template>
  <div id="cornPaper" class="bgCornyLightYellow px-4 md:px-0">
    <div class="container lg:flex py-16">
      <img id="cornsGIF" src="@/assets/corns.gif" class="mx-auto xl:mr-48 " alt="corns_gif">
      <div class="text-center lg:pr-32">
        <h1 class="cornyOrange cheee-bingbong pb-8">CORNPAPER</h1>
        <h4 class="mx-auto degular text-xl font-bold cornyBlack max-width-350">Want to know more about the project and collections like The Golden Corn utility NFTs?</h4>
        <a href="https://cdn.discordapp.com/attachments/1055723179970134017/1088403406428852344/CORNPAPER_v1.0.pdf">
          <CornButton content="DOWNLOAD CORNPAPER 1.0"/>
        </a>
        <p class="degular pt-4 cornyBlack">Cornpaper PDF 3.9MB</p>
      </div>
    </div>
  </div>
</template>
<script>
import CornButton from './CornButton.vue';

export default {
    name: 'CornPaper',
    components: {
        CornButton
    }
}
</script>
