<template>
  <div id="storyline" class="text-center text-white bgCornyPurple degular px-4 md:px-0 min-h-70">
    <div class="container lg:px-64 py-4 md:py-16">
      <h3>Meet Corny & join him on an epic adventure into the Cornyverse!</h3>
      <p class="pt-4">In a rundown amusement park, Corny suffers a mundane life as a janitor, sweeping floors whilst being bossed around by the grumpy park owner, Mr Hardcorn.</p>
    </div>
    <div id="carousel" class="slider full-bleed">
      <div class="slidewrapper">
        <img class="slide" src="@/assets/frame1.webp" alt="frame1">
      </div>
      <div class="slidewrapper">
        <img class="slide" src="@/assets/frame2.webp" alt="frame2">
      </div>
      <div class="slidewrapper">
        <img class="slide" src="@/assets/frame3.webp" alt="frame3">
      </div>
      <div class="slidewrapper">
        <img class="slide" src="@/assets/frame4.webp" alt="frame1">
      </div>
      <div class="slidewrapper">
        <img class="slide" src="@/assets/frame5.webp" alt="frame1">
      </div>
      <div class="slidewrapper">
        <img class="slide" src="@/assets/frame6.webp" alt="frame1">
      </div>
      <div class="slidewrapper">
        <img class="slide" src="@/assets/frame7.webp" alt="frame1">
      </div>
    </div>
      <div class="flex justify-center">
        <img class="cursor-pointer" src="@/assets/left.webp" alt="left arrow" @click="moveCarousel('left')">
        <img class="cursor-pointer" src="@/assets/right.webp" alt="right arrow" @click="moveCarousel('right')">
      </div>

      <div class="container lg:px-64 py-16">
      <p>Everything suddenly changes when Corny interacts with a mesmerising crystal ball & enters a new dimension during his cleanup duties.</p>
      <!-- <CornButton content="ENTER THE CORNVERSE"/> -->
    </div>
  </div>
</template>
<script>
// import CornButton from './CornButton.vue';

export default {
    name: 'StoryLine',
    components: {
        // CornButton
    }, 
    methods: {
    moveCarousel(direction) {
      const carousel = document.getElementById('carousel');
      const scrollAmount = direction === 'left' ? -carousel.offsetWidth / 5 : carousel.offsetWidth / 5;
      carousel.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  }
}
</script>
<style>
/* https://codepen.io/bramus/pen/VwpwdZy */
#storyline {
  --column-size: min(100%, 500px);
  --slider-size: min(100%, 300px);
  --slider-border-radius: 20px;
  --slider-fullbleed-gap: 20px;
  overflow-x: hidden;
}


.slider {
  display: flex;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  width: var(--slider-size);
  margin: 1em auto;
  
  border-radius: var(--slider-border-radius);
}

.slider {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.slider::-webkit-scrollbar {
  display: none;
}

.slidewrapper {
  scroll-snap-align: center;

  /* Size me */
  flex: 0 0 var(--slider-size);
  width: var(--slider-size);
  
  /* This is needed for the paddings (in the full-bleed variant) to work …*/
  box-sizing: content-box;

  /* To allow the child .slide to stretch out inside me */
  display: flex;
}

.slide {
  /* Stretch me out in my .slidewrapper parent */
  flex: 1;
  
  /* Give me some height */
  min-height: 300px;
  /* aspect-ratio: 16/9; */
  
  /* Center text */
  display: grid;
  place-content: center;
}

/* @ref https://www.bram.us/2019/04/09/breaking-elements-out-of-their-containers-in-css-with-full-bleed/ */
.full-bleed {
  width: 100vw;
  margin-left: 50%;
  transform: translateX(-50%);
}

/* Put border-radius on the individual slides, not the slider-container */
.slider.full-bleed {
  border-radius: var(--slider-border-radius);
}
.slider.full-bleed .slide {
  border-radius: var(--slider-border-radius);
}

/* Add a faux gap between the slidewrappers */
.slider.full-bleed .slidewrapper {  
  margin-right: var(--slider-fullbleed-gap);
}

/* Offset first slidewrapper from the left so that it apppears centered on load */
.slider.full-bleed .slidewrapper:first-child {
  padding-left: calc(85vw - (var(--slider-size)));
}

/* Offset last slidewrapper so that it apppears centered when at the last item */
/* Note that margin-right won't work …*/
.slider.full-bleed .slidewrapper:last-child {
  margin-right: 0;
  padding-right: calc(50vw - (var(--slider-size) / 2));
}


@media (min-width: 768px) {
  #storyline {
    --column-size: min(100%, 500px);
    --slider-size: min(100%, 300px);
    --slider-border-radius: 20px;
    --slider-fullbleed-gap: 40px;
    overflow-x: hidden;
  }

  .slider.full-bleed .slidewrapper:first-child {
    padding-left: calc(40vw - (var(--slider-size)));
  }

  .slider.full-bleed .slidewrapper:last-child {
    margin-right: 0;
    padding-right: calc(40vw - (var(--slider-size) / 2));
  }
}

</style>