<template>
  <MainLayout>
    <template #content>
      <hero-how-to-use/>
      <SwapCoinBlock/>
      <section-b/>
      <section-c/>
      <video-block/>
    </template>
  </MainLayout>
</template>

<script>
import MainLayout from "@/components/MainLayout";
import SectionB from "@/pages/how-to-use/partials/SectionB";
import SectionC from "@/pages/how-to-use/partials/SectionC";
import VideoBlock from "@/pages/main/partials/VideoBlock";
import HeroHowToUse from "@/pages/how-to-use/partials/HeroHowToUse";
import SwapCoinBlock from "@/pages/how-to-use/partials/SwapCoinBlock.vue";


export default {
  name: "HowToUsePage",
  components: {
    SwapCoinBlock,
    HeroHowToUse,
    MainLayout,
    SectionB,
    SectionC,
    VideoBlock
  }
}
</script>

<style scoped>

</style>
