<template>
    <div>
        <div class="details">
            <banner></banner>
            <details-header></details-header>
            <div class="content">
                <details-list :list="list"></details-list>
            </div>
        </div>
    </div>
</template>

<script>
import Banner from "./components/banner.vue";
import detailsHeader from "./components/header.vue";
import detailsList from "./components/list.vue";
export default {
  name: "Details",
  data() {
    return {
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
  }
};
</script>

<style lang="stylus">
.content {
    height: 50rem;
}
</style>

