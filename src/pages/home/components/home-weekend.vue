<template>
    <div>
        <div class="title">
        周末去哪儿
        </div>
        <ul v-if="showWeekend">
            <li class="item border-bottom" v-for="(item,index) in list" :key="index">
                <div class="item-img-wrapper">
                    <img class="item-img" :src="item.imgUrl" >
                </div>
                <div class="item-content">
                    <p class="item-content-title">{{item.title}}</p>
                    <p class="item-content-desc">{{item.desc}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: "homeWeekend",
  props: {
    list: Array
  },
  data() {
    return {};
  },
  computed: {
    showWeekend() {
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
    text-indent: 0.2rem;
}

.item {
    .item-img-wrapper {
        height: 0;
        padding-bottom: 37.09%;
        overflow: hidden;

        .item-img {
            width: 100%;
            display: block;
        }
    }

    .item-content {
        padding: 0.1rem;

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
    }
}
</style>
