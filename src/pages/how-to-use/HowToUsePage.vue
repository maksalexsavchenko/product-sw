<template>
  <MainLayout>
    <template #content>
      <how-block />
      <section-a />
      <section-b />
      <section-c />
      <video-block />
    </template>
  </MainLayout>
</template>

<script>
import MainLayout from "@/components/MainLayout";
import HowBlock from "@/pages/how-to-use/partials/HowBlock";
import SectionA from "@/pages/how-to-use/partials/SectionA";
import SectionB from "@/pages/how-to-use/partials/SectionB";
import SectionC from "@/pages/how-to-use/partials/SectionC";
import VideoBlock from "@/pages/main/partials/VideoBlock";


export default {
  name: "HowToUsePage",
   components: { MainLayout, HowBlock, SectionA, SectionB, SectionC, VideoBlock }
}
</script>

<style scoped>

</style>
