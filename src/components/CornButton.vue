<template>
    <button class="rounded-full bgCornyOrange mt-8 px-8 py-4 font-bold text-base text-white"> {{ content }}</button>
</template>
<script>
export default {
    name: "CornButton",
    props: {
        content: String,
        action: String
    },
}
</script>
<style>
.bgCornyOrange {
  background-color: #FF4F1A;
}
</style>