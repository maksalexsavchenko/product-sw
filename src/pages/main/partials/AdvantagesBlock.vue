<template>
  <div class="advantages-block container">
    <div
      v-for="(item, index) in advantages"
      :key="index"
      class="advantages-block--item"
    >
      <img :src="item.img" alt="" />
      <h1>{{ item.title }}</h1>
      <p>{{ item.text }}</p>
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
          img: require('@/assets/img/icons/iconOne.png'),
          title: "Very fast 5-10 min transactions",
          text: "Swapuz provides the best exchange rate and transparent fee structure with no hidden fee."
        },
        {
          img: require('@/assets/img/icons/iconTwo.png'),
          title: "High exchange limits",
          text: "Swapuz provides the best exchange rate and transparent fee structure with no hidden fee."
        },
        {
          img: require('@/assets/img/icons/iconThree.png'),
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
