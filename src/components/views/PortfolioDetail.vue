<template>
  <div v-if="dataFetched" class="flex flex-col relative">
    <div class="flex flex-col items-center">
      <ul
        id="carouselBox"
        class="flex flex-nowrap overflow-hidden border border-[#d9d9d9] w-full aspect-video"
      >
        <li
          :key="img"
          v-for="img in pf.attributes.images.data"
          class="flex-none w-full"
        >
          <img
            class="w-full h-full object-contain"
            :src="img.attributes.formats.medium.url"
          />
        </li>
      </ul>
      <ul
        id="carouselDots"
        class="flex rounded-full border border-red-500 gap-3 w-fit items-center my-2"
      >
        <li
          v-for="i in pf.attributes.images.data.length"
          :key="i"
          class="flex justify-center"
        >
          <button @click="clickedCarouselDot($event, i)">
            <div
              class="w-2 h-2 m-2 rounded-full duration-300"
              :class="[i == currentImageIndex ? 'bg-red-500' : 'bg-red-800']"
            ></div>
          </button>
        </li>
      </ul>
      <div
        id="circleOverlay"
        class="absolute w-4 h-4 border-red-500 border rounded-full duration-300"
      ></div>
    </div>
    <h2
      class="text-5xl text-semibold underline decoration-solid decoration-red-500 w-fit self-center mt-5"
    >
      {{ pf.attributes.title }}
    </h2>
    <a
      :href="pf.attributes.url"
      class="my-2 text-center text-sm before:content-['🔗_'] text-[#d9d9d9] hover:text-gray-500 duration-300 ease-in-out"
      >Visit the Website</a
    >
    <pre id="descSection" class="my-5"></pre>
  </div>
</template>
<script>
import { marked } from "marked";
import { nextTick } from "vue";

export default {
  name: "PortfolioDetail",
  data() {
    return {
      pf: Object,
      dataFetched: false,
      currentImageIndex: 1,
    };
  },
  methods: {
    async fetchPortfolioData() {
      let fetched = await this.$axios.get(
        `${this.$env.VUE_APP_DB_HOST}/api/portfolios/${this.$route.params.id}?populate=*`
      );
      return fetched.data.data;
    },
    clickedCarouselDot(e, index) {
      this.moveCircleOverlay(index);
      this.swipeCarousel(index);
    },
    swipeCarousel(index) {
      var carouselBox = document.getElementById("carouselBox");
      let scrollAmount = (index - 1) * carouselBox.clientWidth;

      carouselBox.scroll({
        left: scrollAmount,
        behavior: "smooth",
      });

      this.currentImageIndex = index;
    },
    moveCircleOverlay(index) {
      var circleOverlay = document.getElementById("circleOverlay");
      let targetDot = document.querySelector(
        `#carouselDots>li:nth-child(${index})>button>div`
      );

      let diffX = (circleOverlay.offsetWidth - targetDot.offsetWidth) / 2;
      let diffY = (circleOverlay.offsetHeight - targetDot.offsetHeight) / 2;

      circleOverlay.style.top = targetDot.offsetTop - diffY + "px";
      circleOverlay.style.left = targetDot.offsetLeft - diffX + 0.5 + "px";
    },
    initCircleOverlay() {
      this.moveCircleOverlay(1);
    },
  },
  async mounted() {
    try {
      this.pf = await this.fetchPortfolioData();
      this.dataFetched = true;
    } catch (err) {
      console.log(err);
    }

    await nextTick();

    this.initCircleOverlay();
    document.getElementById("descSection").innerHTML = marked.parse(
      this.pf.attributes.desc
    );
  },
};
</script>
<style>
#descSection {
  white-space: pre-wrap; /* Since CSS 2.1 */
  white-space: -moz-pre-wrap; /* Mozilla, since 1999 */
  white-space: -pre-wrap; /* Opera 4-6 */
  white-space: -o-pre-wrap; /* Opera 7 */
  word-wrap: break-word; /* Internet Explorer 5.5+ */
}
#descSection ul {
  list-style-type: "■";
  list-style-position: inside;
}

#descSection li::marker {
  color: #ef4444;
}

#descSection :is(h1, h2, h3, h4, h5, h6) {
  text-align: center;
  color: #ef4444;
}

#descSection h3 {
  font-size: 1.5rem;
  line-height: 2rem;
}

#descSection blockquote {
  font-size: 1.125rem; /* 18px */
  line-height: 1.75rem; /* 28px */
  border-left: 3px #ef4444 solid;
  padding-left: 2rem;
  display: flex;
  flex-direction: column;
}

#descSection blockquote::before,
#descSection blockquote::after {
  content: '"';
  font-size: xx-large;
  color: #ef4444;
}

#descSection blockquote::after {
  align-self: flex-end;
}

#descSection u {
  text-decoration-color: #ef4444;
}
</style>
