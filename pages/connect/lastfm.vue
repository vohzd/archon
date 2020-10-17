<template lang="html">
  <main class="center">
    <h1>Lastfm sync</h1>
    <p>No user associated with archon</p>
    <div class="row">
      <input v-model="user" placeholder="What's your lastfm username?!">
    </div>
    <div v-if="user">
      <button @click="handleClick">Link Accounts</button>
    </div>
  </main>
</template>

<script>


import { mapActions } from "vuex";

export default {
  data(){
    return {
      user: null
    }
  },
  methods: {
    ...mapActions([
      "linkAccount"
    ]),
    handleClick(){
      this.linkAccount({
        siteName: "lastfm",
        user: this.user
      })
    }
  }
}
</script>

<style lang="css">

</style>
