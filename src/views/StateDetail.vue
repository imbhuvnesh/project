<template>
  <div class="state-details">
    <h1>{{ stateInfo.name }}</h1>
    <div class="state-info">
      <h4>{{ stateInfo.info }}</h4>
      <div class="regions">
        <h3>Regions :</h3>
        <div
          class="region-box"
          v-for="region in stateInfo.regions"
          :key="region"
        >
          <h4 class="region" @click="showRegionInfo = region.name">
            {{ region.name }}
          </h4>
          <region-details
            :desc="region.info"
            :subregions="region.subregions"
            :state-id="stateInfo.id"
            v-if="region.name === showRegionInfo"
          ></region-details>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RegionDetails from "../components/RegionDetails.vue";

export default {
  data() {
    return {
      stateInfo: {},
      showRegionInfo: "",
    };
  },
  components: {
    RegionDetails,
  },
  methods: {
    getData() {
      const id = this.$route.params.id;
      let states = this.$store.state.stateList;
      states = JSON.parse(JSON.stringify(states));
      for (let i = 0; i < states.length; i++) {
        if (states[i].id == id) {
          this.stateInfo = states[i];
          break;
        }
      }
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<style scoped>
.state-details {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  text-align: justify;
  transition: ease-in 2s;
}
.regions {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.region {
  background: rgb(44, 91, 194);
  padding: 15px;
  border-radius: 10px;
  color: #fff;
  cursor: pointer;
}
.region:hover {
  background: rgb(69, 109, 194);
}
</style>