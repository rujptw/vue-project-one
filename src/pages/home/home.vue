<template>
    <div>
        <home-header></home-header>
        <home-swiper></home-swiper>
        <home-icons></home-icons>
        <home-recommand></home-recommand>
        <home-weekend></home-weekend>
    </div>
</template>

<script>
import homeHeader from "./components/home-header";
import homeSwiper from "./components/home-swiper";
import homeIcons from "./components/home-icons";
import homeRecommand from "./components/home-recommand";
import homeWeekend from "./components/home-weekend";
export default {
  name: "Home",
  components: {
    //组件：引入的名字要与注册的名字一致
    homeHeader,
    homeSwiper,
    homeIcons,
    homeRecommand,
    homeWeekend
  }
};
</script>

<style lang="stylus">
</style>

