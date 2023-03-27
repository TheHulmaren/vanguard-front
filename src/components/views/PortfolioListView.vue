<template>
  <ul class="w-full flex flex-col gap-2">
    <li v-for="pf in portfolios" :key="pf.id">
      <PortfolioCard :pf="pf" />
    </li>
  </ul>
</template>
<script>
import PortfolioCard from "../PortfolioCard.vue";
import { i18n } from "@/localization";

export default {
  name: "PortfolioListView",
  components: {
    PortfolioCard,
  },
  props: {},
  data() {
    return {
      portfolios: Array,
    };
  },
  methods: {
    async fetchPortfolios() {
      let fetched = await this.$axios.get(
        `${this.$env.VUE_APP_DB_HOST}/api/portfolios?populate=*&locale=${i18n.global.locale}`
      );
      return fetched.data.data;
    },
  },
  async mounted() {
    try {
      this.portfolios = await this.fetchPortfolios();
    } catch (err) {
      console.log(err);
    }
  },
};
</script>
<style></style>
