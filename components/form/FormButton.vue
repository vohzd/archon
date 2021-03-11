<template>
  <button :disabled="isDisabled" :class=" { 'disabled-button': isDisabled, 'cta-button': isFancy } ">
    <span v-if="!isLoading">
      {{ buttonText }}
      <span v-if="isFancy" class="button-hidden-icon small"><font-awesome-icon :width="8" :icon="['fas', 'chevron-right']"></font-awesome-icon></span>
    </span>
    <loading-dots v-else></loading-dots>
  </button>
</template>

<script>
import LoadingDots from "~/components/misc/LoadingDots.vue";

export default {
  components: {
    LoadingDots
  },
  props: {
    isDisabled: {
      type: Boolean,
      default: true,
    },
    isFancy: {
      type: Boolean,
      default: false
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
    buttonText: {
      type: String,
      default: "Update"
    }
  }
}
</script>

<style lang="css">

  .cta-button {
    background: var(--button);
    transition: 0.2s all;
    min-height: 64px;
    min-width: 128px;
    text-align: center;
    transition-delay: 0.2s;
  }

  .cta-button:hover:not(.secondary-button):not(:disabled) {
    cursor: pointer;
    transform: scale(1);
    color: var(--text);
    padding-right: 48px;
    background-image: linear-gradient(45deg, var(--button) 25%, var(--button-lighter) 25%, var(--button-lighter) 50%, var(--button) 50%, var(--button) 75%, var(--button-lighter) 75%, var(--button-lighter) 100%) !important;
    background-size: 22.63px 22.63px ;
    animation: button-animated-bg 5s infinite linear;
  }


  .button-hidden-icon:not(:disabled) {
    top: -8px;
    right: 22px;
    font-size: 12px;
    position: absolute;
    background: rgba(255,255,255,1);
    border-radius: 50%;
    height: 24px;
    width: 24px;
    text-align: center;
    line-height: 26px;
    color: #523a18;
  }

  .cta-button:not(.secondary-button):not(:disabled) .button-hidden-icon {
    transition: 0.2s all;
    transition-delay: 0.1s;
    transition-timing-function: ease-in-out;
    opacity: 0;
  }

  .cta-button:hover:not(.secondary-button):not(:disabled) .button-hidden-icon {
    top: 16px;
    right: 16px;
    opacity: 1;
  }

  button:disabled {
    opacity: 0.3;
  }

  .cta-button:disabled .button-hidden-icon {
    opacity: 0;
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

  @keyframes button-animated-bg {
      0%   {background-position: 0px 0px;}
      100% {background-position: 128px 0px;}
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


</style>
