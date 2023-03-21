<template>
  <button
    @click="onClick($event)"
    :class="[
      index == currentIndex
        ? 'text-[#ea1818]'
        : 'text-[#717171] hover:text-[#d9d9d9]',
    ]"
    class="text-start w-fit text-md md:text-2xl"
  ><span>{{ buttonText }}</span>
    
  </button>
</template>
<script>
export default {
  name: "IntroButton",
  props: {
    buttonText: String,
    index: Number,
    currentIndex: Number,
  },
  methods: {
    onClick(e) {
      console.log(
        e.target.offsetHeight,
        e.target.offsetWidth,
        e.target.offsetLeft,
        e.target.offsetTop
      );
      this.$emit(
        "updateIndex",
        this.index,
        e.target.offsetHeight,
        e.target.offsetWidth,
        e.target.offsetLeft,
        e.target.offsetTop
      );
    },
  }
};
</script>
<style></style>
