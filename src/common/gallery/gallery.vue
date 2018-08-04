<template>
    <div>
        <div class="gallery" @click="handleClose">
            <div class="wrapper">
        <swiper :options="swiperOption">
            <!-- slides -->
            <swiper-slide v-for="(item,index) in imgs" :key="index">
                <img class="swiper-img" :src="item"/>
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "Gallery",
  props:{
      imgs:Array,
      dafault(){
          return []
      }
  },
  data(){
      return {
          swiperOption:{
              pagination:".swiper-pagination",
              //分页样式
              paginationType:"fraction",
              //观察到自己或者父级元素dom变化时，自我刷新一次，解决宽度计算的问题
              observer:true,
              observeParents:true
          }
      }
  },
  methods:{
      handleClose(){
          this.$emit("close")
      }
        }
};
</script>

<style lang="stylus" scoped>
.gallery >>> .swiper-container{
    overflow inherit
}
.gallery {
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 99;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #000;

    .wrapper {
        background: #fff;
        height:0;
        width:100%;
        padding-bottom:66.6%;
        .swiper-img{
            width:100%;
            // height:100%
        }
        .swiper-pagination{
            color:#fff;
            bottom: -1rem;
        }
    }
}
</style>
