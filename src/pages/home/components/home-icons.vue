<template>
    <div class="icons">
        <swiper :options="swiperOption" >
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
        name:"homeIcons",
        data(){
            return {
                swiperOption:{},
                imgurls:[
                    {id:"01",imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",desc:"景点门票"},
                    {id:"02",imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/8c/47630407f70e8302.png",desc:"影视基地"},
                    {id:"03",imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/96/c70f1e85ae4a4f02.png",desc:"自然风光"},
                    {id:"04",imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/75/eca3ce656c886502.png",desc:"漂流"},
                    {id:"05",imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",desc:"景点门票"},
                    {id:"06",imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/8c/47630407f70e8302.png",desc:"影视基地"},
                    {id:"07",imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/96/c70f1e85ae4a4f02.png",desc:"自然风光"},
                    {id:"08",imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/75/eca3ce656c886502.png",desc:"漂流"},
                    {id:"09",imgUrl:"http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png",desc:"一日游"},
                    ]
            }
        },
        computed:{
            //做分页效果
            pages (){
                const pages = [];
                this.imgurls.forEach((item,index)=>{
                    const page = Math.floor(index/8);
                    if(!pages[page]){
                        pages[page] = []
                    }
                    pages[page].push(item)
                })
                return pages
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    @import '~styles/mixins.styl'
    .icons >>> .swiper-container-horizontal
        // width:100%
        height:0
        padding-bottom:50%
        // oveflow: hidden//高度为宽度的一半,坐占位用
    .icon
        height:0
        float:left
        position :relative
        overflow:hidden
        width:25%
        height :0
        padding-bottom :25%//高度宽度相同
        .icon-desc
            position :absolute
            left:0
            right:0
            bottom:0
            height:0.44rem
            line-height :0.44rem
            text-align:center
            color:$textColor
            ellipsis()//stylus的函数
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

