<template>
    <div class="header" >
        <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
             <div class="iconfont icon-back">&#xe624;</div>
        </router-link>
        <router-link :style="opacityStyle" tag="div" to ="/" class="header-fixed" v-show="!showAbs">
        景点详情
            <div class="iconfont header-back">&#xe624;</div>
        </router-link>
    </div>
</template>

<script>
export default {
  name: "detailsHeader",
  data() {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    };
  },
  methods: {
    checkScroll() {
      let top = document.documentElement.scrollTop;
      if (top >= 51) {
        let opacity = top / 140;
        opacity >= 1 ? 1 : opacity;
        this.opacityStyle = { opacity };
        this.showAbs = false;
      } else {
        this.showAbs = true;
      }
    }
  },
  activated() {
    window.addEventListener("scroll", this.checkScroll);
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.header-abs {
    position: absolute;
    left: 0.2rem;
    top: 0.2rem;
    width: 0.8rem;
    height: 0.8rem;
    line-height: 0.8rem;
    text-align: center;
    border-radius: 0.4rem;
    background: rgba(0, 0, 0, 0.8);

    .icon-back {
        color: #fff;
        font-size: 0.35rem;
    }
}

.header-fixed {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    line-height: $headerHeight;
    height: $headerHeight;
    color: #fff;
    text-align: center;
    background: $bgColor;
    font-size: 0.32rem;

    .header-back {
        position: absolute;
        left: 0;
        top: 0;
        width: 0.6rem;
        text-align: center;
        font-size: 0.4rem;
        color: #fff;
    }
}
</style>

