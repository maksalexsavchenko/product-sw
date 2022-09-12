<template>
  <div class="home-page">
    <site-header />
    <hero-block />
  </div>
</template>

<script>
import HeroBlock from "@/pages/main/partials/HeroBlock";
import SiteHeader from "@/components/SiteHeader";
export default {
  name: "MainPage",
  components: {SiteHeader, HeroBlock}
}
</script>

<style scoped>

</style>
