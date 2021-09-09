<template>
  <div class="region-details">
    <h4>{{ desc }}</h4>
    <h4>Subregions:</h4>
    <ul>
      <li v-for="subregion in subregions" :key="subregion.name">
        <router-link :to='`/subregion-detail/${stateId}/${subregion.name}`'>{{ subregion.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "RegionDetails",
  props: ["desc", "subregions", "stateId"],
};
</script>

<style  scoped>
.region-details {
  background: rgb(40, 56, 90);
  color: #fff;
  padding: 15px;
  max-width: 220px;
  text-align: justify;
  line-height: 1.7;
}
li:hover{
    text-decoration: underline;
    cursor: pointer;
    font-weight: 500;
}
</style>