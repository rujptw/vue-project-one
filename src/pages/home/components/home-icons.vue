<template>
    <div class="icons">
        <swiper :options="swiperOption" v-if="showIcons">
        <swiper-slide v-for="(page,index) in pages" :key="index">
        <div class="icon" v-for="item in page" :key="item.id">
            <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl"/>
            </div>
            <p class="icon-desc">{{item.desc}}</p>
        </div>
        </swiper-slide>
        </swiper>
    </div>  
</template>
    
<script>
export default {
  name: "homeIcons",
  props: {
    list: Array
  },
  data() {
    return {
      swiperOption: {
        autoplay: false
      }
    };
  },
  computed: {
    //做分页效果
    pages() {
      const pages = [];
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8);
        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(item);
      });
      return pages;
    },
    showIcons() {
      return this.list.length;
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';
@import '~styles/mixins.styl';

.icons >>> .swiper-container-horizontal {
  // width:100%
  height: 0;
  padding-bottom: 50%;
  // oveflow: hidden//高度为宽度的一半,坐占位用
}

.icons {
  margin-top: 0.1rem;

  .icon {
    height: 0;
    float: left;
    position: relative;
    overflow: hidden;
    width: 25%;
    height: 0;
    padding-bottom: 25%; // 高度宽度相同

    .icon-desc {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 0.44rem;
      line-height: 0.44rem;
      text-align: center;
      color: $textColor;
      ellipsis(); // stylus的函数
    }

    .icon-img {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0.44rem;
      box-sizing: border-box;

      .icon-img-content {
        display: block;
        height: 100%;
        margin: 0 auto;
      }
    }
  }
}
</style>

