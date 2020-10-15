<template lang="html">
  <main class="center">
    <h1>Link {{ siteName  }}</h1>

  </main>
</template>

<script>

export default {
  asyncData({ params }){
    return {
      siteName: params.id,
      url: null
    }
  },
  async mounted(){
    try {
      const { data } = await this.$axios.post(`http://localhost:1080/oauth/connect/youtube`, {
        redirectURL: "http://localhost:3000/connect"
      });
      window.location = data.url
    }
    catch (e){
      console.log(e);
    }
  }
}
</script>

<style lang="css">

</style>
