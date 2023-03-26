<template>
  <div class="flex flex-col gap-3 md:gap-0">
    <img
      src="/assets/images/main-image.jpeg"
      class="w-full aspect-video object-cover border border-white my-3"
    />
    <div class="flex flex-col md:flex-row my-3">
      <div
        class="w-full md:w-1/4 flex md:flex-col justify-between font-bold items-start gap-1"
      >
        <div
          id="introButtonOverlay"
          class="absolute top-0 left-0 duration-300 opacity-0"
        >
          <div
            class="absolute top-0 -left-2 md:-left-3 h-3 bg-red-500 w-[1px]"
          ></div>
          <div
            class="absolute top-0 -left-2 md:-left-3 w-3 bg-red-500 h-[1px]"
          ></div>
          <div
            class="absolute bottom-0 -right-2 md:-right-3 h-3 bg-red-500 w-[1px]"
          ></div>
          <div
            class="absolute bottom-0 -right-2 md:-right-3 w-3 bg-red-500 h-[1px]"
          ></div>
        </div>
        <IntroButton
          v-for="(item, i) in introContents"
          :key="i"
          :button-text="item.buttonText"
          :index="i"
          :currentIndex="currentIndex"
          class="intro-button"
          @update-index="updateIndex"
        />
      </div>
      <div class="w-full md:w-3/4 text-start md:ml-10 text-xl mt-6 md:mt-0">
        <p id="introContent"></p>
      </div>
    </div>
    <div class="flex flex-col md:flex-row justify-between my-3">
      <div
        class="rounded-full h-5 w-32 border-red-500 border decoBar flex overflow-clip self-center"
      >
        <div
          v-for="(item, i) in decoBarStatus[currentIndex]"
          :key="i"
          class="border-r border-red-500 h-full duration-300"
          :style="{ width: item }"
        ></div>
      </div>
      <div class="text-center my-8 md:mt-0">
        <img
          class="w-12 aspect-square object-contain ml-auto mr-auto md:mr-0 mb-1"
          src="/assets/images/Asset 1 copy.png"
        />
        <span class="text-xs">World Wide Web</span>
      </div>
    </div>
  </div>
</template>
<script>
import { i18n } from "@/localization";
import IntroButton from "../IntroButton.vue";

export default {
  name: "HomeView",
  components: {
    IntroButton,
  },
  props: {},
  data() {
    return {
      introContents: [
        {
          buttonText: i18n.global.t("home.commitment.button"),
          content: i18n.global.t("home.commitment.content"),
        },
        {
          buttonText: i18n.global.t("home.justForYou.button"),
          content: i18n.global.t("home.justForYou.content"),
        },
        {
          buttonText: i18n.global.t("home.seo.button"),
          content: i18n.global.t("home.seo.content"),
        },
        {
          buttonText: i18n.global.t("home.innovation.button"),
          content: i18n.global.t("home.innovation.content"),
        },
      ],
      decoBarStatus: [
        {
          0: "10px",
          1: "40px",
          2: "20px",
          3: "8px",
          4: "30px",
        },
        {
          0: "5px",
          1: "10px",
          2: "40px",
          3: "7x",
          4: "50px",
        },
        {
          0: "30px",
          1: "4px",
          2: "7px",
          3: "17x",
          4: "30px",
        },
        {
          0: "15px",
          1: "25px",
          2: "7px",
          3: "25x",
          4: "50px",
        },
      ],
      currentIndex: 0,
    };
  },
  methods: {
    indexButtonClicked(e) {
      console.log(e);
      let index = e.target.dataset.index;
      this.currentIndex = this.introContents[index];
    },
    updateIndex(index, offsetHeight, offsetWidth, offsetX, offsetY) {
      this.currentIndex = index;
      var overlay = document.getElementById("introButtonOverlay");
      overlay.classList.remove("opacity-0");

      overlay.style.height = offsetHeight + "px";
      overlay.style.width = offsetWidth + "px";
      overlay.style.top = offsetY + "px";
      overlay.style.left = offsetX + "px";

      document.getElementById("introContent").innerHTML = "";
      this.animateText();
    },
    animateText() {
      var introContent = document.getElementById("introContent");

      this.tick(0, introContent, this.currentIndex, 50);
    },
    tick(charIndex, elem, curIndex, interval) {
      if (
        charIndex == this.introContents[curIndex].content.length ||
        curIndex != this.currentIndex
      ) {
        return;
      }
      elem.innerHTML += this.introContents[curIndex].content[charIndex];
      this.highlightText(elem);

      setTimeout(() => {
        this.tick(charIndex + 1, elem, curIndex, interval);
      }, interval);
    },
    highlightText(elem) {
      let reg = /\*(.*)\*/;
      elem.innerHTML = elem.innerHTML.replace(
        reg,
        '<span class="text-highlight">$1</span>'
      );
    },
    initText() {
      let firstButton = document.querySelector(".intro-button");
      this.updateIndex(
        0,
        firstButton.offsetHeight,
        firstButton.offsetWidth,
        firstButton.offsetLeft,
        firstButton.offsetTop
      );
    },
  },
  mounted() {
    this.initText();
  },
};
</script>
<style>
#introContent::after {
  content: "|";
  animation: blinkTextCursor 500ms infinite normal;
}
@keyframes blinkTextCursor {
  from {
    color: rgba(255, 255, 255, 0.75);
  }
  to {
    color: transparent;
  }
}

.text-highlight {
  border-bottom: 1px red solid;
}

.text-highlight::before {
  content: "■";
  margin-right: 3px;
  color: red;
}
</style>
