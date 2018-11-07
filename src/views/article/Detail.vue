<template>
  <!--<div class="row">-->
    <div class="wrap">
      <!-- Main -->
      <div class="container" v-loading="loading">
        <div class="row main">
          <div class="col-md-9 side-left topics-show" style="margin-bottom: 20px;">
            <!-- view show -->
            <div class="topic panel panel-default" style="border: 1px solid white !important;">
              <div class="infos panel-heading">
                <h1 class="panel-title topic-title">{{ article.title }}</h1>
                <div class="meta inline-block">
                  <!--<a class="author" href="/users/1">{{article.author}}</a>-->
                  <!--<abbr class="timeago">{{article.created_at}}</abbr>-->
                  <!--&nbsp;{{article.click}} 阅读-->
                  <span class="stress"><el-tag size="mini" type="danger">{{ article.author }}</el-tag></span>
                  <span class=""><el-tag size="mini" type="success">{{ article.insert_at }}</el-tag></span>
                  <span><el-tag size="mini">{{ article.click }} 浏览</el-tag></span>
                </div>
                <div class="clearfix"></div>
              </div>
              <div class="content-body entry-content panel-body">
                <div class="markdown-body" v-html="article.html" v-highlight>
                </div>
              </div>
              <div class="tag">
                <el-tag class="el-tag" type="info" v-for="tag in article.tags">
                  <a href="#">{{tag.name}}</a>
                </el-tag>
              </div>
              <!--<i class="icon tags"></i>-->
              <!--<a class="ui label" href="https://laravel-china.org/topics/tags/laravel/58">#{{tag.name}}</a>-->
            </div>
          </div>
          <div class="col-md-3">
            <div class="row">
              <TheSidebar/>
            </div>
          </div>
        </div>
        <div id="SOHUCS" v-bind:sid="article.id" ></div>
      </div>

    </div>
  <!--</div>-->
</template>
<script>
  (function(){
    let appid = 'cytqQ3UCY';
    let conf = 'prod_56dc6de0c5884b5a15644b39231234d5';
    let width = window.innerWidth || document.documentElement.clientWidth;
    if (width < 960) {
      window.document.write('<script id="changyan_mobile_js" charset="utf-8" type="text/javascript" src="https://changyan.sohu.com/upload/mobile/wap-js/changyan_mobile.js?client_id=' + appid + '&conf=' + conf + '"><\/script>'); } else { let loadJs=function(d,a){let c=document.getElementsByTagName("head")[0]||document.head||document.documentElement;let b=document.createElement("script");b.setAttribute("type","text/javascript");b.setAttribute("charset","UTF-8");b.setAttribute("src",d);if(typeof a==="function"){if(window.attachEvent){b.onreadystatechange=function(){let e=b.readyState;if(e==="loaded"||e==="complete"){b.onreadystatechange=null;a()}}}else{b.onload=a}}c.appendChild(b)};loadJs("https://changyan.sohu.com/upload/changyan.js",function(){window.changyan.api.config({appid:appid,conf:conf})}); } })();
  import TheSidebar from '@/components/layouts/TheSidebar';
  export default {
    name: 'Detail',
    components: {
      TheSidebar
    },
    data() {
      return {
        article: {},
        loading: true
      }
    },
    created() {
      console.log(this.$route.params.id);
      let articleId = this.$route.params.id;
      // this.$axios.get('http://api.songyaofeng.com/api/article/show?article_id=' + articleId)
      this.$axios.get('https://www.songyaofeng.xyz/api/article/show?article_id=' + articleId)
        .then(response => {
          this.article = response.data;
          // console.log(this.article.tag);
        })
        .then(() => {
          this.loading = false;
        });
    },
  }
</script>
<style lang="scss">
  @media only screen and (max-device-width: 480px) and (min-device-width: 120px) {
    .container {
      padding: 0 7px;
    }
  }
  .panel-topic {
    border-radius: 0px;
    -webkit-box-shadow: none;
    box-shadow: none;
    border: 1px solid white;
    margin-bottom: 20px;
    background-color: #fff;
  }
  .content-body {
    white-space: normal !important;
  }
  .tag {
    margin-left: 2em;
    margin-bottom: 1.8em;
  }

  .el-tag {
    margin-right: 0.5em !important;
    word-break:break-all;
    width:auto;
  }

  /*.panel {*/
    /*padding: 10px !important;*/
  /*}*/

</style>
