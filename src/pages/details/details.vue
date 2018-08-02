<template>
    <div>
        <div class="details">
            <banner></banner>
            {{this.$route.params.id}}
        </div>
    </div>
</template>

<script>
    import Banner from "./components/banner.vue";
    export default{
        name:"Details",
        components:{
            Banner
        }
    }
</script>

<style lang="stylus">

</style>

