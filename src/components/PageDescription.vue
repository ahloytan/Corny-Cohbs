<template>
    <div id="description" class="bgCornyYellow px-4 md:px-0 min-h-70">
        <div class="container text-center md:text-left md:px-32 py-4 md:py-16 lg:flex items-center">
            <div class="lg:px-16">
                <h1 class="cornyPurple cheee-bingbong py-8">What the shuck?</h1>
                <div class="degular cornyBlack">
                <p class="font-bold text-xl">Welcome to Corny Cohbs, an NFT collection of 4,000 corny characters that inhabit the Cornyverse.</p> 
                <p class="pt-8 text-xl font-semibold">
                    Corny Cohbs is minting on the Hedera Token Service (HTS) using NFT technology that is provided on the 
                    <a target="_blank" :href="hederaLink"><span class="font-bold underline hoverState">Hedera Network</span></a>
                </p>
                </div>
            </div>
            <img id="cornsGIF" src="@/assets/corns.gif" class="mx-auto" alt="corns_gif">
        </div>
    </div>
</template>
<script>
export default {
    name: 'PageDescription'
}
</script>
<style scoped>
.hoverState:hover{
    color: #FF4F1A;
}
</style>
