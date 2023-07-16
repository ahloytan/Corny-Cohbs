<template>
    <div id="description" class="bgCornyYellow px-4 md:px-0 min-h-70">
        <div class="container text-center md:text-left md:px-32 py-4 md:py-16 lg:flex items-center">
            <div class="lg:px-16">
                <h1 class="cornyPurple cheee-bingbong py-8">What the shuck?</h1>
                <div class="degular cornyBlack">
                <p class="font-bold text-xl">
                    CornyCohbs is a fun NFT collection housing 4,000 unique corny characters that inhabit the Cornyverse. Exclusivly built on the
                    <a target="_blank" :href="hederaLink"><span class="font-bold underline hoverState">Hedera Network</span></a>.
                </p> 
                <img v-if="isMobile" id="cornsGIF" src="@/assets/corns.gif" class="mx-auto" alt="corns_gif">

                <p class="pt-8 text-xl font-semibold">
                    In our vision we aspire to build a strong community in web3 whilst growing into a top brand that maintains high quality in everything we deliver. We also want to create an <b>emotional connection</b> for <b>EVERYONE</b> who follows CornyCohbs as well as an enjoyable & memorable experience.
                </p>
                </div>
            </div>
            <img v-if="!isMobile" id="cornsGIF" src="@/assets/corns.gif" class="mx-auto" alt="corns_gif">
        </div>
    </div>
</template>
<script>
import useIsMobile  from '../mixins/index';


export default {
    name: 'PageDescription',
    setup() {
        const { isMobile } = useIsMobile();

        return {
        isMobile
        };
    }
}
</script>
<style scoped>
.hoverState:hover{
    color: #FF4F1A;
}
</style>
