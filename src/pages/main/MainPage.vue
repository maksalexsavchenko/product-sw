<template>
  <div class="home-page">
    <site-header />
    <hero-block />
    <advantages-block />
    <video-block />
  </div>
</template>

<script>
import HeroBlock from "@/pages/main/partials/HeroBlock";
import SiteHeader from "@/components/SiteHeader";
import AdvantagesBlock from "@/pages/main/partials/AdvantagesBlock.vue";
import VideoBlock from "@/pages/main/partials/VideoBlock";
export default {
  name: "MainPage",
  components: {VideoBlock, SiteHeader, HeroBlock, AdvantagesBlock}
}
</script>

<style scoped>

</style>
