<template>
  <ul class="grid grid-cols-2 gap-1">
    <li v-for="crew in crews" :key="crew.id" class="col-span-2 md:col-span-1">
      <CrewCard :crew-data="crew" />
    </li>
  </ul>
</template>
<script>
import CrewCard from "../CrewCard.vue";

export default {
  name: "CrewsView",
  components: {
    CrewCard,
  },
  data() {
    return {
      crews: Array,
    };
  },
  methods: {
    async fetchCrewsData() {
      let fetched = await this.$axios.get(
        `${this.$env.VUE_APP_DB_HOST}/api/crews?populate=profImg`
      );
      this.crews = fetched.data.data;
    },
  },
  async mounted() {
    await this.fetchCrewsData();
  },
};
</script>
<style></style>
