<template>
    <div>
        <home-header></home-header>
        <home-swiper></home-swiper>
    </div>
</template>

<script>
import homeHeader from './components/home-header'
import homeSwiper from './components/home-swiper'

    export default {
        name:"Home",
        components:{
            //组件：引入的名字要与注册的名字一致
            homeHeader,
            homeSwiper,
        }
    }
</script>

<style lang="stylus">

</style>

