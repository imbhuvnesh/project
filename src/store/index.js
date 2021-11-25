import { createStore } from "vuex";

export default createStore({
  state: {
    stateList: [
      {
        id: 1,
        name: "West Bengal",
        info:
          "West Bengal comprises of four Agro Ecological Regions (AER) namely 12, 15, 16 and  18. ",
        regions: [
          {
            name: "Agro-Eco Region 12", info: "AER 12 in West Bengal comprises of Bankura and Puruliya districts of Chhotanagpur Plateau under Agro Ecological Sub Regions (AESR) 12.3. ",
            subregions: [
              { name: "AESR 12.3", info: "The region is hot, dry subhumid climate ESR with moderately deep to deep loamy to clayey Red and Lateritic soils, medium AWC and LGP of 150-180 days in a year. The area receives an annual rainfall of 1000-1600 mm which covers about 80 per cent of the PET leaving deficit of 500 to 700 mm of water per year. The water balance shows a prolonged dry period from December to May (more than 90 days in a year). As such the area, in general, qualifies for Typic Ustic soil moisture regime. The mean annual soil temperature of more than 22oC qualifies the area for hyperthermic soil temperature regime." },
            ]
          },
          {
            name: "Agro-Eco Region 15", info: "The AER 15 in West Bengal comes under Agro Ecological Sub Regions (AESR) 15.1 and 15.3.",
            subregions: [
              { name: "AESR 15.1", info: "The  AESR 15.1  comprising of Bardaman, Birbhum, Dakshin Dinajpur, Haora, Hugli, Malda, Mursidabad, Nadia, North 24 Pragana, Pashchim Medinipur and Uttar_Dinajpur districts of Bengal basin. The region hot moist subhumid ESR with deep loamy to clayey alluvium-derived soils, medium to high AWC and LGP 210-240 days. The rainfall in Ganga Plain ranges between 1400 and 1600 mm. The water balance shows that P exceeds PET from June to October followed by a period of utilization till mid-February in most of the years. The SMCS remains partly dry for as long as 90 cumulative days qualifying the area for udic-ustic soil moisture regime and Hyperthermic temperature regimes" },
            ]
          },
        ]
      },
      {
        id: 2,
        name: "Andaman & Nicobar Islands",
        info:
          "Andaman & Nicobar Islands comes under Agro Ecological Sub Region (AESR 20.1) of Agro Ecological Region 20 (AER 20) of coastal ecosystem covering 0.8 mha in three districts namely Nicobar, North & Middle Andaman and South Andaman. The region is hot perhumid ESR with shallow to medium deep, loamy to clayey Red and Yellow and Red Loamy soils, low to medium AWC and LGP 300 days. The mean annual rainfall and temperature ranges from 1400-1600 mm and 26-27°C respectively.",
      },
      {
        id: 3,
        name: "Andhra Pradesh",
        info:
          "Andhra Pradesh comprises of four Agro Ecological Regions (AER) namely 3,7,12 and 18.",
        regions: [
          {
            name: 'Agro-Eco Region 3',
            info: "AER 3 in Andhra Pradesh comprises of Ananthapur district of Deccan Plateau under Agro Ecological Sub Region (AESR) 3.",
            subregions: [
              { name: "AESR 12.3", info: "The region is hot, dry subhumid climate ESR with moderately deep to deep loamy to clayey Red and Lateritic soils, medium AWC and LGP of 150-180 days in a year. The area receives an annual rainfall of 1000-1600 mm which covers about 80 per cent of the PET leaving deficit of 500 to 700 mm of water per year. The water balance shows a prolonged dry period from December to May (more than 90 days in a year). As such the area, in general, qualifies for Typic Ustic soil moisture regime. The mean annual soil temperature of more than 22oC qualifies the area for hyperthermic soil temperature regime." },
            ]
          },
          {
            name: "Agro-Eco Region 7",
            info: "AER 7 in Andhra Pradesh comprises of Cuddapah, Guntur, Krishna, Nellore, Prakasam, West Godavari and Kurnool districts of Deccan (Telangana) Plateau and Eastern Ghats under Agro Ecological Sub Regions (AESR) 7.1 & 7.3.",
            subregions: [
              {name: "AESR 7.1", info: "The region hot dry semi-arid ESR with deep loamy to clayey mixed Red and Black soils, medium AWC and LGP 90-120 days in a year. "},
              { name: "AESR 7.3", info: "The region hot moist semi-arid/dry subhumid ESR with medium to deep, loamy to clayey mixed Red and Black soils, medium AWC and LGP 150-180 days in a year. " }
            ]
          }
        ]
      },
    ],
  },
  mutations: {},
  actions: {},
  modules: {},
  getters: {
    getStates()
    {
      return this.state.stateList;
    },
  },
});
