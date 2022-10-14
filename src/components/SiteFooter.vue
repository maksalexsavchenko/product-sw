<template>
  <div class="site-footer">
    <div class="container">
        <div class="site-footer-top">
      <div class="face">
          <div class="face-logo">
            <swapuz-logo />
          </div>
          <div class="face-logo-mob">
            <swapuz-mob />
          </div>
          <div class="face-text">
            Do you want to make operations with Swapuz as handy as possibl? Add it to bookmarks in one click!
          </div>
      </div>
      <div class="nav">
        <div class="li">
          <div class="li-block">
            <div class="li-head">Company</div>
            <div class="li-link">About</div>
            <div class="li-link">Contact</div>
          </div>
          <div class="li-block">
            <div class="li-head">Support</div>
            <div class="li-link">How to use</div>
            <div class="li-link">Youtube tutorial</div>
            <div class="li-link">FAQ</div>
          </div>
        </div>
        <div class="social">
          <div class="social-hd">Follow Us</div>
          <div class="social-bar">
            <div class="social-icon"><facebook-icon /></div>
            <div class="social-icon"><twitter-icon /></div>
            <div class="social-icon"><telegram-icon /></div>
            <div class="social-icon"><youtube-icon /></div>
          </div>
        </div>
      </div>
        </div>
      <div class="copyright">
        <div class="copyright-text">
          Copyright © 2020 - 2021 Swapuz!
        </div>
        <div class="copyright-links">
          <div class="copyright-link">
            Term to Use
          </div>
          <div class="copyright-link">
            Privacy Policy
          </div>
        </div>
      </div> 
    </div>
  </div>
</template>

<script>
import SwapuzLogo from "@/assets/SwapuzLogo";
import SwapuzMob from "@/assets/SwapuzMob";
import FacebookIcon from "@/assets/social/FacebookIcon";
import TwitterIcon from "@/assets/social/TwitterIcon";
import TelegramIcon from "@/assets/social/TelegramIcon";
import YoutubeIcon from "@/assets/social/YoutubeIcon";

export default {
  name: "SiteFooter",
  components: {SwapuzLogo, SwapuzMob, FacebookIcon, TwitterIcon, TelegramIcon, YoutubeIcon}
}
</script>

<style lang="scss">
@import "@/assets/styles/components/site-footer"
</style>