<template lang="html">
  <main class="center">
    <site-logo></site-logo>

    <h1>Sites</h1>
    <div class="row mbx">
      <div class="c50 mt">
        <h3 class="mb">Deezer</h3>
        <button disabled>Connect</button>
      </div>
      <div class="c50 mt">
        <h3 class="mb"><img src="~/assets/img/github.png" width="128px"/></h3>
        <nuxt-link to="/connect/github">
          <button>Connect Github</button>
        </nuxt-link>
      </div>
    </div>
    <div class="row mbx">
      <div class="c50 mt">
        <h3 class="mb"><img src="~/assets/img/lastfm.png" width="128px"/></h3>
        <nuxt-link to="/connect/lastfm">
          <button>Connect lastfm</button>
        </nuxt-link>
      </div>
      <div class="c50 mt">
        <h3 class="mb">Spotify</h3>
        <button disabled>Connect</button>
      </div>
    </div>
    <div class="row mbx">
      <div class="c50 mt">
        <h3 class="mb"><img src="~/assets/img/youtube.png" width="128px"/></h3>
        <nuxt-link to="/connect/youtube">
          <button>Connect YouTube</button>
        </nuxt-link>
      </div>
    </div>
  </main>
</template>

<script>

import SiteLogo from "~/components/logo/SiteLogo.vue";

export default {
  components: {
    SiteLogo
  }
}
</script>

<style lang="css">

</style>
