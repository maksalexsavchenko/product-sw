<template>
  <MainLayout>
    <template #content>
      <hero-block />
      <advantages-block />
      <video-block />
    </template>
  </MainLayout>
</template>

<script>
import HeroBlock from "@/pages/main/partials/HeroBlock";
import AdvantagesBlock from "@/pages/main/partials/AdvantagesBlock";
import VideoBlock from "@/pages/main/partials/VideoBlock";
import MainLayout from "@/components/MainLayout";

export default {
  name: "MainPage",
  components: { HeroBlock, AdvantagesBlock, VideoBlock, MainLayout }
}
</script>

<style scoped>

</style>
