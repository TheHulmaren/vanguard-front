<template>
  <article
    @click="toggleFlip($event)"
    class="flex flex-col border p-2 gap-2 group border-transparent hover:border-red-500 duration-300 h-full cursor-pointer"
  >
    <div class="w-full flex gap-2">
      <div
        class="img-wrapper w-24 h-48 aspect-video relative duration-300"
        :class="{ flipped: isFlipped }"
      >
        <img
          class="img-front absolute top-0 left-0 w-full h-full object-cover bg-white"
          :src="
            crewData.attributes.profImg.data.attributes.url
          "
        />
        <ul
          v-if="crewData.attributes.social"
          class="img-back absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center gap-2 z-30"
        >
          <li v-for="item in crewData.attributes.social.social" :key="item">
            <a :href="item.url">
              <img
                v-if="socialTable[item.platform].icon"
                :src="'/assets/images/' + item.platform + '.svg'"
                class="w-6 h-6 object-contain social-icon-filter"
              />
              <span
                class="flex w-6 h-6 rounded-full items-center justify-center bg-red-500 text-black"
                v-else
              >
                {{ socialTable[item.platform].name[0] }}
              </span>
            </a>
          </li>
        </ul>
      </div>
      <div class="grow h-48">
        <h2
          class="text-2xl font-semibold group-hover:text-red-500 group-hover:translate-x-3 duration-300"
        >
          {{ crewData.attributes.name }}
        </h2>
        <p class="text-sm">{{ crewData.attributes.introduction }}</p>
      </div>
    </div>
    <div class="duration-300 overflow-hidden">
      <div
        class="w-full flex overflow-y-auto overflow-x-hidden duration-300 ease-in-out"
      >
        <ul class="w-full flex flex-wrap flex-none content-start gap-2 py-2">
          <li v-for="role in crewData.attributes.roles.roles" :key="role">
            <span
              class="text-xs px-2 py-1 border border-red-500 text-red-500"
              >{{ role }}</span
            >
          </li>
        </ul>
      </div>
    </div>
  </article>
</template>
<script>
export default {
  name: "CrewCard",
  props: {
    crewData: Object,
  },
  data() {
    return {
      isFlipped: false,
      socialTable: {
        twitter: {
          name: "Twitter",
          icon: "/assets/images/twitter.svg",
        },
        insta: {
          name: "Instagram",
          icon: "/assets/images/twitter.svg",
        },
        github: {
          name: "Github",
          icon: "/assets/images/twitter.svg",
        },
        kakao: {
          name: "Kakao",
          icon: "",
        },
        youtube: {
          name: "Youtube",
          icon: "/assets/images/twitter.svg",
        },
        linkedin: {
          name: "LinkedIn",
          icon: "/assets/images/twitter.svg",
        },
        facebook: {
          name: "Facebook",
          icon: "/assets/images/twitter.svg",
        },
      },
    };
  },
  methods: {
    toggleFlip() {
      this.isFlipped = !this.isFlipped;
    },
  },
};
</script>
<style>
.img-wrapper {
  transform-style: preserve-3d;
}

.img-front {
  transform: translateZ(3rem);
}
.img-back {
}

.img-back {
  transform: rotateY(90deg) translateZ(3rem);
}

.img-wrapper.flipped {
  transform: rotateY(-90deg);
}

.social-icon-filter {
  filter: invert(33%) sepia(85%) saturate(1693%) hue-rotate(339deg)
    brightness(105%) contrast(88%);
}
</style>
