<template>
    <div>
        <div class="banner">
            <img class="banner-img" src="https://img1.qunarzz.com/p/tts2/1703/5c/d01c530e3e8ab002.jpg_r_640x420x90_08fb7f5b.jpg"/>
            <div class="banner-desc">
                <div class="banner-title">产品编号 434335789</div>
                 <div class="banner-num">
                      <span class="iconfont icon-back banner-icon">&#xe695;</span>
                       5
                 </div>
                
            </div>
        </div>
        <gallery></gallery>
    </div>
</template>

<script>
import Gallery from "common/gallery/gallery";
export default {
  name: "Banner",
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

