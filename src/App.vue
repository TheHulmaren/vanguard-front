<template>
  <div class="w-screen text-[#D9D9D9]">
    <div id="darkBg"></div>
    <div id="noiseBg"></div>
    <div class="mx-auto max-w-[1024px]">
      <div class="w-full min-h-screen grid grid-cols-3">
        <div class="col-span-3 md:col-span-2 flex flex-col">
          <header-section @toggle-sidebar="toggleSidebar" :sidebar-opened="sidebarOpened"/>
          <main class="grow mt-[110px] md:mt-[150px] p-4 md:p-0">
            <router-view></router-view>
          </main>
          <footer-section />
        </div>
        <div class="sidebar" :class="{ show: sidebarOpened }">
          <side-bar />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from "./components/SideBar.vue";
import HeaderSection from "./components/HeaderSection.vue";
import FooterSection from "./components/FooterSection.vue";

export default {
  name: "App",
  components: { SideBar, HeaderSection, FooterSection },
  data() {
    return {
      sidebarOpened: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.sidebarOpened = !this.sidebarOpened;
    },
  },
};
</script>

<style>
#darkBg {
  z-index: -10;
  position: fixed;
  top: 0;
  background-color: #1a1a1a;
  width: 100vw;
  min-height: 100vh;
}
#noiseBg {
  z-index: -10;
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100%;
  filter: contrast(170%) brightness(700%);
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.59)),
    url("../public/assets/images/noise.svg");
}

.sidebar {
  padding-top: 80px;
  position: fixed;
  z-index:20;
  top: 0;
  left: 0;
  width: 100vw;
  transform: translateX(100%);
  background-color: #1a1a1a;
  transition: 300ms;
  transition-timing-function: ease-in-out;
}

.sidebar.show {
  transform: translateX(0);
}

@media (min-width: 768px) {
  #noiseBg{
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.65)),
    url("../public/assets/images/noise.svg");
  }

  .sidebar {
    padding-top: 0;
    width: 100%;
    position: static;
    transform: translateX(0);
    grid-column: span 1 / span 1;
    background-color: transparent;
  }
}
</style>
