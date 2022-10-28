<template>
  <div class="how-block container">
    <div class="how-block-header">
      How to use
    </div>
    <div class="how-block-bar">
      <div
        v-for="(item, index) in questions"
        :key="index"
        class="how-block--item"
      >
        <div>
        <div class="how-block--item_title">
          {{ item.title }}
        </div>
        <div class="how-block--item_text">
          {{ item.text }}
        </div>
        </div>
        <div class="how-block--item_img">
          <img :src="item.img" alt=""/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HowBlock",
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
@import "@/assets/styles/pages/how-to-use/how-block";
</style>