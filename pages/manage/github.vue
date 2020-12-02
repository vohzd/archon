<template lang="html">
  <div class="">


    <div class="user-panel row" v-if="user">
      <h1 class="mb">Welcome, {{ user.login }}</h1>
      <div class="row small mb">
        <!--status: {{ status }}-->

        {{ user }}
      </div>
      <div class="grid row">
        <div class="grid-item">
          <img :src="user.avatar_url" class="row">
        </div>
        <div class="grid-item">
          <div class="row">
            Num repos: {{ totalRepos }}
          </div>
          <button class="row mt" @click="archive">Archive Everything</button>
        </div>
      </div>
    </div>
    <div class="row mt">
      <div class="row">
        <div class="c50">
          <div class="pad">
            <h2>Personal Repos <span v-if="repos">{{ repos.length }}</span></h2>
            <div class="row mb" v-for="repo in repos">
              <strong>{{ repo.name }}</strong>
              <strong>{{ repo.full_name }}</strong>
              <code class="row">{{ repo.description }}</code>
              <small class="row">{{ repo.clone_url }}</small>
            </div>
          </div>
        </div>
        <div class="c50">
          <div class="pad">
            <h2>Starred Repos <span v-if="repos">{{ stars.length }}</span></h2>
            <div class="row mb" v-for="(star, i) in stars" :class=" { 'is-archiving': currentNumber === i } ">
              <strong>{{ star.name }}</strong>
              <strong>{{ star.full_name }}</strong>
              <code class="row">{{ star.description }}</code>
              <small class="row">{{ star.clone_url }}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { mapActions, mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters([
      "githubToken"
    ])
  },
  data(){
    return {
      amountRequested: 30,
      repos: [],
      orgs: [],
      stars: [],
      totalRepos: 0,
      reposPage: 0,
      starsPage: 0,
      currentNumber: 0,
      user: null,
      isDisabled: true,
      ws: null,
      status: "waiting..."
    }
  },
  async mounted(){
    if (this.githubToken){
      this.init();
    }
  },
  methods: {
    async connectToWSS(){

      return new Promise((resolve, reject) => {
        console.log("inside promise");
        this.ws = new WebSocket("ws://localhost:3000");

        this.ws.onopen = (event) => {
          console.log("WEBSOCKET OPENED");
          console.log(event);
          resolve()
        }

        this.ws.onerror = (err) => {
          reject(err);
        }

        this.ws.onmessage = (response) => {
          console.log("MESSAGE RECEIVED");
          console.log(response)
        };

      });
      console.log("connecting...")


    },
    async init(){
      this.status = "retreiving user...";
      await this.getUser();
      this.status = "retreiving repos...";
      await this.getRepos();

      /*
      await this.getOrgs();
      await this.getOrgRepos();
      this.status = "getting repos...";
      const numPagesRepos = Math.round(this.totalRepos / this.amountRequested);
      console.log(numPagesRepos);

      for (let i=0; i <= numPagesRepos; i++){
        await this.getRepos();
      }

*/
      //this.status = "getting stars...";
      //this.status = "ready to archive!";


      //console.log(this.user);


      this.isDisabled = false;
    },
    async archive(){

      /*
      if (!this.ws){
        console.log("connect to the server for me please");
        await this.connectToWSS();
      }*/

      await this.connectToWSS();

      console.log(this.ws)

      this.ws.send(JSON.stringify({
        type: "sync-github",
        data: {
          repos: this.repos,
          user: this.user
        }
      }))

    },
    async getUser(){
      try {
        const { data } = await this.$axios.get(`https://api.github.com/user`, { headers: { "Authorization": `token ${this.githubToken}` } });
        this.user = data;
        this.totalRepos = this.user.public_repos + this.user.total_private_repos;
      }
      catch (e){ console.log(e) }
    },
    async getOrgs(){
      try {
        const { data } = await this.$axios.get(`${this.user.organizations_url}?type=all&per_page=100`, { headers: { "Authorization": `token ${this.githubToken}` } });
        this.orgs = data;
      }
      catch (e){ console.log(e) }
    },
    async getOrgRepos(){
      this.orgs.forEach(async (org, i) => {
        const repoReq = await this.$axios.get(`${org.repos_url}?type=all&per_page=${this.amountRequested}`, { headers: { "Authorization": `token ${this.githubToken}` } });
        this.totalRepos += repoReq.data.length
      })

    },
    async getRepos(){
      try {
        console.log("GETTING REPOS");
        console.log(this.reposPage);
        const reposReq = await this.$axios.get(`https://api.github.com/user/repos?type=all&per_page=${this.amountRequested}&page=${this.reposPage}`, { headers: { "Authorization": `token ${this.githubToken}` } });
        console.log(reposReq);
        console.log(reposReq.headers.link);
        //this.repos.push(...data)
        //this.reposPage++;
      }
      catch (e){ console.log(e) }
    },
    async getStars(){
      console.log("getting starred");
      try {
        const { data } = await this.$axios.get(`https://api.github.com/users/${this.user.login}/starred?per_page=${this.amountRequested}&page=${this.starsPage}`, { headers: { "Authorization": `token ${this.githubToken}` } });
        console.log(data);
        this.stars.push(...data)
        this.starsPage++;
      }
      catch (e){ console.log(e) }

    }
  },
  watch: {
    githubToken() {
      if (this.githubToken){
        this.init();
      }
    }
  }
}
</script>

<style lang="css" scoped>

.is-archiving {
  opacity: 0.2;
}

</style>
