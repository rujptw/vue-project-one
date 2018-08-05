<template>
    <ul class="list" >
     <li class="item" 
        v-for="(item,index) in letters" 
        :key="index"
        @click="jumpToLetter"
        @touchstart.prevent="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
        :ref="item">
        {{item}}
     </li>
    </ul>
</template>

<script>
export default {
  name: "cityAlphabet",
  props: {
    cities: Object
  },
  data() {
    return {
      touchStatus: false,
      startY: 0,
      timer: ""
    };
  },
  /**数据变化调用此生命周期函数，用于性能优化 */
  updated() {
    this.startY = this.$refs["A"][0].offsetTop;
  },
  computed: {
    letters() {
      let letters = [];
      for (var i in this.cities) {
        letters.push(i);
      }
      return letters;
    }
  },
  methods: {
    jumpToLetter(e) {
      this.$emit("changeArea", e.target.innerText);
    },
    handleTouchStart() {
      this.touchStatus = true;
    },
    handleTouchEnd() {
      this.touchStatus = false;
    },
    /**函数节流,减少move的触发频率，以提高性能 */
    handleTouchMove(e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer);
        }
        this.timer = setTimeout(() => {
          let touchY = e.touches[0].clientY - 79;
          let index = Math.floor((touchY - this.startY) / 20);
          if (index >= 0 && index < this.letters.length) {
            this.$emit("changeArea", this.letters[index]);
          }
        }, 20);
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.list {
  position: absolute;
  right: 0;
  top: 1.58rem;
  bottom: 0;
  width: 0.4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .item {
    text-align: center;
    line-height: 0.4rem;
    color: $bgColor;
  }
}
</style>

