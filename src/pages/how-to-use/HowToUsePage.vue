<template>
  <MainLayout>
    <template #content>
      <div class="container">
        <hero-how-to-use/>
        <section-a/>
        <section-b/>
        <section-c/>
        <video-block/>
      </div>
    </template>
  </MainLayout>
</template>

<script>
import MainLayout from "@/components/MainLayout";
import SectionA from "@/pages/how-to-use/partials/SwapCoinBlock";
import SectionB from "@/pages/how-to-use/partials/SectionB";
import SectionC from "@/pages/how-to-use/partials/SectionC";
import VideoBlock from "@/pages/main/partials/VideoBlock";
import HeroHowToUse from "@/pages/how-to-use/partials/HeroHowToUse";


export default {
  name: "HowToUsePage",
  components: {
    HeroHowToUse,
    MainLayout,
    SectionA,
    SectionB,
    SectionC,
    VideoBlock
  }
}
</script>

<style scoped>

</style>
