<template>
<div class="city">
    <city-header></city-header>
    <city-search></city-search>
    <city-list></city-list>
</div>
</template>

<script>
import cityHeader from "./components/header";
import citySearch from "./components/search";
import cityList from "./components/list";
export default {
  name: "City",
  components: {
    cityHeader,
    citySearch,
    cityList
  }
};
</script>

<style lang="stylus" scoped>
</style>
