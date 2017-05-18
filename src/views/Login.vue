<template>
  <div class="mu-banner">
    <h1>Login</h1>
    <mu-divider/>
    <mu-icon-button icon="exit_to_app" to="/hello"/> 登录
  </div>
</template>

<script>
  export default {}
</script>

<style scoped>
  .mu-banner{
    z-index: 100;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
  }
</style>
