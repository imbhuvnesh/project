<template>
  <div>hello ji!</div>
</template>

<script>
export default {
  name: "SubregionDetail",
  data() {
    return {
      subregion: {},
    };
  },

  mounted(){
      const name = this.$route.params.name;
      const id = this.$route.params.stateId;
      const state = this.$store.state.stateList[id];
      for(let subrgn in state.regions.subregions){
          if(subrgn.name === name){
              this.subregion = subrgn;
          }
      }
    console.log(this.subregion);
  }
};
</script>

<style lang="scss" scoped>
</style>