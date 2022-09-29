<template>
  <div class="advantages-block container">
    <div
        v-for="(item, index) in advantages"
        :key="index"
        class="advantages-block--item"
    >
      <div class="advantages-block--item_info">
        <div class="advantages-block--item_info-title">
          {{ item.title }}
        </div>
        <div class="advantages-block--item_info-text">
          {{ item.text }}
        </div>
      </div>
      <div class="advantages-block--item_img">
        <img :src="item.img" alt=""/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdvantagesBlock",
  data() {
    return {
      advantages: [
        {
          img: require('@/assets/img/icons/fastTransactions.svg'),
          title: "Very fast 5-10 min transactions",
          text: "Swapuz provides the best exchange rate and transparent fee structure with no hidden fee."
        },
        {
          img: require('@/assets/img/icons/exchangeLimits.svg'),
          title: "High exchange limits",
          text: "Swapuz provides the best exchange rate and transparent fee structure with no hidden fee."
        },
        {
          img: require('@/assets/img/icons/reasonableFees.svg'),
          title: "Transparent reasonable fees",
          text: "Swapuz provides the best exchange rate and transparent fee structure with no hidden fee."
        },
      ]
    }
  }
}
</script>

<style lang="scss">
@import "../../../assets/styles/pages/main/advantages-block";
</style>
