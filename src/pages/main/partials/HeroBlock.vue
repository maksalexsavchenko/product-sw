<template>
  <div class="hero-block container">
    <div class="hero-block_text">
      <div class="head-text">
        Simple <br>
        exchange <b>5000+</b> <br>
        cryptocurrencies
      </div>
      <div class="text-desc">
        Safely, anonymously and with no limits
        Fast crypto swaps, free of custody
      </div>
    </div>
    <div class="hero-block_exchange">
      <div class="exchange-main_block">
        <div class="buttons">
          <div
              class="buttons--item exchange"
              :class="{'buttons--item_active' : currentTab === 'exchange'}"
              @click="currentTab = 'exchange'"
          >
            Exchange
          </div>
          <div
             class="buttons--item network"
             :class="{'buttons--item_active' : currentTab === 'network'}"
             @click="currentTab = 'network'"
          >
            Swap networks
          </div>
        </div>
        <div class="inputs">
            <div v-if="currentTab === 'exchange'" class="inputs-exchange">
              <div class="fixed-rate">
                <FixedRateIcon/>
                <div class="fixed-rate_text">
                  Fixed rate
                </div>
                <InfoIcon/>
              </div>
              <div class="main_button">
                Exchange now
              </div>
            </div>
          <div v-else class="inputs-networks">
            Swap networks
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FixedRateIcon from "@/assets/img/icons/FixedRateIcon";
import InfoIcon from "@/assets/img/icons/InfoIcon";
export default {
  name: "HeroBlock",
  components: {InfoIcon, FixedRateIcon},
  data() {
    return {
      currentTab: 'exchange'
    }
  }
}
</script>

<style lang="scss">
@import '../../../assets/styles/pages/main/hero-block';
</style>
