<template>
<div class="header container">
  <router-link :to="{ name: 'How to use'}"> How to use</router-link>
  <router-link :to="{ name: 'How to use'}"> Contacts</router-link>
</div>
</template>

<script>
export default {
  name: "SiteHeader"
}
</script>

<style lang="scss">
.header {
  padding: 20px 0;
}
a {
  color:  white;
}
</style>
