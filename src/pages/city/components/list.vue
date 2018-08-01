<template>
    <div class="list" ref="wrapper">
     <div>
        <div class="area">
            <div class="title border-topbottom">当前城市</div>
            <div class="button-list">
                <div class="button-wrapper">
                    <div class="button">{{currentCity}}</div> 
                </div>
            </div>
        </div>
        <div class="area">
            <div class="title border-topbottom">热门城市</div>
            <div class="button-list">
                <div class="button-wrapper" v-for="(item,index) in hotCities" :key="index" @click="switchCity(item.name)">
                    <div class="button" >{{item.name}}</div> 
                </div>
            </div>
        </div>
        <div class="area" v-for="(item,key) in cities" :key="key" :ref="key">
            <div class="title border-topbottom">{{key}}</div>
            <div class="item-list" v-for="(minitem,index) in item" :key="index"  @click="switchCity(minitem.name)">
                <div class="item border-bottom">{{minitem.name}}</div>
            </div>
        </div>
     </div>
    </div>    
</template>

<script>
import BScroll from "better-scroll";
import { mapState, mapMutations } from "vuex";
export default {
  name: "cityList",
  props: {
    hotCities: Array,
    cities: Object,
    letter: String
  },
  computed: {
    //将state里的city映射为currentCity计算属性
    ...mapState({
      currentCity: "city"
    })
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper); //使用better-scroll组件
  },
  watch: {
    letter() {
      if (this.letter) {
        let element = this.$refs[this.letter][0];
        this.scroll.scrollToElement(element);
      }
    }
  },
  methods: {
    switchCity(city) {
      this.changeCity(city);
      this.$router.push("/");
    },
    ...mapMutations(["changeCity"])
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.border-topbottom {
    &:before {
        border-color: #ccc;
    }

    &:after {
        border-color: #ccc;
    }
}

.border-bottom {
    &:before {
        border-color: #ccc;
    }
}

.list {
    position: absolute;
    overflow: hidden;
    top: 1.58rem;
    left: 0;
    right: 0;
    bottom: 0;

    .title {
        line-height: 0.54rem;
        padding-left: 0.2rem;
        background: #ccc;
        font-size: 0.26rem;
        color: #666;
    }

    .button-list {
        padding: 0.1rem 0.6rem 0.1rem 0.1rem;
        overflow: hidden;

        .button-wrapper {
            float: left;
            width: 33.33%;

            .button {
                margin: 0.1rem;
                padding: 0.1rem 0;
                text-align: center;
                border: 0.02rem solid #ccc;
                border-radius: 0.06rem;
            }
        }
    }

    .item-list {
        .item {
            line-height: 0.76rem;
            padding-left: 0.2rem;
        }
    }
}
</style>
