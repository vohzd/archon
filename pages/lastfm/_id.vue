<template>
  <main class="pad">
    <div class="row ">
      <h2>Managing <code>{{ account.username }}</code></h2>

      <form class="grid mt mr absolute-top-right">
        <form-button button-text="Sync Now" :is-disabled="false" @click.prevent.native="handleSync"></form-button>
        <form-button button-text="Delete Account" class="subtle-button" :is-disabled="false"></form-button>
      </form>
    </div>
    <div class="row mtx">
      <h3 class="strong mb">Activity Log</h3>
      <div class="reversed-list">
        <div class="status-update" v-for="status in statuses">{{ status }}</div>
      </div>

    </div>
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
  asyncData({ store, params }){
    console.log("async")
    console.log(params)
    return {
      account: store.getters.accounts('_id', params.id)[0]
    }
  },
  data(){
    return {
      statuses: [],
      socketConnection: null,
    }
  },
  methods: {
    ...mapActions([
      "sync"
    ]),
    logger(msg){
      const now = Date.now()
      this.statuses.push(`> ${ new Date(Date.now()).toUTCString() } - ${ msg }`)
    },
    async createSocket(){
      return new Promise((resolve, reject) => {
        this.socketConnection = new WebSocket("ws://localhost:3000");
        this.socketConnection.onopen = (event) => resolve();
        this.socketConnection.onerror = (err) => reject(err);
      });
    },
    async handleSync(account, i){

      this.logger("Bootstrapping");

      if (!this.socketConnection){
        await this.createSocket();
      }

      this.logger("Websocket Established");

      // send
      this.socketConnection.send(JSON.stringify({
        action: "createArchive",
        website: "lastfm",
        username: this.account.username
      }));

      // receive
      this.socketConnection.onmessage = (message) => {
        console.log("message received from server")
        console.log(message)
        this.logger(message.data);
      };
    }
  },
  mounted(){
    this.logger("Waiting");
  }
}

</script>
<style>

  code {
    font-size: 26px;
    background: rgba(0,0,0,0.3);
    padding: 0 4px 0 4px;
    border-radius: 3px;
  }

  .reversed-list {
    display: flex;
    flex-direction: column-reverse;
  }

  .status-update {
    font-size: 11px;
    background: rgba(0,0,0,0.3);
    padding: 0 8px 0 8px;
    border-radius: 3px;
    margin-bottom: 8px;
  }

</style>
