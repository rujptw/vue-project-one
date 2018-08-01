<template>
    <div>
        <home-header ></home-header>
        <home-swiper :list="swiperList"></home-swiper>
        <home-icons  :list="iconList"></home-icons>
        <home-recommend :list="recommendList"></home-recommend>
        <home-weekend :list="weekendList"></home-weekend>
    </div>
</template>

<script>
import homeHeader from "./components/home-header";
import homeSwiper from "./components/home-swiper";
import homeIcons from "./components/home-icons";
import homeRecommend from "./components/home-recommend";
import homeWeekend from "./components/home-weekend";
import axios from "axios";
import { mapState } from "vuex";
export default {
  name: "Home",
  data() {
    return {
      lastCity:'',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    };
  },
  computed:{
    ...mapState(['city'])
  },
  components: {
    //组件：引入的名字要与注册的名字一致
    homeHeader,
    homeSwiper,
    homeIcons,
    homeRecommend,
    homeWeekend
  },
  methods: {
    getHomeInfo() {
      axios
        .get("/api/index.json?city=" + this.city)
        .then(res => {
          //使用箭头函数绑定当前作用域
          if (res.data.ret && res.data.data) {
            this.swiperList = res.data.data.swiperList;
            this.iconList = res.data.data.iconList;
            this.recommendList = res.data.data.recommendList;
            this.weekendList = res.data.data.weekendList;
          }
        })
        .catch(function(err) {
          console.log(err);
        });
    }
  },
  mounted() {
    //lastCity为data里的数据，city为store里的数据
    this.lastCity =this.city;
    this.getHomeInfo();
  },
  //页面重新显示调用此生命周期钩子,切换城市以渲染不同的页面
  activated(){
   if(this.lastCity !== this.city){
     this.lastCity = this.city;
     this.getHomeInfo();
   }
  }
};
</script>

<style lang="stylus">
</style>

