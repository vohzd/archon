<template>
  <section>
    <side-toolbar></side-toolbar>
    <nuxt class="main-view" />
  </section>
</template>

<script>

import Sidebar from "~/components/Sidebar.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    "side-toolbar": Sidebar
  },
  computed: {
    ...mapGetters([
      "accounts"
    ])
  }
};
</script>

<style lang="css">

@font-face {
    font-family: "firacode";
    src: url("~assets/fonts/firacode.ttf");
    font-weight: normal;
    font-style: normal;
}

:root {
    --main: #fff;
    --link: #9E713A;
    --header-bg: #EBB46F;
    --button: #EBB36E;
    --button-lighter: #ecb875;
    --background: #232529;
    --light-text: #fff;
    --dark-text: #120C1C;
  }


html,body,p,ol,ul,li,dl,dt,dd,blockquote,figure,fieldset,legend,textarea,pre,iframe,hr,h1,h2,h3,h4,h5,h6{margin:0;padding:0}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:normal}ul{list-style:none}button,input,select,textarea{margin:0}html{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}iframe{border:0}table{border-collapse:collapse;border-spacing:0}td,th{padding:0;text-align:left}

body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: "firacode";
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
  background: var(--background);
  color: var(--light-text);
  font-size: 18px;
  text-shadow: 1px 1px rgba(0,0,0,0.05);
  line-height: 1.5em;
  position: relative;
}

pre {
  font-family: "firacode", monospace;
  line-height: 110%;
  margin: 0px;
  white-space: pre-wrap;
}

a {
  letter-spacing: 3px;
  text-decoration: none;
  color: var(--link);
}

a:focus {
    outline:0;
}

a:active,
a:hover {
    outline: 0;
    opacity: 0.7;
}

h1 {
  font-size: 28px;
}

h2 {
  font-size: 22px;
}


button {
  padding: 16px;
  outline: none;
  border-radius: 3px;
  border: 0px;
  background: var(--button);
  color: var(--dark-text);
  font-family: "firacode", monospace;
  transition: 0.4s all;
}


input, textarea {
  padding: 16px;
  width: 100%;
  border-radius: 3px;
  outline: none;
  border: 0px;
  background: rgba(255, 255, 255, 0.05);
  color: var(--light-text);
  font-family: "firacode", monospace;
  transition: 0.4s all;
}


input:focus, textarea:focus {
  background: rgba(255, 255, 255, 0.12);
}

textarea {
  resize: vertical;
}

button[disabled] {
  background: rgba(164, 55, 116, 0.04);
  color: rgba(255, 255, 255, 0.14);
}

button[disabled]:hover {
  cursor: not-allowed;
}

button:hover:not(:disabled) {
  cursor: pointer;
  opacity: 0.7;
}

button::-moz-focus-inner {
  border: 0;
}


.relative {
  position: relative;
}

.main-view {
  margin: auto;
  height: 100vh;
  margin-left: 256px;
}

.mt {
  margin-top: 16px;
}

.mb {
  margin-bottom: 16px;
}

.ml {
  margin-left: 16px;
}

.mr {
  margin-right: 16px;
}

.mtx {
  margin-top: 128px;
}

.mbx {
  margin-bottom: 128px;
}

.pad {
  padding: 32px;
  display: inline-block;
}

.row {
  width: 100%;
  float: left;
}


.center {
  text-align: center;
}

.c40 {
  float: left;
  width: 40%;
}

.c48 {
  float: left;
  width: 48%;
}

.c50 {
  float: left;
  width: 50%;
}

.c60 {
  float: left;
  width: 60%;
}
.c75 {
  float: left;
  width: 75%;
}

.c33 {
  float: left;
  width: 33%;
}

.c30 {
  float: left;
  width: 30%;
}

.c25 {
  float: left;
  width: 25%;
}

.absolute-top-right {
  position: absolute;
  top: 0;
  right: 0;
}

.nuxt-link-exact-active {
  opacity: 0.33;
}

.scroll {
  overflow-y: scroll;
  overflow-x: hidden;
}

.massive {
  font-size: 28px;
}

.medium {
  font-size: 12px;
}

.tiny {
  font-size: 10px;
}

.tags {
  display: inline-block;
}

.min-height {
    min-height: 400px;
}

.tag {
  padding: 6px;
  float: left;
  margin-right: 6px;
  margin-bottom: 6px;
  font-size: 10px;
  line-height: 16px;
  background: rgba(255,255,255,0.1);
}

.flex-wrapper {
  display: flex;
}

.flex-column {
  flex-direction: column;
}

.flex-item {
  flex: 1;
}

.grid {
  display: grid;
  grid-column-gap: 32px;
  grid-template-columns: 1fr 1fr;
}

.input-grid {
  display: grid;
  grid-template-columns: 9fr 1fr;
}


  .lds-ellipsis div {
      position: absolute;
      top: 1px;
      width: 11px;
      height: 11px;
      border-radius: 50%;
      background: rgba(0,0,0,0.15);
      animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }
  .lds-ellipsis div:nth-child(1) {
      left: 6px;
      animation: lds-ellipsis1 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(2) {
      left: 6px;
      animation: lds-ellipsis2 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(3) {
      left: 26px;
      animation: lds-ellipsis2 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(4) {
      left: 45px;
      animation: lds-ellipsis3 0.6s infinite;
  }
  @keyframes lds-ellipsis1 {
      0% {
          transform: scale(0);
     }
      100% {
          transform: scale(1);
     }
  }
  @keyframes lds-ellipsis3 {
      0% {
          transform: scale(1);
     }
      100% {
          transform: scale(0);
     }
  }
  @keyframes lds-ellipsis2 {
      0% {
          transform: translate(0, 0);
     }
      100% {
          transform: translate(19px, 0);
     }
  }

  .input-grid input{
    border: 0px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
  }

  .input-grid  .secondary-button {
    border: 0px;
    background: rgba(164, 55, 116, 0.24);
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    color: var(--light-text);
  }

@media (max-width: 1600px) {
  .main-view {
    width: 80%;
  }


}

@media (max-width: 1000px) {
  .main-view {
    width: 96%;
    margin-left: 2%;
    margin-right: 2%;
  }

}
</style>
