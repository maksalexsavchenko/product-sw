<template>
  <MainLayout>
    <template #content>
      <hero-how-to-use/>
      <SwapCoinBlock/>
      <!-- button -->
      <div class="container">
        <div class="button-green">
          Lets try to swap
          <img src="@/assets/img/icons/arrowForwardBlack.svg" alt="">
        </div>
      </div>
      <swap-network-block/>
      <swap-coin-block/>
      <video-block/>
    </template>
  </MainLayout>
</template>

<script>
import MainLayout from "@/components/MainLayout";
import VideoBlock from "@/pages/main/partials/VideoBlock";
import HeroHowToUse from "@/pages/how-to-use/partials/HeroHowToUse";
import SwapCoinBlock from "@/pages/how-to-use/partials/SwapCoinBlock.vue";
import SwapNetworkBlock from "@/pages/how-to-use/partials/SwapNetworkBlock.vue";


export default {
  name: "HowToUsePage",
  components: {
    SwapCoinBlock,
    HeroHowToUse,
    MainLayout,
    VideoBlock,
    SwapNetworkBlock
  }
}
</script>

<style scoped>

</style>
