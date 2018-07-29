<template>
<div class="city">
    <city-header></city-header>
    <city-search></city-search>
</div>
</template>

<script>
import cityHeader from "./components/header";
import citySearch from "./components/search";
export default {
  name: "City",
  components: {
    cityHeader,
    citySearch
  }
};
</script>

<style lang="stylus" scoped>
</style>
