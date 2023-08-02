<template>
    <div id="description" class="bgCornyYellow px-4 md:px-0 min-h-70">
        <div class="container grid grid-cols-12 text-center md:text-left px-4 py-4 md:py-16 items-center">
            <div class="col-span-12 md:col-span-6 lg:col-span-7 2xl:px-16">
                <h1 class="cornyPurple cheee-bingbong py-8">What the shuck?</h1>
                <div class="degular cornyBlack mb-4">
                <p class="font-bold text-xl">
                    CornyCohbs is a fun NFT collection housing 4,000 unique corny characters that inhabit the Cornyverse. Exclusivly built on the
                    <a target="_blank" :href="hederaLink"><span class="font-bold underline hoverState">Hedera Network</span></a>.
                </p> 
                <img id="cornsGIF" v-if="isMobile" src="@/assets/corns.gif" class="mx-auto" alt="corns_gif">

                <p class="pt-8 text-xl font-semibold">
                    In our vision we aspire to build a strong community in web3 whilst growing into a top brand that maintains high quality in everything we deliver. We also want to create an <b>emotional connection</b> for <b>EVERYONE</b> who follows CornyCohbs as well as an enjoyable & memorable experience.
                </p>
                </div>
                <img src="@/assets/stickers-set1.png" class="mx-auto px-0 sm:px-16 md:0 lg:px-32" alt="stickers-set1">
            </div>
            <div class="col-span-12 md:col-span-6 lg:col-span-5 h-full">
                <img v-if="!isMobile" src="@/assets/corns.gif" class="mx-auto object-scale-down" alt="corns_gif">
            </div>
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

#cornsGIF {
  width: 468px;
  height: 468px;
}

@media screen and (max-width: 768px) {
    #cornsGIF {
        width: 234px;
        height: 234px;
    }
}

</style>
