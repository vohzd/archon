<template>
  <main class="pad">
    <div class="row">
      <h2>New Markdown</h2>

      <form class="row mt mb">

        <!-- filename -->
        <input placeholder="filename" v-model="filename" class="mb"/>

        <!-- file contents -->
        <div class="grid">
          <!-- tiptap html editor -->
          <div>
            <html-editor v-on:editor-update="updateMarkdown" :existing-content="htmlContent"></html-editor>
          </div>

          <!-- markdown editor -->
          <div class="markdown-editor">
            <header>
              <button class="editor-button">test</button>
            </header>
            <textarea v-model="contents" @keyup="updateHtml"></textarea>
          </div>
        </div>

        <div class="mt mb">
          <form-button @click.native.prevent="saveMarkdown" :is-disabled="isDisabled" button-text="Save"></form-button>
        </div>

      </form>


    </div>
  </main>
</template>

<script>

import Vue from "vue";
import { mapActions, mapGetters } from "vuex";

import showdown from "showdown";

import FormButton from "~/components/form/FormButton.vue";
import HtmlEditor from "~/components/form/HTMLEditor.vue";

export default {
  computed: {
    ...mapGetters([
      "accounts"
    ]),
  },
  components: {
    FormButton,
    HtmlEditor
  },
  data(){
    return {
      converter: new showdown.Converter(),
      filename: null,
      contents: null,
      isDisabled: true,
      htmlContent: null
    }
  },
  methods: {
    ...mapActions([
    ]),
    htmlToMD(html){
      //HTML -> Markdown
      return this.converter.makeMarkdown(html);
    },
    mdToHtml(md){
      //Markdown -> HTML
      return this.converter.makeHtml(md)
    },
    updateMarkdown(content){
      if (this.isDisabled){
        this.isDisabled = false;
      }

      this.contents = this.htmlToMD(content);
    },
    updateHtml(){
      console.log("test!")
      this.htmlContent = this.mdToHtml(this.contents);
      console.log(this.htmlContent)
    },
    async saveMarkdown(){
      console.log("******************************");
      console.log("method: saveMarkdown");

      //let { data } = await this.$axios.get(`/api/account/`);


      const { data } = await this.$axios.post("/api/markdown/", {
        contents: this.contents,
        filename: this.filename
      });

      console.log("YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY");
      console.log(data);
      console.log("YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY");
      console.log("******************************");

      /*
      this.filename
      this.contents
      */
    }
  },
}
</script>

<style>

</style>
