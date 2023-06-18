<template>
  <PageHeader />
  <StoryLine />
  <PageDescription />
  <CornPaper />
  <PageContact />
  <button id="to-top-button" @click="goToTop()" title="Back To Top" class="hidden fixed z-90 bottom-8 right-8 border-0 w-12 h-12 rounded-full drop-shadow-md bg-indigo-500 text-white ">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  </button>
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
  },
  mounted(){
    var toTopButton = document.getElementById("to-top-button");
    window.onscroll = function () {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            toTopButton.classList.remove("hidden");
        } else {
            toTopButton.classList.add("hidden");
        }
    }
  },
  methods: {
    goToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
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
  max-width: 350px;
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

@media screen and (max-width: 768px) {
  #cornsGIF {
    width: 234px;
    height: 234px;
  }
}
</style>
