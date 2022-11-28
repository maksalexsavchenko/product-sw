<template>
  <div class="site-footer">
    <div class="container">
      <div class="site-footer_top">
        <div class="info">
          <div class="info-logo">
            <swapuz-logo/>
          </div>
          <div class="info-logo-mob">
            <swapuz-mob/>
          </div>
          <div class="info-text">
            Do you want to make operations with Swapuz as handy as possible? Add it to bookmarks in one click!
          </div>
        </div>
        <div class="nav-menu">
          <div class="nav-links">
            <div class="nav-links-block">
              <div class="nav-links-head">Company</div>
              <a href="#" class="nav-links--item">About</a>
              <a href="#" class="nav-links--item">Contact</a>
            </div>
            <div class="nav-links-block">
              <div class="nav-links-head">Support</div>
              <a href="#" class="nav-links--item">How to use</a>
              <a href="#" class="nav-links--item">Youtube tutorial</a>
              <a href="#" class="nav-links--item">FAQ</a>
            </div>
          </div>
          <div class="nav-social">
            <div class="nav-social-title">Follow Us</div>
            <div class="nav-social-block">
              <div class="nav-social-icon">
                <facebook-icon/>
              </div>
              <div class="nav-social-icon">
                <twitter-icon/>
              </div>
              <div class="nav-social-icon">
                <telegram-icon/>
              </div>
              <div class="nav-social-icon">
                <youtube-icon/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="copyright">
        <div class="copyright-text">
          Copyright © 2020 - 2022 Swapuz!
        </div>
        <div class="copyright-links">
          <div class="copyright-link">
            Terms of Use
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
@import "../assets/styles/components/site-footer";
</style>
