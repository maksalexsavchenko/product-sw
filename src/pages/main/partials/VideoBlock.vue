<template>
<div class="home-video">
  <div class="app-section">
    <div class="container">
      <div class="app-section-text">
        <div class="app-section-text-updated">
          Updated
        </div>
        <div class="app-section-text-header">
          Install all new <br>
          Swapuz <b>app</b>
        </div>
        <div class="app-section-text-desc">
          Safely, anonymously and fast crypto swaps with 24/7 support
        </div>
        <div class="app-section-text-links">
          <a href="https://play.google.com/store/apps/details?id=com.swapuz.mobile" target="_blank">
            <google-link />
          </a>
          <a href="#" target="_blank">
            <apple-link />
          </a>
        </div>
      </div>
      <div class="app-section-phone">
        <img class="app-section-phone-bg" src="../../../assets/popup/popupbglight.png" alt="">
        <div class="app-section-phone-block">
          <video ref="videoPopup" width="560" height="560" muted="muted">
            <source
                src="../../../assets/popup/originalvideo.mp4"
                type='video/mp4; codecs="hvc1"'>
            <source
                src="../../../assets/popup/videotest.webm"
                type="video/webm">
          </video>
        </div>
      </div>
    </div>
  </div>
  <div class="app-section-mob">
    <div class="app-section-mob-block">
      <div class="content">
        <div class="content-updated">
          Update
        </div>
        <div class="content-header">
          Install all new <br>
          Swapuz <b>app</b>
        </div>
        <div class="content-desc">
          Safely, anonymously and fast crypto swaps with 24/7 support
        </div>
        <div class="content-links">
          <a href="https://play.google.com/store/apps/details?id=com.swapuz.mobile" target="_blank">
            <google-mob />
          </a>
          <a class="space" href="#" target="_blank">
            <apple-mob />
          </a>
        </div>
      </div>
      <div class="bg">
        <img
          srcset="../../../assets/banner/bannerbg2x.png 1x,
          ../../../assets/banner/bannerbg3x.png 2x"
          src="../../../assets/banner/bannerbg2x.png">
      </div>
    </div>
  </div>
</div>
</template>

<script>
import GoogleLink from "@/assets/GoogleLink.vue";
import AppleLink from "@/assets/AppleLink.vue";
import GoogleMob from "@/assets/GoogleMob.vue";
import AppleMob from "@/assets/AppleMob.vue";
export default {
  name: "VideoBlock",
  components: { GoogleLink, AppleLink, GoogleMob, AppleMob },
  data() {
    return {
      isMobDev: false,
      animateHandler: true,
    }
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("resize", this.mobileHandler);
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  mounted() {
    this.mobileHandler();
  },
  methods: {
    isMobile() {
      return window.screen.width < 760;
    },
    mobileHandler() {
      this.isMobDev = window.screen.width < 760;
    },
    handleScroll() {
      if (window.scrollY > 400 && !this.isMobDev && this.animateHandler === true) {
        this.$refs.videoPopup.play();
        this.animateHandler = false;
      }
    },
  }
}
</script>

<style lang="scss">
@import "../../../assets/styles/pages/main/video-block";
</style>
