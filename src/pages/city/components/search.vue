<template>
    <div>
        <div class="search">
            <input v-model = "keyword" type="text" class="search-input" placeholder="输入城市名或拼音"/>
        </div>
        <div class="content" ref="search" v-show="keyword">
            <ul>
                <li  class="content-item border-bottom" 
                v-for="(item,index) in list" 
                :key="index"
                @click="switchCity(item.name)"
                >{{item.name}}</li>
                <li  class="content-item border-bottom" v-show="noData">没有找到匹配的数据</li>
            </ul>
        </div>
    </div>
</template>

<script>
import BScroll from "better-scroll";
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
  methods: {
    switchCity(city) {
      this.$store.commit("changeCity", city);
      this.$router.push("/");
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.search);
  },
  computed: {
    noData() {
      return !this.list.length;
    }
  },
  watch: {
    keyword() {
      // 函数节流
      if (!this.keyword) {
        this.list = [];
        return this.list;
      }
      if (this.timer) {
        clearTimeout(this.timer);
      }
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

  .content-item {
    line-height: 0.62rem;
    padding-left: 0.2rem;
    background: #fff;
    color: #666;
  }
}
</style>
