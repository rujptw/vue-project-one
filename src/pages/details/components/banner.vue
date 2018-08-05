<template>
    <div>
        <div class="banner" @click="handleGallery">
            <img class="banner-img" :src="bannerimg"/>
            <div class="banner-desc">
                <div class="banner-title">{{sightname}}</div>
                 <div class="banner-num">
                      <span class="iconfont icon-back banner-icon">&#xe695;</span>
                       {{gallaryimgs.length}}
                 </div> 
            </div>
        </div>
        <gallery :imgs="gallaryimgs" v-show="showGallery" @close="listenClose"></gallery>
    </div>
</template>

<script>
import Gallery from "common/gallery/gallery";
export default {
  name: "Banner",
  props: {
    sightname: String,
    bannerimg: String,
    gallaryimgs: Array
  },
  data() {
    return {
      showGallery: false
    };
  },
  methods: {
    handleGallery() {
      this.showGallery = true;
    },
    listenClose() {
      this.showGallery = false;
    }
  },
  components: {
    Gallery
  }
};
</script>

<style lang="stylus">
.banner {
    position: relative;
    overflow: hidden;
    padding-bottom: 55%;
    height: 0;

    .banner-img {
        width: 100%;
    }

    .banner-desc {
        background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
        display: flex;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        color: #fff;
        line-height: 0.6rem;

        .banner-title {
            flex: 1;
            font-size: 0.32rem;
            padding: 0 0.2rem;
        }

        .banner-num {
            margin: 0.14rem 0 0 0;
            padding: 0 0.4rem;
            height: 0.32rem;
            line-height: 0.32rem;
            border-radius: 0.2rem;
            background: rgba(0, 0, 0, 0.8);
            font-size: 0.24rem;

            .banner-icon {
                font-size: 0.24rem;
            }
        }
    }
}
</style>

