<template lang="html">
  <span class="sidebar">

    <div class="row">
      <nuxt-link to="/">
        <site-logo></site-logo>
      </nuxt-link>
    </div>

    <div class="mtx notifications">

      <label class="medium center row">Notifications  <font-awesome-icon :icon="['fas', 'comment']"></font-awesome-icon> (0)</label>

      <span v-for="notification in notifications">{{ notification }}</span>
    </div>
  </span>
</template>

<script>

import { mapActions, mapGetters } from "vuex";
import SiteLogo from "~/components/logo/SiteLogo.vue";

export default {
  components: {
    SiteLogo
  },
  computed: {
    ...mapGetters([
      "notifications"
    ])
  }
}
</script>

<style lang="css">

  .sidebar {
    width: 256px;
    height: 100vh;
    display: inline-block;
    position: fixed;
    top: 0;
    background: #1f2229;
  }

</style>
