<template>
  <div>
    <h2>States</h2>
    <div>
      <ul v-for="state in stateList" :key="state.id">
        <router-link :to="`/state-detail/${state.id}`">
          <li>{{ state.name }}</li>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      stateList: this.$store.state.stateList,
    };
  },
};
</script>