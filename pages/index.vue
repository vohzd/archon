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
        <h3 class="mb">Github</h3>
        <button @click="connect('github')" disabled>Connect</button>
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
  },
  data(){
    return {
      url: null,
      github: {
        clientId: "TODO"
      }
    }
  },
  methods: {
    /*
    async connect(site){
      if (site === "github"){
        try {
          //const yes = await this.$axios.get(`https://github.com/login/oauth/authorize?client_id=${this.github.clientId}&login=${this.github.account}`)
          window.open(`https://github.com/login/oauth/authorize?client_id=${this.github.clientId}`)
          //console.log(yes);
        }
        catch (e){
          console.log(e);
        }
      }
    }*/
  }
}
</script>

<style lang="css">

</style>
