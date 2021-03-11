<template lang="html">
  <main>
    <div class="pad">
      <div class="available-websites-toolbar ">
        <div class="">
          Filter: All | Available | Linked
        </div>
        <div class="">
          Order: Asc | Desc
        </div>
        <div class="">
          Display: Grid | List
        </div>
      </div>
      <div class="available-websites mt">

        <div class="available-website pad">
          <div class="row">
            <img src="~/assets/img/deezer.png" />
          </div>
          <div class="absolute-bottom-left row">
            <button disabled class="row">Coming Soon</button>
          </div>
        </div>

        <div class="available-website pad">
          <div class="row">
            <img src="~/assets/img/github.png" />
          </div>
          <div class="absolute-bottom-left row">
            <nuxt-link to="/lastfm"><button>Manage</button></nuxt-link>
          </div>
        </div>

        <div class="available-website pad">
          <div class="row">
            <img src="~/assets/img/lastfm.png"  />
          </div>
          <div class="absolute-bottom-left row">
            <nuxt-link to="/lastfm"><button>Manage</button></nuxt-link>
          </div>
        </div>

        <div class="available-website pad">
          <div class="row">
            <img src="~/assets/img/spotify.png" />
          </div>
          <div class="absolute-bottom-left row">
            <button disabled>Coming Soon</button>
          </div>
        </div>

        <div class="available-website pad">
          <div class="row">
            <img src="~/assets/img/youtube.png"  />
          </div>
          <div class="absolute-bottom-left row">
            <nuxt-link to="/youtube"><button> Manage</button></nuxt-link>
          </div>
        </div>

        <div class="available-website pad">
          <div class="row">
            <img src="~/assets/img/markdown.svg" class="invert" />
          </div>
          <div class="absolute-bottom-left row">
            <nuxt-link to="/markdown"><button>Manage</button></nuxt-link>
          </div>
        </div>

      </div>
    </div>

  </main>

</template>

<script>

import { mapState, mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters([
      "accounts",
      "githubToken"
    ])
  }
}
</script>

<style lang="css">

  .available-websites  {
    display: grid;
    grid-column-gap: 16px;
    grid-row-gap: 16px;
    grid-template-columns: repeat(4, auto);
    grid-template-rows: repeat(4, 300px);
  }

  .available-website  {
    background: rgba(255,255,255,0.02);
    margin-bottom: 8px;
    border-radius: 8px;
    height: 300px;
    position: relative;
  }

  .available-websites img {
    width: 100%;
    padding-left: 25%;
    padding-right: 25%;
  }

  .available-websites-toolbar {
    font-size: 10px;
    opacity: 0.6;
    line-height: 16px;
  }

  .invert {
    filter: invert(1);
  }


  @media (max-width: 1750px){

    .available-websites  {
      grid-template-rows: repeat(4, 200px);
    }

    .available-website  {
      height: 200px;
    }
  }

</style>
