<template>
  <MainLayout>
    <template #content>
      <div class="terms-use-page container">
        <router-link :to="{ name: 'Print'}">
          <div class="button-print">
            <img src="@/assets/img/icons/printWhite.svg" alt="">
          </div>
        </router-link>
        <text-block />
        <div class="buttons-block">
          <div class="button-layout">
            <img src="@/assets/img/icons/supportAgentWhite.svg" alt="">
            <div class="button-layout-text">
              <div class="button-layout-text_support">
                Support
              </div>
            </div>
          </div>
          <router-link :to="{ name: 'home'}">
            <div class="button-layout">
              <div class="button-layout-text">
                <div class="button-layout-text_print">
                  Back to main
                </div>
              </div>
              <img src="@/assets/img/icons/arrowForwardWhite.svg" alt="">
            </div>
          </router-link>
        </div>
      </div>
    </template>
  </MainLayout>
</template>

<script>
import MainLayout from "@/components/MainLayout";
import TextBlock from "@/pages/terms-of-use/partials/TextBlock";


export default {
  name: "TermsOfUsePage",
  components: { MainLayout, TextBlock }
}
</script>

<style lang="scss">
@import "@/assets/styles/pages/terms-of-use/terms-of-use-global";
</style>