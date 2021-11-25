<template>
  <div>{{subregion.name}}</div>
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
      
      this.subregion = {name, id}
  }
};
</script>

<style lang="scss" scoped>
</style>