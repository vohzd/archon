<template>
  <main class="pad">

    <div class="row">
      <h2>lastfm Sync</h2>

      <form class="row mt">
        <h4>Add a new user</h4>
        <div class="relative row inline-block">
          <div class="input-grid row mt relative">
            <input placeholder="lastfm username" v-model="newUsername" />
            <form-button button-text="+" :is-disabled="isDisabled" class="secondary-button" @click.prevent.native="addNewAccount"></form-button>
          </div>
          <div class="form-feedback" v-if="formFeedback">
            <label>{{ formFeedback }}</label>
          </div>
        </div>
      </form>

      <div class="row mtx">

        <div class="sync-grid mt">
          <div class="sync-grid-item mb">
            <div class="">Username</div>
            <div class="">Last Sync</div>
            <div class="">Manage?</div>
          </div>

          <div v-for="(account, i) in accounts('lastfm')" class="medium sync-grid-item">
            <div>{{ account.username }}</div>
            <div>{{ account.lastSync ? account.lastSync : "Never" }}</div>
            <div><nuxt-link :to="`/lastfm/${account._id}`">Click</nuxt-link></div>
          </div>
        </div>
      </div>
    </div>
    <!--
    <section >
      <h2>Export your lastfm tracks</h2>
      <p>hint, try mine... <code>vohzd</code></p>
      <div class="row">
        <input v-model="user" placeholder="lastfm username" class="mr" />
        <button @click="go" class="mt">{{ buttonText }}</button>
      </div>
      <div v-if="numPages">
        <p>Downloaded {{ currentPage }} / {{ numPages }} pages.</p>
        <p>Downloaded {{ trackDownloadProgress }} / {{ numTracks }} tracks!</p>
      </div>[{"id":"2FixyZrNjCj","username":"vohzd","website":"lastfm","lastSync":1
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

import Vue from "vue";
import { mapActions, mapGetters } from "vuex";
import FormButton from "~/components/form/FormButton.vue";

export default {
  components: {
    FormButton
  },
  computed: {
    ...mapGetters([
      "accounts"
    ]),
  },
  data(){
    return {
      isDisabled: true,
      formFeedback: null,
      newUsername: null,
    }
  },
  methods: {
    ...mapActions([
      "addAccount",
      "sync"
    ]),
    addNewAccount(){
      if (!this.newUsername) return;
      this.addAccount({
        username: this.newUsername,
        website: "lastfm"
      })
      this.newUsername = "";
    },
  },
  watch: {
    newUsername(){
      if (this.newUsername){
        this.isDisabled = false;
        const existing = this.accounts('website', 'lastfm');
        const duped = existing.find((item) => item.username === this.newUsername);
        duped ? ( this.formFeedback = "Duplicate username" , this.isDisabled = true ) : ( this.formFeedback = null , this.isDisabled = false );
      }
      else {
        this.isDisabled = true;
      }
    }
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
        title: "lastfm Exporter | vohzd.com",
        meta: [
          { hid: "description", name: "description", content: "Export your entire lastfm history" },
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
              clearInterval(countup)            <div class="">delete</div>

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

  .sync-grid-item {
    display: grid;
    grid-template-columns: 2fr 2fr 2fr 1fr;
  }

  .form-feedback {
    background: rgba(0,0,0,0.3);
    position: absolute;
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
    bottom: -32px;
    width: 100%;
    text-align: center;
    padding: 4px;
  }

</style>
