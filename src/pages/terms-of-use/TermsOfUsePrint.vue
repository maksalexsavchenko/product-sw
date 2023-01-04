<template>
  <div class="terms-use-print">
    <div class="container">
      <div class="button-layout">
        <div class="button-layout-text">
          <div class="button-layout-text_print">
            Print
          </div>
        </div>
        <img src="@/assets/img/icons/arrowForwardWhite.svg" alt="">
      </div>
      <div class="logo-header">
        <img src="@/assets/img/swapuzLogoBlack.svg" alt="">
      </div>
      <text-block />
      <div class="logo-footer">
        <img src="@/assets/img/swapuzLogoBlack.svg" alt="">
        <div class="logo-footer_subtitle">
          Copyright © 2020 - 2023 Swapuz!
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TextBlock from "@/pages/terms-of-use/partials/TextBlock";

export default {
  name: "TermsOfUsePrint",
  components: { TextBlock }
}
</script>

<style lang="scss">
@import "@/assets/styles/pages/terms-of-use/terms-of-use-global";
</style>