<template lang="html">
  <main class="pad">

    <div class="">
      <h2>Playlists ({{ playlistCount }})</h2>
      <div class="row mbx" v-for="playlist in playlists">
        {{ playlist }}
      </div>

    </div>




  </main>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  asyncData({ params, store }){
    console.log(store.getters.accounts);
    return {
      account: store.getters.accounts("_id", params.id)[0]
    }
  },
  data() {
    return {
      playlists: [],
      playlistCount: 0
    }
  },
  computed: {
    ...mapGetters([
      "accounts"
    ]),
  },
  methods: {
    async getPlaylists(){
      // gets them from teh local file first!

      // gets them "fresh from the interwebs"...
      const url = `https://www.googleapis.com/youtube/v3/playlists?access_token=${this.account.tokens.access_token}&part=contentDetails,snippet&mine=true&maxResults=50`
      const { data } =  await this.$axios.get(url);
      this.playlists = data.items.map((item) => {
        return {
          _id: item.id,
          channelName: item.snippet.channelTitle,
          channelID: item.snippet.channelId,
          playlistName: item.snippet.title,
          playlistCreated: item.snippet.publishedAt,
          itemCount: item.contentDetails.itemCount
        }
      });
      this.playlistCount = data.pageInfo.totalResults
    },
    async getPlaylistItems(){

      const queryIds = this.playlists.map((item) => {
        return item._id
      }).join("&id=");


      console.log(queryIds);

      const url = `https://www.googleapis.com/youtube/v3/playlistItems?access_token=${this.account.tokens.access_token}&part=contentDetails,snippet&id=${encodeURIComponent(queryIds)}&maxResults=50`


      console.log(url);
      const { data } =  await this.$axios.get(url);
      console.log(data);

    }
  },
  async mounted(){
    await this.getPlaylists();
    await this.getPlaylistItems();
  }
}
</script>

<style lang="css">
</style>
