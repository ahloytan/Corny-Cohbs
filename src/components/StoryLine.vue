<template>
  <div id="storyline" class="text-center text-white bgCornyPurple degular px-4 md:px-0 min-h-70">
    <div class="container lg:px-64 py-16">
      <h3>Meet our hero Corny Cob and take an adventure into the Cornyverse...</h3>
      <p class="pt-4">In a rundown amusement park, Corny, a janitor with a passion for crypto trading, suffers a mundane life under the constant berating of Mr. Hardcorn, the grumpy park owner.</p>
    </div>
    <div class="slider full-bleed">
      <div class="slidewrapper">
        <div class="slide">
          Item 1
        </div>
      </div>
      <div class="slidewrapper">
        <div class="slide">
          Item 2
        </div>
      </div>
      <div class="slidewrapper">
        <div class="slide">
          Item 3
        </div>
      </div>
      <div class="slidewrapper">
        <div class="slide">
          Item 4
        </div>
      </div>
      <div class="slidewrapper">
        <div class="slide">
          Item 5
        </div>
      </div>
      <div class="slidewrapper">
        <div class="slide">
          Item 6
        </div>
      </div>
      <div class="slidewrapper">
        <div class="slide">
          Item 7
        </div>
      </div>
      <div class="slidewrapper">
        <div class="slide">
          Item 8
        </div>
      </div>
      <div class="slidewrapper">
        <div class="slide">
          Item 9
        </div>
      </div>
      <div class="slidewrapper">
        <div class="slide">
          Item 10
        </div>
      </div>
    </div>
    <div class="container lg:px-64 py-16">
      <p>Everything changes when Corny discovers a mesmerizing crystal ball during his cleanup duties. As Corny gazes into it, he encounters a trippy corn cob figure that lures him into the depths of the Cornyverse.</p>
      <CornButton content="ENTER THE CORNVERSE"/>
    </div>
  </div>
</template>
<script>
import CornButton from './CornButton.vue';

export default {
    name: 'StoryLine',
    components: {
        CornButton
    }
}
</script>
<style>
#storyline {
  --column-size: min(100%, 500px);
  --slider-size: min(100%, 300px);
  --slider-border-radius: 20px;
  --slider-fullbleed-gap: 40px;
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
  background: rgb(0 0 0 / 0.1);
  
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
  border-radius: 0;
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
  padding-left: calc(30vw - (var(--slider-size)));
}

/* Offset last slidewrapper so that it apppears centered when at the last item */
/* Note that margin-right won't work …*/
.slider.full-bleed .slidewrapper:last-child {
  margin-right: 0;
  padding-right: calc(50vw - (var(--slider-size) / 2));
}

</style>