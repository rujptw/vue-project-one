<template>
    <div>
        <div class="details">
            <banner :sightname="sightname" :bannerimg="bannerimg" :gallaryimgs="gallaryimgs"></banner>
            <details-header></details-header>
            <div class="content">
                <details-list :list="categorylist"></details-list>
            </div>
        </div>
    </div>
</template>

<script>
import Banner from "./components/banner.vue";
import detailsHeader from "./components/header.vue";
import detailsList from "./components/list.vue";
import axios from "axios";
export default {
  name: "Details",
  data() {
    return {
      sightname: "",
      bannerimg: "",
      categorylist: [],
      gallaryimgs: [],
      list: [
        {
          title: "成人票",
          children: [
            { title: "成人五馆", children: [{ title: "成人五馆-top" }] },
            { title: "成人三馆" }
          ]
        },
        {
          title: "学生票",
          children: [
            { title: "学生五馆", children: [{ title: "学生五馆-top" }] },
            { title: "学生三馆" }
          ]
        },
        {
          title: "儿童票",
          children: [
            { title: "儿童五馆", children: [{ title: "儿童五馆-top" }] },
            { title: "儿童三馆" }
          ]
        },
        {
          title: "特惠票",
          children: [
            { title: "特惠五馆", children: [{ title: "特惠五馆-top" }] },
            { title: "特惠三馆" }
          ]
        }
      ]
    };
  },
  components: {
    Banner,
    detailsHeader,
    detailsList
  },
  methods: {
    getDetailInfo() {
      axios
        .get("/api/detail.json?" + this.$route.params.id)
        .then(res => {
          console.log(res);
          if (res.data.ret && res.data.data) {
            let data = res.data.data;
            this.sightname = data.sightName;
            this.bannerimg = data.bannerImg;
            this.categorylist = data.categoryList;
            this.gallaryimgs = data.gallaryImgs;
            console.log("this.gallaryimgs", this.gallaryimgs);
            console.log("data", data);
          }
        })
        .catch(err => {});
    }
  },
  mounted() {
    this.getDetailInfo();
  }
};
</script>

<style lang="stylus">
.content {
  height: 50rem;
}
</style>

