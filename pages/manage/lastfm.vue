<template>
  <main class="pad">

    <div class="c50">
      <h2>Lastfm sync</h2>

      <div class="row mt">
        <h4>Add a new user</h4>
        <div class="input-grid row mt">
          <input placeholder="lastfm username" v-model="newUsername" />
          <button class="secondary-button" @click="addNewAccount">+</button>
        </div>
      </div>

      <div class="row mtx">
        <h4>Users</h4>
        <ul>
          <li v-for="account in accounts('last.fm').linkedAccounts" class="medium"> {{ account }} </li>
        </ul>
      </div>
    </div>
    <!--
    <section >
      <h2>Export your last.fm tracks</h2>
      <p>hint, try mine... <code>vohzd</code></p>
      <div class="row">
        <input v-model="user" placeholder="last.fm username" class="mr" />
        <button @click="go" class="mt">{{ buttonText }}</button>
      </div>
      <div v-if="numPages">
        <p>Downloaded {{ currentPage }} / {{ numPages }} pages.</p>
        <p>Downloaded {{ trackDownloadProgress }} / {{ numTracks }} tracks!</p>
      </div>
    </section>
    <section >
      <div v-if="tracks" class="exported-tracks">
        <div v-for="track in tracks.slice().reverse()" class="track">
          <span v-if="track.artist">{{ track.artist["#text"] }} - </span>
          <span v-if="track.name">{{ track.name }}</span>
          <span v-if="track.album">{{ track.album["#text"] }}</span>
          <span v-if="track.date" class="tiny">({{ track.date["#text"] }})</span>
        </div>
      </div>
    </section>-->
  </main>
</template>

<script>

import { mapActions, mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters([
      "accounts"
    ]),
  },
  data(){
    return {
      newUsername: null
    }
  },
  methods: {
    ...mapActions([
      "addAccount"
    ]),
    addNewAccount(){
      if (!this.newUsername) return;

      this.addAccount({
        username: this.newUsername,
        website: "last.fm"
      })
    }
  },
  mounted(){
  }
}


/*
	export default {
    data(){
      return {
        user: "vohzd",
        numPages: null,
        numTracks: null,
        currentPage: 1,
        trackDownloadProgress: 1,
        tracks: null,
        buttonText: "Commence"
      }
    },
    head () {
      return {
        title: "Last.fm Exporter | vohzd.com",
        meta: [
          { hid: "description", name: "description", content: "Export your entire last.fm history" },
          { hid: "keywords", name: "keywords", content: "lastfm" },
        ]
      }
    },
    methods:{
      async go(){
        this.buttonText = "Working";
        await this.retreiveTracks();
        while (this.currentPage < this.numPages){
          if (this.currentPage < this.numPages){
            this.currentPage++;
            let countup = setInterval(() => {
              this.trackDownloadProgress += 2;
            }, 2);
            setTimeout(() => {
              clearInterval(countup)
            }, 1500);
          }
          await this.retreiveTracks();
        }
        this.buttonText = "Completed";
        setTimeout(() => {
          this.trackDownloadProgress = this.numTracks;
        }, 1200);

        if (this.currentPage === this.numPages){
          console.log("FINISHED")
        }
      },
      async retreiveTracks(){
        try {

          // ALL
          let res = await this.$axios.get(`https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${this.user}&api_key=3329fbd5c9a9642aac2144cff8dc183a&format=json&limit=200&page=${this.currentPage}`);

          // Loved tracks only
          let res = await this.$axios.get(`https://ws.audioscrobbler.com/2.0/?method=user.getlovedtracks&user=${this.user}&api_key=3329fbd5c9a9642aac2144cff8dc183a&format=json&limit=200&page=${this.currentPage}`);

          if (!this.numPages){
            this.numPages = parseInt(res.data.recenttracks["@attr"].totalPages);
            this.numTracks = parseInt(res.data.recenttracks["@attr"].total);
          }
          !this.tracks ? this.tracks = res.data.recenttracks.track : this.tracks.push(...res.data.recenttracks.track);
        }
        catch (e){
          console.log(e)
        }
      }
    }
	}*/
</script>

<style>

  .exported-tracks {
    font-size: 16px;
    overflow-y: scroll;
    overflow-x: hidden;
    box-shadow: inset 0px 0px 128px #000;
    height: calc(100vh - 64px);
    width: calc(100%);
    font-family: monospace;
  }
  .exported-tracks .track{
    padding: 16px;

    border-bottom: 1px solid #000;
  }
  .tiny {
    font-size: 0.8em;
  }

</style>
