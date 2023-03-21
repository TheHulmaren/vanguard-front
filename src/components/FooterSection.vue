<template>
  <footer class="flex items-center gap-2 p-2 md:p-0">
    <p class="text-xs md:text-sm text-gray-400">
      Copyright © <br class="md:hidden" />2023 Vanguard Web Artistry<br />All
      rights reserved.
    </p>
    <div class="grow text-center text-4xl tracking-[1rem] text-red-500">
      <span class="after:content-['···'] md:after:content-['·····']"></span>
    </div>
    <img src="/assets/images/tilted-sphere.png" class="w-8" />
    <img src="/assets/images/sphere.png" class="w-8" />
  </footer>
</template>
<script>
export default {
  name: "FooterSection",
  data() {
    return {};
  },
  methods: {},
};
</script>
<style>
footer {
  box-shadow: 0px -5px 20px #ef4444;
  background-color: #1a1a1a;
}
@media (min-width: 768px) {
  footer {
    background-color: transparent;
    box-shadow: none;
  }
}
</style>
