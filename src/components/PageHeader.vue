<template>
    <div id="header" class="bgCornyPurple px-4 md:px-0">
        <div class="container flex py-8 justify-between">
            <div class="cheee-bingbong text-3xl md:text-5xl">
                <span class="cornyYellow">Corny</span>
                <span class="text-white">Cohbs</span>
            </div>
            <div class="flex">
                <a target="_blank" :href="twitterLink"><img src="@/assets/twitter.png" class="px-4" alt="twitter_icon"></a>
                <a target="_blank" :href="discordLink"><img src="@/assets/discord.png" class="px-4" alt="discord_icon"></a>
            </div>
        </div>
  </div>
  <div id="intoTheCornVerse">
        <img src="@/assets/cornverse.png" class="mx-auto" alt="into_the_cornverse">
  </div>
</template>
<script>
export default {
    name: 'PageHeader'
}
</script>
