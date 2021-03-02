<template lang="html">
  <div>
    connecting...
  </div>
</template>

<script>
export default {
  async mounted() {
    // this page only really gets called when a user has successfully authenticated
    // they get redirected to this page by google with a ?code=BLARG in the URL
    // we can then send that to our server to complete the authentication
    const search = window.location.search;
    let code = search.split("?code=")[1];
        code = code.split("&scope")[0];
        // it'll have a / (forward slash in it)
        code = decodeURIComponent(code)
    console.log(code);
    if (code){
      try {

        //
        let { data } = await this.$axios.post(`/api/oauth/complete-auth`, {
          website: "youtube",
          token: code
        });

        console.log("completed....");
        console.log(data);

      }
      catch (e){
        console.log(e);
      }

    }
    else {
      console.log("no code");
    }
  }
}
</script>
