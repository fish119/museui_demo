<template>
  <mu-drawer :open="open" @close="handleClose" :docked="docked" :overlay="docked" :zDepth="1" class="app-drawer">
    <mu-appbar :zDepth="0" class="exmaples-nav-appbar">
      <a href="#/index" class="appbar-title">Fish119</a>
      <mu-avatar slot="left" src="../../static/images/fish.png" backgroundColor="transparent"/>
    </mu-appbar>

  </mu-drawer>
</template>

<script>
  import MuAvatar from "../../node_modules/muse-ui/src/avatar/avatar";
  export default {
    components: { MuAvatar },
    props: {
      open: {
        type: Boolean,
        default: true
      },
      docked: {
        type: Boolean,
        default: true
      }
    },
    data () {
      return {}
    },
    methods: {
      handleClose () {
        this.$emit('close')
      },
    }
  }
</script>

<style>
  .app-drawer {
    display: flex;
    flex-direction: column;
  }
  .appbar-title {
    color: inherit;
    display: inline-block;
  }
  .exmaples-nav-appbar{
    flex-shrink: 0;
  }
</style>
