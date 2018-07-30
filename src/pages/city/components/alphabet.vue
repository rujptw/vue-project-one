<template>
    <ul class="list" >
     <li class="item" 
        v-for="(item,index) in letters" 
        :key="index"
        @click="jumpToLetter"
        @touchstart="handleTouchStart"
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
      touchStatus: false
    };
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
    handleTouchMove(e) {
      if (this.touchStatus) {
        let startY = this.$refs["A"][0].offsetTop;
        let touchY = e.touches[0].clientY - 79;
        let index = Math.floor((touchY - startY) / 20);
        if (index >= 0 && index < this.letters.length) {
          this.$emit("changeArea", this.letters[index]);
        }
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

