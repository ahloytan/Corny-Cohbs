<template>
  <PageHeader />
  <StoryLine />
  <PageDescription />
  <CornPaper />
  <PageContact />
</template>

<script>
import PageHeader from './components/PageHeader.vue';
import StoryLine from './components/StoryLine.vue';
import PageDescription from './components/PageDescription.vue';
import CornPaper from './components/CornPaper.vue';
import PageContact from './components/PageContact.vue';

export default {
  name: 'App',
  components: {
    PageHeader,
    StoryLine,
    PageDescription,
    CornPaper,
    PageContact,
  }
}
</script>

<style>
#app {
  font-size: 1.6rem;
}

#intoTheCornVerse {
  background-image: url('@/assets/cornverse-bg.jpeg');
  background-repeat: no-repeat;
  background-size: cover;
}

#cornsGIF {
  width: 468px;
  height: 468px;
}

.max-width-350 {
  max-width: 100%;
}

.degular {
  font-family: "degular-text", sans-serif;;
}

.cheee {
  font-family:  "cheee-wowie", sans-serif;
}

.cheee-bingbong {
  font-family: "cheee-bingbong",sans-serif;
}

.cornyYellow {
  color: #FCEA4D;
}

.cornyPurple {
  color: #5750F6;
}

.cornyBlack {
  color: #3C2210;
}

.cornyOrange {
  color: #FF4F1A;
}

.cornyLightPurple {
  color: #D3C3FA;
}

.bgCornyYellow {
  background-color: #FCEA4D;
}

.bgCornyPurple {
  background-color: #5750F6;
}

.bgCornyLightYellow {
  background-color: #FFFED5;
}

@media screen and (max-width: 640px) {
  #cornsGIF {
    width: 234px;
    height: 234px;
  }
}

@media screen and (min-width: 768px) {
  .max-width-350 {
    max-width: 350px;
  }
}
</style>
