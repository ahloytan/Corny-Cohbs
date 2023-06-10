<template>
  <div id="storyline" class="text-center text-white bgCornyPurple degular px-4 md:px-0">
    <div class="container lg:px-64 py-16">
      <h3>Meet our hero Corny Cob and take an adventure into the Cornyverse...</h3>
      <p class="pt-4">In a rundown amusement park, Corny, a janitor with a passion for crypto trading, suffers a mundane life under the constant berating of Mr. Hardcorn, the grumpy park owner.</p>
      <div class="flex flex-row py-8">
        <div class="box-border h-32 w-32 p-4 mx-2 bg-slate-300" v-for="i in 5" :key="i">
        </div>
      </div>
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
