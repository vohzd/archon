<template lang="html">

  <div class="available-websites pad">

    <div class="available-website pad">
      <div class="row">
        <img src="~/assets/img/deezer.png" />
      </div>
      <div class="row center mt">
        <button disabled>Coming Soon</button>
      </div>
    </div>

    <div class="available-website pad">
      <div class="row">
        <img src="~/assets/img/github.png" />
      </div>
      <div class="row center mt">
        <nuxt-link to="/manage/lastfm"><button>Manage</button></nuxt-link>
      </div>
    </div>

    <div class="available-website pad">
      <div class="row">
        <img src="~/assets/img/lastfm.png"  />
      </div>
      <div class="row center mt">
        <nuxt-link to="/manage/lastfm"><button>Manage</button></nuxt-link>
      </div>
    </div>

    <div class="available-website pad">
      <div class="row">
        <img src="~/assets/img/spotify.png" />
      </div>
      <div class="row center mt">
        <button disabled>Coming Soon</button>
      </div>
    </div>

    <div class="available-website pad">
      <div class="row">
        <img src="~/assets/img/youtube.png"  />
      </div>
      <div class="row center mt">
        <nuxt-link to="/manage/lastfm"><button>Manage</button></nuxt-link>
      </div>
    </div>

  </div>
  <!--
  <main class="center">
    <div class="row mbx">
      <div class="c50 mt">
        <h3 class="mb">Deezer</h3>
        <button disabled>Connect</button>
      </div>
      <div class="c50 mt">
        <h3 class="mb"><img src="~/assets/img/github.png" width="128px"/></h3>
        <nuxt-link to="/connect/github" v-if="!githubToken">
          <button>Connect Github</button>
        </nuxt-link>
        <nuxt-link to="/manage/github" v-else>
          <button>Manage Github</button>
        </nuxt-link>
      </div>
    </div>
    <div class="row mbx">
      <div class="c50 mt">
        <h3 class="mb"><img src="~/assets/img/lastfm.png" width="128px"/></h3>
        <nuxt-link to="/manage/lastfm">
          <button>last.fm</button>
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
  </main>-->
</template>

<script>

import { mapActions, mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters([
      "githubToken"
    ])
  }
}
</script>

<style lang="css">

  .available-websites  {
    width: calc(100% - 256px);
    display: grid;
    grid-column-gap: 16px;
    grid-row-gap: 16px;
    grid-template-columns: repeat(4, auto);
    grid-template-rows: repeat(4, 25vh);
  }

  .available-website  {
    background: rgba(255,255,255,0.02);
    margin-bottom: 8px;
    border-radius: 8px;
    height: 25vh;
    position: relative;
  }


  .available-websites img {
    width: 100%;
    padding-left: 25%;
    padding-right: 25%;
  }

</style>
