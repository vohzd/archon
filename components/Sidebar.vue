<template lang="html">
  <span class="sidebar">

    <div class="row">
      <nuxt-link to="/">
        <site-logo></site-logo>
      </nuxt-link>
    </div>

    <div class="mtx notifications">
      <code v-for="notification in notifications" class="notification row mb ">{{ notification }}</code>
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
    width: 12%;
    height: 100vh;
    display: inline-block;
    position: fixed;
    top: 0;
    background: #1f2229;
  }

  .notifications {
    display: flex;
    flex-direction: column-reverse;
  }

  .notification {
    font-size: 11px;
    background: rgba(0,0,0,0.3);
    padding: 4px;
    border-radius: 3px;
    line-height: 11px;
  }

</style>
