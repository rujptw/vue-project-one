<template>
    <div class="swiper">
        <swiper :options="swiperOption">
            <!-- slides -->
            <swiper-slide v-for="item in imgUrls" :key="item.id">
                <img class="swiper-img" :src="item.url"/>
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>    
</template>

<script>
export default {
  name: "homeSwiper",
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination", //增加小圆点
        loop: true
      },
      imgUrls: [
        {
          id: "001",
          url:
            "https://source.qunarzz.com/site/images/wap/home/recommend/iphoneplus/dujia_shuqi_banner_20180710.jpg"
        },
        {
          id: "002",
          url:
            "https://source.qunarzz.com/site/images/wap/home/recommend/iphoneplus/anquan_20180716.png"
        }
      ]
    };
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
