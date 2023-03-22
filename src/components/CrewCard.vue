<template>
  <article
    @click="toggleFlip($event)"
    :class="{ flipped: isFlipped }"
    class="flex flex-col border p-2 gap-2 group border-transparent hover:border-red-500 duration-300 h-fit cursor-pointer"
  >
    <div class="w-full flex gap-2 h-36 md:h-48">
      <div
        class="img-wrapper w-24 h-full aspect-video relative overflow-hidden flex-none"
      >
        <img
          class="img-front absolute top-0 left-0 w-full h-full object-cover bg-white duration-300 ease-in-out"
          :src="crewData.attributes.profImg.data.attributes.formats.small.url"
        />
        <ul
          v-if="crewData.attributes.social"
          class="img-back absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center gap-2 -z-10 duration-300 ease-in-out overflow-y-auto"
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
      <div class="grow h-full overflow-y-auto overflow-x-clip">
        <h2
          class="text-2xl font-semibold group-hover:text-red-500 group-hover:translate-x-3 duration-300"
        >
          {{ crewData.attributes.name }}
        </h2>
        <div class="relative h-full">
          <p class="text-sm text-front">
            {{ crewData.attributes.introduction }}
          </p>
          <div
            class="text-back py-2 absolute top-0 left-0 w-full h-full duration-300 overflow-hidden block md:hidden"
          >
            <div
              class="w-full flex overflow-y-auto overflow-x-hidden duration-300 ease-in-out"
            >
              <ul
                class="w-full flex flex-wrap flex-none content-start gap-2 pb-1"
              >
                <li v-for="role in crewData.attributes.roles.roles" :key="role">
                  <span
                    class="text-xs px-2 py-1 border border-red-500 text-red-500"
                    >{{ role }}</span
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="duration-300 overflow-hidden hidden md:block">
      <div
        class="w-full flex overflow-y-auto overflow-x-hidden duration-300 ease-in-out"
      >
        <ul class="w-full flex flex-wrap flex-none content-start gap-2 pb-1">
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
  position: relative;
}

.img-back {
  transform: translateX(-100%);
}

.flipped .img-front {
    transform: translateX(-100%);
    transition-property: transform;
    transition-duration: 300ms;
  }

  .flipped .img-back {
    transform: translate(0);
  }

.social-icon-filter {
  filter: invert(33%) sepia(85%) saturate(1693%) hue-rotate(339deg)
    brightness(105%) contrast(88%);
}

@media (max-width: 768px) {
  .text-back {
    opacity: 0;
  }

  .flipped .text-front {
    opacity: 0;
  }

  .flipped .text-back {
    opacity: 1;
  }
}
</style>
