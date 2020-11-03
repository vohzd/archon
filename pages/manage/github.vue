<template lang="html">
  <div class="">


    <div class="user-panel row" v-if="user">
      <h1 class="mb">Welcome, {{ user.login }}</h1>
      <div class="grid">
        <div class="grid-item">
          <img :src="user.avatar_url" class="row">
        </div>
        <div class="grid-item">
          <div class="row">
            Num repos: {{ repos.length }}
          </div>
          <button class="row mt">Archive All</button>
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
            <div class="row mb" v-for="star in stars">
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
      repos: [],
      stars: [],
      totalRepos: 0,
      reposPage: 0,
      starsPage: 0,
      user: null
    }
  },
  async mounted(){
    if (this.githubToken){
      await this.getUser();
      for (let i=0; i < 10; i++)
      {
        await this.getRepos();
        await this.getStars();
      }
    }
  },
  methods: {
    async getUser(){
      try {
        const { data } = await this.$axios.get(`https://api.github.com/user`, { headers: { "Authorization": `token ${this.githubToken}` } });
        this.user = data;
        this.totalRepos = this.user.public_repos + this.user.total_private_repos
      }
      catch (e){ console.log(e) }
    },
    async getRepos(){
      try {
        const { data } = await this.$axios.get(`https://api.github.com/user/repos?type=all&per_page=100&page=${this.reposPage}`, { headers: { "Authorization": `token ${this.githubToken}` } });
        this.repos.push(...data)
        this.reposPage++;
      }
      catch (e){ console.log(e) }
    },
    async getStars(){
      console.log("getting starred");
      try {
        const { data } = await this.$axios.get(`https://api.github.com/users/${this.user.login}/starred?per_page=100&page=${this.starsPage}`, { headers: { "Authorization": `token ${this.githubToken}` } });
        console.log(data);
        this.stars.push(...data)
        this.starsPage++;
      }
      catch (e){ console.log(e) }

    },
  }
}
</script>

<style lang="css" scoped>
</style>
