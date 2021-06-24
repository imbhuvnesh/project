import { createStore } from "vuex";

export default createStore({
  state: {
    stateList: [
      {
        id: 1,
        name: "West Bengal",
        info:
          "West Bengal comprises of four Agro Ecological Regions (AER) namely 12, 15, 16 and  18. ",
      },
      {
        id: 2,
        name: "Andaman & Nicobar Islands",
        info:
          "Andaman & Nicobar Islands comes under Agro Ecological Sub Region (AESR 20.1) of Agro Ecological Region 20 (AER 20) of coastal ecosystem covering 0.8 mha in three districts namely Nicobar, North & Middle Andaman and South Andaman. The region is hot perhumid ESR with shallow to medium deep, loamy to clayey Red and Yellow and Red Loamy soils, low to medium AWC and LGP 300 days. The mean annual rainfall and temperature ranges from 1400-1600 mm and 26-27°C respectively.",
      },
    ],
  },
  mutations: {},
  actions: {},
  modules: {},
  getters: {
    getStates() {
      return this.state.stateList;
    },
  },
});
