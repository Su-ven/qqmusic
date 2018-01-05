<template>
  <div id="app">
    <MHeader></MHeader>
    <MNav></MNav>
    <router-view/>
    <MFooter></MFooter>
  </div>
</template>

<script type="text/ecmascript-6">
  import MHeader from 'layouts/m_header'
  import MNav from 'layouts/m_nav'
  import MFooter from 'layouts/m_footer'
  export default {
    components: {
      MHeader,
      MNav,
      MFooter,
    }
  }
</script>

<style>
  @import './styles/reset.css'
</style>
