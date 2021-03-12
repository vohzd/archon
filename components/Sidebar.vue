<template lang="html">
  <span class="sidebar">

    <div class="row">
      <nuxt-link to="/">
        <site-logo></site-logo>
      </nuxt-link>
    </div>

    <div class="jobs row">
      <figure v-for="job in jobs" class="job row mb ">
        <main>
          <header>{{ job.subject }}</header>
          <label>{{ job.currentItem }} / {{ job.totalItems }} <span class="tiny">({{ getPercentage(job.currentItem, job.totalItems) }}%)</span></label>
        </main>
        <progress :value="job.currentItem" :max="job.totalItems"></progress>
      </figure>
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
      "jobs"
    ])
  },
  methods: {
    getPercentage(left, right){
      return ((left / right) * 100).toFixed(2);
    }
  }
}
</script>

<style lang="css">

  .sidebar {
    width: 15%;
    height: 100vh;
    display: inline-block;
    position: fixed;
    top: 0;
    background: #1f2229;
  }

  .jobs {
    display: flex;
    flex-direction: column-reverse;
  }

  .job {
    font-size: 11px;
    background: rgba(0,0,0,0.3);
    padding: 4px;
    border-radius: 3px;
    line-height: 11px;
    transition: 1s all;
    position: relative;
    height: 42px;
  }

  .job progress {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 1;
  }

  .job main {
    position: absolute;
    z-index: 2;

  }

</style>
