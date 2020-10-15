<template lang="html">

  <main class="center">
    <!-- PROBABLY NEEDS DEPRECATION

    <h2>Auth</h2>
    <div class="">
      status: {{ status }}
    </div>-->
  </main>
</template>

<script>
/*
export default {
  data (){
    return {
      status: "waiting",
      github: {
        clientId: "123",
        clientSecret: "321"
      }
    }
  },
  methods: {
    async auth(){
      const code = window.location.search.split("code=")[1];
      this.status = "authorising...";
      const authReq = await this.$axios.post("https://github.com/login/oauth/access_token", {
        client_id: this.clientId,
        client_secret: this.clientSecret,
        code: code
      });
      console.log(authReq);
    }
  },
  mounted(){
    this.auth();
  },
}*/
</script>

<style lang="css">

</style>
