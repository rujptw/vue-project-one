<template>
    <div>
        <div class="title">
        热销推荐
        </div>
        <ul v-if="showRecommend">
            <router-link
                tag="li"
                class="item border-bottom" 
                v-for="(item,index) in list" 
                :key="index"
                :to='"/details/" + item.id'>
                <div class="item-img-wrapper">
                    <img class="item-img" :src="item.imgUrl" >
                </div>
                <div class="item-content">
                    <p class="item-content-title">{{item.title}}</p>
                    <p class="item-content-desc">{{item.desc}}</p>
                    <button class="item-button">查看详情</button>
                </div>
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {
  name: "homeRecommand",
  props: {
    list: Array
  },
  data() {
    return {};
  },
  computed: {
    showRecommend() {
      return this.list.length;
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl';

.title {
    line-height: 0.8rem;
    background: #ccc;
    margin-top: 0.2rem;
    text-indent: 0.2rem;
}

.item {
    overflow: hidden;
    height: 1.9rem;
    display: flex;

    .item-img-wrapper {
        .item-img {
            width: 1.7rem;
            height: 1.7rem;
            padding: 0.1rem;
            display: block;
        }
    }

    .item-content {
        flex: 1; // 设置此值能够自动撑开内容
        padding: 0.1rem;
        min-width: 0; // 确保出现省略号效果

        .item-content-title {
            line-height: 0.54rem;
            font-size: 0.32rem;
            ellipsis();
        }

        .item-content-desc {
            line-height: 0.4rem;
            color: #ccc;
            ellipsis();
        }

        .item-button {
            line-height: 0.44rem;
            margin: 0.16rem;
            background: orange;
            color: #fff;
            padding: 0 0.2rem;
            border-radius: 0.06rem;
        }
    }
}
</style>
