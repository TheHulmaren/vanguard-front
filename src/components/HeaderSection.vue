<template>
  <header
    class="fixed w-screen md:w-2/3 lg:w-[calc(1024px*2/3)] top-0 left-0 md:left-0 lg:left-[calc(50vw-512px)] px-4 py-2 z-40 border-b-2 border-transparent duration-500 ease-in-out"
    :class="{ scrolled: sidebarOpened || isScrolled }"
  >
    <div class="flex items-center">
      <a href="/"
        ><h1
          class="text-3xl md:text-6xl font-bold my-3 duration-300 ease-in-out"
        >
          {{ $t("header.title") }}
        </h1>
      </a>
      <div class="grow"></div>
      <button
        @click="moreButtonPressed"
        id="moreButton"
        class="z-40 w-7 h-7 relative md:hidden"
        :class="{
          'button-dark': sidebarOpened || isScrolled,
          spin: sidebarOpened,
        }"
      >
        <div class="stick vertical"></div>
        <div class="stick horizontal"></div>
      </button>
    </div>
    <div
      id="subtitleSection"
      class="flex items-center"
      :class="{ 'opacity-0': sidebarOpened }"
    >
      <div><img src="/assets/images/rings.png" class="w-5" /></div>
      <h2 id="subtitleText" class="text-lg">Web Artistry</h2>
    </div>
  </header>
</template>
<script>
export default {
  name: "HeaderSection",
  props: {
    sidebarOpened: Boolean,
  },
  data() {
    return {
      isScrolled: false,
    };
  },
  methods: {
    initHeader() {
      document.addEventListener("scroll", () => {
        let scrollTop =
          document.documentElement.scrollTop || document.body.scrollTop;
        if (scrollTop > 0) {
          this.isScrolled = true;
          return;
        } else if (!this.sidebarOpened) {
          this.isScrolled = false;
          return;
        }
      });
    },
    moreButtonPressed() {
      this.$emit("toggleSidebar");
    },
  },
  mounted() {
    this.initHeader();
  },
};
</script>
<style>
header.scrolled {
  border-color: #ef4444;
  background-color: #ef4444;
}

header.scrolled h1 {
  font-size: larger;
  color: #1a1a1a;
}

#subtitleSection {
  position: absolute;
  width: 100%;
  bottom: -20px;
  transition: 300ms;
  transition-timing-function: ease-in-out;
}

header.scrolled #subtitleSection {
  width: fit-content;
  bottom: 0;
  transform: translateY(50%) translateX(1rem);
  font-size: large;
  line-height: 1rem;
}

#subtitleText {
  background-color: transparent;
  border-color: #1a1a1a;
  border-radius: 20px;
  transition: 300ms;
  transition-timing-function: ease-in-out;
}

header.scrolled #subtitleText {
  background-color: #1a1a1a;
  border-radius: 20px;
  border: 2px #ef4444 solid;
  padding-left: 16px;
  padding-right: 16px;
}

#subtitleSection img {
  margin-right: 0.5rem;
  overflow: hidden;
  max-width: 100px;
  transition: 300ms;
}

header.scrolled #subtitleSection img {
  max-width: 0;
}

#moreButton > .stick {
  transition: 300ms;
  transition-timing-function: ease-in-out;
  position: absolute;
  background-color: #ef4444;
}

#moreButton.button-dark > .stick {
  background-color: #1a1a1a;
}

#moreButton.spin > .stick {
  position: absolute;
}

.stick.vertical {
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 2px;
  height: 100%;
}

.stick.horizontal {
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  width: 100%;
  height: 2px;
}

.spin .horizontal {
  transform: translateY(-50%) rotate(315deg);
}

.spin .vertical {
  transform: translateX(-50%) rotate(135deg);
}
</style>
