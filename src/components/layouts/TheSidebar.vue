<template>
  <div class="side-bar">
    <Profile/>
    <HotArticle/>
    <RandomArticle/>
    <!--<HotTag/>-->
  </div>
</template>

<script>
  import Slider from '@/components/Slider'
  import HotArticle from '@/components/HotArticle'
  import RandomArticle from '@/components/RandomArticle'
  import HotTag from '@/components/HotTag'
  import Profile from '@/components/Profile'
  export default {
    name: 'TheSidebar',
    components: {
      Slider,
      HotArticle,
      RandomArticle,
      HotTag,
      Profile
    },
    data() {
      return {

      }
    }
  }
</script>

<style scoped>
  .main-col,.side-bar {
    padding-left: 7px;
    padding-right: 0px;
    /*margin-left: 2em !important;*/
  }
</style>
