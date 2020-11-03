<template lang="html">
  <main class="center">
    <h3 class="mb"><img src="~/assets/img/github.png" width="128px"/></h3>

    <code class="row mbx">
      status: {{ status }}
    </code>

    <button @click="connect" v-show="status === 'waiting'">Connect</button>

  </main>
</template>

<script>

import { mapActions, mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters([
      "authServerEndpoint"
    ])
  },
  data(){
    return {
      clientID: "27be42d1d3699bbf2f70",
      status: "waiting"
    }
  },
  methods: {
    ...mapActions([
      "setToken"
    ]),
    async connect(site){
      /*  Step 1:
      Requests the users identity
      https://docs.github.com/en/free-pro-team@latest/developers/apps/authorizing-oauth-apps#1-request-a-users-github-identity
      */
      window.location = `https://github.com/login/oauth/authorize?client_id=${this.clientID}&scope=repo,user`;
    },
    detectCode(){
      /*  Step 2:
      Gets `code` from the query string params
      https://docs.github.com/en/free-pro-team@latest/developers/apps/authorizing-oauth-apps#2-users-are-redirected-back-to-your-site-by-github
      */
      if (window.location.search && window.location.search.indexOf("code=") > -1){
        this.status = "working";
        const code = window.location.search.split("code=")[1];
        console.log(code);
        this.retreiveToken(code);
      }
    },
    async retreiveToken(code){
      /*  Step 3:
      Exchanges the code for an access token
      */
      try {
        const { data } = await this.$axios.post(`${this.authServerEndpoint}/oauth/connect/github`, {
          code,
          redirectUrl: "/connect/github"
        });

        const token = data.token;

        if (token){
          await this.setToken({
            siteName: "github",
            token
          });
          this.$router.push("/manage/github");
        }
      }
      catch (e){
        console.log(e);
      }

    }
  },
  mounted(){
    this.detectCode();
  }
}

</script>

<style lang="css">

</style>
