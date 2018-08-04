<template>
    <div class="list">
        <div class="item" v-for="(item,index) in list" :key="index">
            <div class="item-title border-bottom">
                <span class="item-title-icon"></span>
                {{item.title}}
            </div>
            <div class="item-children" v-if="item.children">
                <!-- 递归组件自己调用自己 -->
                <details-list :list="item.children"></details-list>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "detailsList", //可用于递归组件
  props: {
    list: Array
  }
};
</script>

<style lang="stylus" scoped>
.item-title {
    font-size: 0.32rem;
    line-height: 0.8rem;
    padding: 0 0.2rem;

    .item-title-icon {
        position: relative;
        left: 0.01rem;
        top: 0.1rem;
        display: inline-block;
        width: 0.36rem;
        height: 0.36rem;
        background: url('http://s.qunarzz.com/piao/image/touch/sight/detail.png') 0 -0.45rem no-repeat; // s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat
        margin-right: 0.1rem;
        background-size: 0.4rem;
    }
}

.item-children {
    padding: 0 0.2rem;
}
</style>
