<template>
  <ul class="grid grid-cols-2 gap-1">
    <li v-for="crew in crews" :key="crew.id" class="col-span-2 md:col-span-1">
      <CrewCard :crew-data="crew" />
    </li>
  </ul>
  <span class="text-red-500 text-xl mx-auto" :class="{hidden:!fetching}">Fetching crews data...</span>
  <p class="text-red-500 text-lg" :class="{hidden:!fetchFailed}">Error! Failed to fetch crews data from database. Refresh and check the internet connection, then try again.</p>
</template>
<script>
import CrewCard from "../CrewCard.vue";
import { i18n } from "@/localization";

export default {
  name: "CrewsView",
  components: {
    CrewCard,
  },
  data() {
    return {
      crews: Array,
      fetchFailed: false,
      fetching: false,
    };
  },
  methods: {
    async fetchCrewsData() {
      this.fetching = true;
      try {
        let fetched = await this.$axios.get(
          `${this.$env.VUE_APP_DB_HOST}/api/crews?populate=profImg&locale=${i18n.global.locale}`
        );
        this.crews = fetched.data.data;
        this.onFetchSuccess();
      } catch (err) {
        console.log(err);
        this.onFetchFailed();
      }
    },
    onFetchFailed() {
      this.fetchFailed = true;
      this.fetching = false;
    },
    onFetchSuccess() {
      this.fetchFailed = false;
      this.fetching = false;
    },
  },
  async mounted() {
    await this.fetchCrewsData();
  },
};
</script>
<style></style>
