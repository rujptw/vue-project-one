<template>
    <div>
        <div class="details">
            <banner></banner>
            <details-header></details-header>
            <div class="content"></div>
        </div>
    </div>
</template>

<script>
import Banner from "./components/banner.vue";
import detailsHeader from "./components/header.vue";
export default {
  name: "Details",
  components: {
    Banner,
    detailsHeader
  }
};
</script>

<style lang="stylus">
.content {
    height: 50rem;
}
</style>

