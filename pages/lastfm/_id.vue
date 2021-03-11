<template>
  <main class="pad">
    <div class="row ">
      <h2>Managing <code>{{ account.username }}</code></h2>

      <form class="grid mt mr absolute-top-right">
        <form-button button-text="Sync Now" :is-disabled="false" :is-loading="isLoading" @click.prevent.native="handleSync"></form-button>
        <form-button button-text="Delete Account" class="subtle-button" :is-disabled="false"></form-button>
      </form>
    </div>

  </main>
</template>

<script>

import Vue from "vue";
import { mapActions, mapGetters } from "vuex";
import FormButton from "~/components/form/FormButton.vue";

export default {
  asyncData({ store, params }){
    return {
      account: store.getters.accounts('_id', params.id)[0]
    }
  },
  components: {
    FormButton
  },
  computed: {
    ...mapGetters([
      "accounts",
      "socket"
    ]),
  },
  data(){
    return {
      isLoading: false
    }
  },
  methods: {
    ...mapActions([
      "addNotification",
      "logger",
      "sync"
    ]),
    async handleSync(account, i){

      this.isLoading = true;
      this.logger("Contacting Server");

      // send
      this.socket.send(JSON.stringify({
        action: "createArchive",
        website: "lastfm",
        username: this.account.username
      }));

    }
  },
  mounted(){
    //this.logger("Waiting");
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

</style>
