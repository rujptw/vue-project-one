<template>
    <div class="icons">
        <div class="icon">
            <div class="icon-img">
            <img class="icon-img-content" src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png"/>
            </div>
            <p class="icon-desc">热门景点</p>
            </div>
        </div>
    </div>    
</template>
    
<script>
    export default {
        name:"homeIcons"
    }
</script>

<style lang="stylus">
@import '~styles/varibles.styl'
.icons
    width:100%
    height:0
    padding-bottom :50%//高度为宽度的一半,坐占位用
    .icon
        height:0
        position :relative
        overflow:hidden
        width:25%
        height :0
        padding-bottom :25%//高度宽度相同
        .icon-desc{
            position :absolute
            left:0
            right:0
            bottom:0
            height:0.44rem
            line-height :0.44rem
            text-align:center
            color:$textColor

        }
        .icon-img
            position :absolute
            top:0
            left:0
            right:0
            bottom:0.44rem
            box-sizing :border-box
            .icon-img-content
                display :block
                height:100%
                margin :0 auto
</style>

