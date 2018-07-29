<template>
    <div class="swiper">
        <swiper :options="swiperOption" v-if="showSwiper">
            <!-- slides -->
            <swiper-slide v-for="item in list" :key="item.id">
                <img class="swiper-img" :src="item.imgUrl"/>
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>    
</template>

<script>
export default {
  name: "homeSwiper",
  props: {
    list: Array
  },
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination", //增加小圆点
        loop: true
      }
    };
  },
  computed: {
    showSwiper() {
      return this.list.length;
    }
  }
};
</script>

<style lang="stylus" scoped>
// 样式穿透（>>>）父组件里的样式能影响到子组件的样式，在加了scoped后
.swiper >>> .swiper-pagination-bullet-active {
    background: #fff;
}

.swiper {
    // 保持图片的宽高比
    // width:100%
    // overflow:hidden
    // height:0px
    // padding-bottom:31.25%
    background: #ccc; // 图片未显示显示灰色背景

    .swiper-img {
        width: 100%; // 让轮播图片正常显示
    }
}
</style>
