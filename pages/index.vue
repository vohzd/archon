<template lang="html">
  <main class="center">
    <site-logo></site-logo>

    <h1>Sites</h1>
    <div class="row">
      <div class="c50">
        <h3>Deezer</h3>
        <button>Connect</button>
      </div>
      <div class="c50">
        <h3>Github</h3>
        <button>Connect</button>
      </div>
    </div>
    <div class="row">
      <div class="c50">
        <h3>Lastfm</h3>
        <button>Connect</button>
      </div>
      <div class="c50">
        <h3>Spotify</h3>
        <button>Connect</button>
      </div>
    </div>
    <div class="row">
      <div class="c50">
        <h3>YouTube</h3>
        <button>Connect</button>
      </div>
    </div>
  </main>
</template>

<script>


import SiteLogo from "~/components/logo/SiteLogo.vue";

export default {
  components: {
    SiteLogo
  },
  data(){
    return {
      url: null
    }
  },
  methods: {
  }
}
</script>

<style lang="css">

</style>
