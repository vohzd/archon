<template lang="html">
  <div class="">
    <code>
      {{ user }}
    </code>
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
      user: null
    }
  },
  async mounted(){
    console.log(this.githubToken);
    this.getUser();
  },
  methods: {
    async getUser(){
      if (this.githubToken){
        try {
          const { data } = await this.$axios.get(`https://api.github.com/user`, { headers: { "Authorization": `token ${this.githubToken}` } });
          this.user = data;
        }
        catch (e){
          console.log(e);
        }
      }
    }
  }
}
</script>

<style lang="css" scoped>
</style>
