<template>
<div class="city">
    <city-header></city-header>
    <city-search></city-search>
    <city-list :hot-cities="hotCities" :cities="cities" :letter="letter"></city-list>
    <city-alphabet :cities="cities" @changeArea="letterChange"></city-alphabet>
</div>
</template>

<script>
import axios from "axios";
import cityHeader from "./components/header";
import citySearch from "./components/search";
import cityList from "./components/list";
import cityAlphabet from "./components/alphabet";

export default {
  name: "City",
  components: {
    cityHeader,
    citySearch,
    cityList,
    cityAlphabet
  },
  data() {
    return {
      cities: {},
      hotCities: [],
      letter: ""
    };
  },
  methods: {
    getCityInfo() {
      axios
        .get("/api/city.json")
        .then(res => {
          let data;
          if (res.data.data) {
            data = res.data.data;
          } else {
            data = {};
          }
          if (res.data.ret && data) {
            this.cities = data.cities;
            this.hotCities = data.hotCities;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    letterChange(v) {
      this.letter = v;
    }
  },
  mounted() {
    this.getCityInfo();
  }
};
</script>

<style lang="stylus" scoped>
</style>
