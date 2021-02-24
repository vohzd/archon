<template lang="html">
  <section>

    <editor-menu-bar :editor="editor" v-slot="{ commands, isActive }" class="row">
      <div class="no-whitespace">
        <button :class="{ 'is-active': isActive.bold() }" @click="commands.bold" class="editor-button">
          <font-awesome-icon :icon="['fas', 'bold']"></font-awesome-icon>
        </button>

        <button :class="{ 'is-active': isActive.italic() }" @click="commands.italic" class="editor-button">
          <font-awesome-icon :icon="['fas', 'italic']"></font-awesome-icon>
        </button>

        <button :class="{ 'is-active': isActive.strike() }" @click="commands.strike" class="editor-button">
          <font-awesome-icon :icon="['fas', 'strikethrough']"></font-awesome-icon>
        </button>

        <button :class="{ 'is-active': isActive.underline() }" @click="commands.underline" class="editor-button">
          <font-awesome-icon :icon="['fas', 'underline']"></font-awesome-icon>
        </button>

        <button v-if="needsHeading" :class="{ 'is-active': isActive.heading({ level: 1 }) }" @click="commands.heading({ level: 1 })" class="editor-button">
          <font-awesome-icon :icon="['fas', 'heading']"></font-awesome-icon> 1
        </button>

        <button v-if="needsHeading" :class="{ 'is-active': isActive.heading({ level: 2 }) }" @click="commands.heading({ level: 2 })" class="editor-button">
          <font-awesome-icon :icon="['fas', 'heading']"></font-awesome-icon> 2
        </button>

        <button v-if="needsHeading" :class="{ 'is-active': isActive.heading({ level: 3 }) }" @click="commands.heading({ level: 3 })" class="editor-button">
          <font-awesome-icon :icon="['fas', 'heading']"></font-awesome-icon> 3
        </button>

        <button v-if="needsHeading" :class="{ 'is-active': isActive.heading({ level: 4 }) }" @click="commands.heading({ level: 4 })" class="editor-button">
          <font-awesome-icon :icon="['fas', 'heading']"></font-awesome-icon> 4
        </button>

        <button :class="{ 'is-active': isActive.link() }" @click="commands.link" class="editor-button">
          <font-awesome-icon :icon="['fas', 'link']"></font-awesome-icon>
        </button>
      </div>
    </editor-menu-bar>
    <editor-content :editor="editor" class="input-field row"/>
  </section>
</template>

<script>

import { Editor, EditorContent, EditorMenuBar } from "tiptap";

/* TODO -- ALLOW BUTTONS TO BE SWITCHED ON/OFF ALONG WITH DEFAULTS */
import {
  Blockquote,
  CodeBlock,
  HardBreak,
  Heading,
  OrderedList,
  BulletList,
  ListItem,
  TodoItem,
  TodoList,
  Bold,
  Code,
  Italic,
  Placeholder,
  Link,
  Strike,
  Underline,
  History
} from "tiptap-extensions";

export default {
  beforeDestroy(){
    this.editor.destroy();
  },
  components: {
    EditorContent,
    EditorMenuBar
  },
  data(){
    return {
      editor: null
    }
  },
  props: {
    existingContent: {
      type: String,
      default: ""
    },
    needsHeading: {
      type: Boolean,
      default: true
    },
    requiredKeys: {
      type: Array,
      default: () => []
    },
  },
  mounted(){
    setTimeout(() => {
      this.editor = new Editor({
        extensions: [
           new Blockquote(),
           new CodeBlock(),
           new HardBreak(),
           new Heading({ levels: [1, 2, 3] }),
           new BulletList(),
           new OrderedList(),
           new ListItem(),
           new TodoItem(),
           new TodoList(),
           new Bold(),
           new Code(),
           new Italic(),
           new Link(),
           new Strike(),
           new Underline(),
           new History(),
           new Placeholder({
             emptyEditorClass: 'is-editor-empty',
             emptyNodeClass: 'is-empty',
             emptyNodeText: 'Write something …',
             showOnlyWhenEditable: true,
             showOnlyCurrent: true,
          })
        ],
        content: null,
        onUpdate: ({ getHTML }) => {
          const html = getHTML();
          //const requiredKeys = this.requiredKeys.split("|").map((t) => t);

          let matches = [];
          let canProceed = false;

          this.requiredKeys.forEach((key, i) => {
            if (html.indexOf(key) !== -1){
              matches.push(key);
            }
          });
          canProceed = matches.length === this.requiredKeys.length ? true : false;
          html !== "<p></p>" ? this.content = html : this.content = "";
          this.$emit("can-proceed", canProceed);
          this.$emit("editor-update", this.content);
        }
      })

      this.editor.setContent(this.existingContent);
    }, 200);
  },
  watch: {
    existingContent() {
      this.editor.setContent(this.existingContent);

    }
  }
}
</script>

<style lang="css">
  p.is-empty:first-child::before {
    content: attr(data-empty-text);
    float: left;
    color: lightgray;
    pointer-events: none;
    height: 0;
  }

  .no-whitespace {
    font-size: 0px;
  }


  .ProseMirror {
    min-height: 60vh;
  }

  .ProseMirror-focused {
    outline: none;
  }


  .input-field {
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
  }


  .ProseMirror h1 {
    font-size: 32px;
  }
  .ProseMirror p {
    line-height: 32px;
  }
  .ProseMirror h1, .ProseMirror h2 {
    margin-bottom: 16px;
  }

  .ProseMirror ul {
    list-style: armenian;
    margin: 32px;
  }

</style>
