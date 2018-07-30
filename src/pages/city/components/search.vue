<template>
    <div>
        <div class="search">
            <input v-model = "keyword" type="text" class="search-input" placeholder="输入城市名或拼音"/>
        </div>
        <div class="content">
            <ul>
                <li  class="content-item border-bottom" v-for="(item,index) in list" :key="index">{{item.name}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  name: "citySearch",
  data() {
    return {
      keyword: "",
      list: [],
      timer: ""
    };
  },
  props: {
    cities: Object
  },
  watch: {
    keyword() {
      if (this.timer) {
        clearTimeout(this.timer);
      } else {
        this.timer = setTimeout(() => {
          let result = [];
          for (let i in this.cities) {
            this.cities[i].forEach(value => {
              if (
                value.spell.indexOf(this.keyword) > -1 ||
                value.name.indexOf(this.keyword) > -1
              ) {
                result.push(value);
              }
            });
          }
          this.list = result;
        }, 200);
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.search {
    height: 0.72rem;
    line-height: 0.72rem;
    background: $bgColor;
    padding: 0 0.1rem;

    .search-input {
        box-sizing: border-box;
        width: 100%;
        padding: 0 0.1rem;
        height: 0.62rem;
        line-height: 0.62rem;
        text-align: center;
        border-radius: 0.06rem;
        color: #666;
    }
}

.content {
    z-index: 1;
    overflow: hidden;
    position: absolute;
    top: 1.58rem;
    left: 0;
    right: 0;
    bottom: 0;
    background: #eee;
    .content-item{
        line-height :.62rem
        padding-left :.2rem
        background #fff
        color:#666
    }
}
</style>
