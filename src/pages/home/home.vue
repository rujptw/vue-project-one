<template>
    <div>
        <home-header></home-header>
        <swiper></swiper>
    </div>
</template>

<script>
import homeHeader from './components/home-header'
import Swiper from './components/swiper'

    export default {
        name:"Home",
        components:{
            homeHeader,
            Swiper
        }
    }
</script>

<style>

</style>

