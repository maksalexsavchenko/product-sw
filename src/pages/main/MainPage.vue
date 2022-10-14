<template>
  <div class="home-page">
    <site-header />
    <hero-block />
    <advantages-block />
    <video-block />
    <site-footer />
  </div>
</template>

<script>
import HeroBlock from "@/pages/main/partials/HeroBlock";
import SiteHeader from "@/components/SiteHeader";
import AdvantagesBlock from "@/pages/main/partials/AdvantagesBlock";
import VideoBlock from "@/pages/main/partials/VideoBlock";
import SiteFooter from "@/components/SiteFooter";
export default {
  name: "MainPage",
  components: {VideoBlock, SiteHeader, HeroBlock, AdvantagesBlock, SiteFooter}
}
</script>

<style scoped>

</style>
