<template>
  <main>
    <div class="row pad">
      <h1>Markdown Scribe</h1>
      <p>Use this to read/write markdown with sorting/ordering</p>
      <div class="row mt mb">
        Current: none
      </div>

      <div class="c50">
        <nuxt-link to="/markdown/new"><button>New Markdown</button></nuxt-link>
      </div>
    </div>
  </main>
</template>

<script>

import Vue from "vue";
import { mapActions, mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters([
      "accounts"
    ]),
  },
  data(){
    return {
    }
  },
  methods: {
    ...mapActions([
    ]),
  }
}
</script>

<style>

</style>
