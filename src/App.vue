<template>
  <div id="wrap">
    <TheHeader/>
    <div id="main-container" class="container main-container main-col">
      <router-view/>
    </div>
    <TheFooter/>
  </div>
</template>

<script>
import TheHeader from '@/components/layouts/TheHeader';
import TheFooter from '@/components/layouts/TheFooter';
import Login from '@/views/auth/Login';

export default {
  name: 'App',
  components: {
    TheHeader,
    TheFooter,
    Login,
  }
}
</script>

<!--<link rel="stylesheet" media='all' href="styles/bootstrap.min.css">-->
<style lang="scss">
  $container-large-desktop: 1200px;
  $btn-primary-bg: #00b5ad;
  $btn-primary-border: #00b5ad;
  $label-primary-bg: #00b5ad;
  $pagination-active-bg: #00b5ad;
  $pagination-active-border: #00b5ad;
  $pagination-color: #00b5ad;
  $input-border-focus: #00b5ad;
  $link-color: #12c4c5;
  $link-hover-color: #22ddde;
  $icon-font-path: "~bootstrap-sass/assets/fonts/bootstrap/";
  $fa-font-path: "~font-awesome/fonts/";

  @import "~bootstrap-sass/assets/stylesheets/_bootstrap";
  @import "~font-awesome/scss/font-awesome";
  /*@import "styles/style";*/
  @import "./styles/main";
  @import "./styles/extra";
  .main-col {
    padding-left: 0px !important;
  }
  .topics-show {
    position: relative;
    background: #FFFFFF;
    -webkit-box-shadow: 0px 1px 2px 0 rgba(34, 36, 38, 0.15);
    box-shadow: 0px 1px 2px 0 rgba(34, 36, 38, 0.15);
    //margin: 1rem 0em;
    /*padding: 1em 1em;*/
    border-radius: 0.28571429rem;
    border: 1px solid rgba(34, 36, 38, 0.15);
  }
  .navbar-default .navbar-brand img {
    width: auto !important;
    height: 40px !important;
    margin-top: -33px !important;
  }
  .navbar-default {
    border-top: 4px solid #f9438b !important;
    height: auto !important;
    min-height: 54px !important;
  }

  .hljs {
    display: block !important;
    overflow-x: auto !important;
    background: transparent !important;
    color: #a39e9b !important;
    padding: 0.5em !important;
  }

  .content-body img {
    width: 100% !important
  }
  /*@media only screen and (max-device-width: 480px) and (min-device-width: 120px) {*/
    /*.container {*/
      /*padding: 0 7px;*/
    /*}*/
  /*}*/


  /*body > .container { margin-top: 15px }*/
</style>
