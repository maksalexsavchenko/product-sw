<template>
  <div class="home-page">
    <site-header />
    <hero-block />
    <advantages-block />
  </div>
</template>

<script>
import HeroBlock from "@/pages/main/partials/HeroBlock";
import SiteHeader from "@/components/SiteHeader";
import AdvantagesBlock from "@/pages/main/partials/AdvantagesBlock.vue";
export default {
  name: "MainPage",
  components: {SiteHeader, HeroBlock, AdvantagesBlock}
}
</script>

<style scoped>

</style>
