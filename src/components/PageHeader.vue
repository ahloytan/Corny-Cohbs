<template>
    <div id="header" class="bgCornyPurple px-4 md:px-0">
        <div class="container flex py-8 justify-between items-center">
            <div class="cheee-bingbong text-3xl md:text-5xl">
                <span class="cornyYellow">Corny</span>
                <span class="text-white">Cohbs</span>
            </div>
            <div class="flex">
                <a target="_blank" :href="twitterLink"><img src="@/assets/twitter.png" class="mx-4 icons" alt="twitter_icon"></a>
                <a target="_blank" :href="discordLink"><img src="@/assets/discord.png" class="mx-4 icons" alt="discord_icon"></a>
            </div>
        </div>
  </div>
  <div id="intoTheCornVerse" class="min-h-70 flex items-center">
        <img src="@/assets/cornverse.png" class="mx-auto avatar" alt="into_the_cornverse">
  </div>
</template>
<script>
export default {
    name: 'PageHeader'
}
</script>
<style>
.avatar {
	box-sizing: border-box;
	overflow: hidden;
	transform: translatey(0px);
	animation: float 6s ease-in-out infinite;
}

@keyframes float {
	0% {
		transform: translatey(20px);
	}
	50% {
		transform: translatey(0px);
	}
	100% {
		transform: translatey(20px);
	}
}
</style>

