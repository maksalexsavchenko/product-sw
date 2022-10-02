<template>
<div class="home-video">
  <div class="app-section mobile-hide">
    <div class="container">
      <div class="app-section-text">
        <div class="app-section-text-header">
          Install all new <br>
          Swapuz app
        </div>
        <div class="app-section-text-desc">
          Safely, anonymously and fast crypto swaps with 24/7 support
        </div>
        <div class="app-section-text-links">
          <a href="https://play.google.com/store/apps/details?id=com.swapuz.mobile" target="_blank">
            <img src="../../../assets/googlelink.svg" alt="">
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
  <div class="app-section-mob mobile-show">
    <div class="app-section-mob-block">
      <div class="content">
        <div class="text">
          <div class="header">
            Install all new <br>
            Swapuz app
          </div>
          <div class="desc">
            Safely, anonymously and fast crypto swaps with 24/7 support
          </div>
        </div>
        <div class="links">
          <a href="https://play.google.com/store/apps/details?id=com.swapuz.mobile" target="_blank">
            <img src="../../../assets/googlemob.svg" alt="">
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
export default {
  name: "VideoBlock",
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
.app-section {
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.02) 100%);
  min-height: 560px;
  margin: 120px 0;
  overflow: hidden;

  .container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  &-phone {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    &-bg {
      position: absolute;
      width: 772px;
      height: 600px;
      top: 0;
      left: 0;
      z-index: -1;
    }

    &-block {
      display: flex;
      justify-content: center;
      align-items: flex-start;

      .phone {
        position: relative;
        z-index: 1;
        max-width: 375.34165px;
        transform: translateX(85px);
      }
    }
  }

  &-text {
    margin: 80px 0 102px;

    &-header {
      font-weight: 900;
      font-size: 64px;
      line-height: 70px;
      color: #FFFFFF;
      margin-bottom: 24px;
    }

    &-desc {
      font-weight: 300;
      font-size: 24px;
      line-height: 32px;
      color: #EEEDEE;
      opacity: 0.7;
      margin-bottom: 86px;
      max-width: 400px;
    }

    &-links {
      display: flex;
      flex-direction: row;
      width: 450px;
      justify-content: space-between;
    }
  }

  &-mob {
    padding: 0 4%;
    margin-top: 56px;
    margin-bottom: 50px;

    &-block {
      //border-radius: 24px;
      //background: linear-gradient(121.01deg, rgba(255, 255, 255, 0.05) 0.89%, rgba(255, 255, 255, 0) 81.06%), #1B1A1C;
      //border: 1px solid rgba(255, 255, 255, 0.1);
      position: relative;
      min-height: 680px;

      .content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
        z-index: 9;

        .text {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin-bottom: 28px;

          .header {
            font-weight: 900;
            font-size: 44px;
            line-height: 44px;
            text-align: center;
            color: #FFFFFF;
            margin-bottom: 20px;
            margin-top: 24px;
          }

          .desc {
            font-weight: 300;
            font-size: 14px;
            line-height: 20px;
            text-align: center;
            color: #EEEDEE;
            max-width: 240px;
          }
        }
        .links {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          a:first-child {
            margin-bottom: 12px;
          }
        }
      }

      .bg {
        width: 100%;
        z-index: 1;

        img {
          max-width: 100%;
          width: 100%;
          border-radius: 24px;
          height: 100%;
          position: absolute;
          bottom: 0;

        }
      }
    }
  }
}
</style>
