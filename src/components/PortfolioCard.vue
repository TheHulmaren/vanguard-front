<template>
  <article
    onclick=""
    class="border border-transparent hover:border-red-500 flex duration-300 p-2 gap-4 group items-center"
  >
    <img
      :src="pf.attributes.thumbnail.data.attributes.formats.medium.url"
      class="h-12 md:h-20 aspect-[4/3] object-cover border-[#d9d9d9] border"
    />
    <div class="grow flex flex-col justify-between py-1 gap-1">
      <h2 class="text-lg md:text-3xl group-hover:text-red-500 duration-300">
        {{ pf.attributes.title }}
      </h2>
      <a
        :href="pf.attributes.url"
        class="text-sm w-fit max-h-0 group-hover:max-h-[300px] overflow-hidden duration-500 ease-in-out hover:text-gray-500"
        >🔗 Visit The Website</a
      >
    </div>
    <a
      :href="'/our-portfolios/' + pf.id"
      class="flex items-center rounded-l-full border border-transparent group-hover:border-red-500 duration-1000 hover:-translate-x-3 hover:bg-red-900 h-fit p-1"
    >
      <img src="/assets/images/spark.svg" class="w-6 h-6 object-contain" />

      <span
        class="overflow-hidden max-w-[0px] group-hover:max-w-[500px] duration-1000 ease-in-out mx-1 text-red-500 whitespace-nowrap"
        >View more</span
      >
    </a>
  </article>
</template>
<script>
export default {
  name: "PortfolioCard",
  props: {
    pf: Object,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style></style>
