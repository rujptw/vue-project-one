<template>
    <div>
        <div class="title">
        周末去哪儿
        </div>
        <ul>
            <li class="item border-bottom" v-for="(item,index) in viewRecommend" :key="index">
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
  data() {
    return {
      viewRecommend: [
        {
          imgUrl:"http://img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_200x200_2039e660.jpg",
          title: "上海迪士尼乐园",
          desc: "带你回到童年,大人小孩都爱玩"
        },
        {
          imgUrl:"http://img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_600x330_8572a930.jpg",
          title: "二灵山温泉",
          desc: "泡温泉,保持健康"
        },
        {
          imgUrl:"http://img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_600x330_8572a930.jpg",
          title: "四明山森林公园",
          desc: "接近自然呼吸新鲜空气"
        },

      ]
    };
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
    .item-img-wrapper{
        height :0;
        padding-bottom:34%;
        overflow :hidden;
        .item-img {
            width:100%;
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
