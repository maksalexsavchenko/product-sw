<template>
  <div>
    <site-header />
    <slot name="content"></slot>
    <site-footer />
  </div>
</template>

<script>
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default {
  name: "MainLayout",
  components: { SiteHeader, SiteFooter }
}
</script>

<style lang="scss">

</style>