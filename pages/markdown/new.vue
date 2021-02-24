<template>
  <main class="pad">
    <div class="row">
      <h2>New Markdown</h2>

      <div class="row mt mb">

        <!-- filename -->
        <input placeholder="filename" v-model="markdownFileName" class="mb"/>

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
            <textarea v-model="markdownFileContents" @keyup="updateHtml"></textarea>
          </div>
        </div>

      </div>


      <div class="c50">
        <button>Save</button>
      </div>
    </div>
  </main>
</template>

<script>

import Vue from "vue";
import { mapActions, mapGetters } from "vuex";

import showdown from "showdown";

import HtmlEditor from "~/components/form/HTMLEditor.vue";

export default {
  computed: {
    ...mapGetters([
      "accounts"
    ]),
  },
  components: {
    HtmlEditor
  },
  data(){
    return {
      converter: new showdown.Converter(),
      markdownFileName: null,
      markdownFileContents: null,
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
      this.markdownFileContents = this.htmlToMD(content);
    },
    updateHtml(){
      console.log("test!")
      this.htmlContent = this.mdToHtml(this.markdownFileContents);
      console.log(this.htmlContent)
    }
  },
}
</script>

<style>

</style>
