<template>
  <div id="app">
    <mu-appbar :zDepth="0" :class="{'nav-hide': !open}" class="appbar">
      <mu-icon-button @click="toggleNav" icon="menu" slot="left"/>
      <mu-icon-button slot="right" target="_blank" href="https://github.com/fish119" icon=":mudocs-icon-custom-github"/>
    </mu-appbar>
    <app-nav @close="toggleNav" :open="open" :docked="docked"></app-nav>
    <div class="content" :class="{'nav-hide': !open}">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import AppNavDrawer from './components/AppNavDrawer'
  export default {
    name: 'app',
    components: {
      'app-nav': AppNavDrawer
    },
    data(){
      const desktop = isDesktop()
      return {
        open: desktop,
        docked: desktop,
        desktop: desktop,
        title: ''
      }
    },
    methods: {
      toggleNav () {
        this.open = !this.open
      },
      changeNav () {
        const desktop = isDesktop()
        this.docked = desktop
        if (desktop === this.desktop) return
        if (!desktop && this.desktop && this.open) {
          this.open = false
        }
        if (desktop && !this.desktop && !this.open) {
          this.open = true
        }
        this.desktop = desktop
      }
    },
    mounted () {
      this.changeNav()
      this.handleResize = () => {
        this.changeNav()
      }
//      let self = this;
//      this.handleResize = function(){
//        self.changeNav()
//      }
      window.addEventListener('resize', this.handleResize)
    }
  }

  function isDesktop() {
    return window.innerWidth > 993
  }
</script>

<style lang="less">
  @easeOutFunction: cubic-bezier(0.23, 1, 0.32, 1);
  @easeInOutFunction: cubic-bezier(0.445, 0.05, 0.55, 0.95);

  .appbar{
    position: fixed;
    left: 256px;
    right: 0;
    top: 0;
    width: auto;
    transition: all .45s @easeOutFunction;
    &.nav-hide {
      left: 0;
    }
  }

  .content{
    padding-top: 56px;
    padding-left: 256px;
    transition: all .45s @easeOutFunction;
    &.nav-hide {
      padding-left: 0;
    }
  }

  .content-wrapper{
    padding: 48px 72px;
  }

  @media (min-width: 480px) {
    .content{
      padding-top: 64px;
    }
  }

  @media (max-width: 993px) {
    .appbar {
      left: 0;
    }
    .content{
      padding-left: 0;
    }
    .content-wrapper {
      padding: 24px 36px;
    }
  }
  .home-page{
    padding: 0;
    .content {
      transition-duration: 0s;
    }
  }
</style>
