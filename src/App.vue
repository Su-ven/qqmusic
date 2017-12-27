<template>
  <div id="app">
    <MHeader></MHeader>
    <MNav></MNav>
    <router-view/>
  </div>
</template>

<script type="text/ecmascript-6">
  import MHeader from 'layouts/m_header'
  import MNav from 'layouts/m_nav'
  export default {
    components: {
      MHeader,
      MNav,
    }
  }
</script>

<style>
  @import './styles/reset.css'
</style>
