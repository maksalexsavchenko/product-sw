<template>
  <div class="how-to-use">
    <div class="how-to-use-header">
      How to use
    </div>
    <div class="how-to-use-plates">
      <div
          v-for="(item, index) in questions"
          :key="index"
          class="how-to-use-plates--item"
      >
        <div class="desc">
          <div class="desc-title">
            {{ item.title }}
          </div>
          <div class="desc-text">
            {{ item.text }}
          </div>
        </div>
        <div class="img">
          <img :src="item.img" alt=""/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeroHowToUse",
  data() {
    return {
      questions: [
        {
          title: "How to swap coins",
          text: "Simple swap in single network and swap between network",
          img: require('@/assets/img/how-icons/autorenew.svg')
        },
        {
          title: "Swap the networks of",
          text: "Simple swap in single network and swap between network",
          img: require('@/assets/img/how-icons/rotateRight.svg')
        },
        {
          title: "Errors and fuckups",
          text: "Simple swap in single network and swap between network",
          img: require('@/assets/img/how-icons/dangerous.svg')
        },
        {
          title: "Support",
          text: "Simple swap in single network and swap between network and tarampam pam",
          img: require('@/assets/img/how-icons/supportAgent.svg')
        }
      ]
    }
  }
}
</script>

<style lang="scss">
@import "../../../assets/styles/pages/how-to-use/how-block";
</style>
