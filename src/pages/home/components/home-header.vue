<template>
        <div class="header">
            <div class="header-left">
                <div class="iconfont icon-back">&#xe624;</div>
            </div>
            <div class="header-input">
                <span class="iconfont">&#xe632;</span>
                输入城市/地点
            </div>
            <router-link to="/city">
                <div class="header-right">
                    {{city}}
                    <span class="iconfont arrow-icon">&#xe62d;</span>
                </div>
             </router-link>
        </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "homeHeader",
  computed: {
    //将state里的city映射为city计算属性
    ...mapState(["city"])
  }
};
</script>

<style lang="stylus" scoped>
// 样式内引入样式import要加@,在css使用@,在引入路径的情况下@要改为~@,可以使用别名缩短要写的路径（在webpack.base.conf.js里）
@import '~styles/varibles.styl';

.header {
    display: flex;
    line-height: $headerHeight; // 让子dom居中
    background: $bgColor; // 变量
    color: #fff;

    .header-left {
        width: 0.64rem;
        float: left;
        text-align: center;

        .icon-back {
            font-size: 0.4rem;
        }
    }

    .header-input {
        margin-top: 0.12rem;
        height: 0.64rem;
        line-height: 0.64rem; // line-height和height一样的话能使元素上下居中
        margin-left: 0.2rem;
        padding-left: 0.2rem;
        flex: 1; // 实现input自适应
        background: #fff;
        color: #ccc;
        border-radius: 0.1rem;
    }

    .header-right {
        color: #fff;
        min-width: 1.04rem;
        padding: 0 0.1rem;
        float: right;
        text-align: center;
        font-size: 0.24rem;

        .arrow-icon {
            font-size: 0.24rem;
        }
    }
}
</style>

