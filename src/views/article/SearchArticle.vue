<template>
  <div class="row">
    <div class="panel panel-default list-panel home-topic-list">
      <div class="panel-heading">
        <h3 class="panel-title text-center">最近更新</h3>
      </div>

      <div class="panel-body" v-loading="loading">
        <ul class="list-group row topic-list">
          <li class="list-group-item media col-md-6" v-for="article in articles" style="margin-top: 0px;">
            <a class="reply_last_time hidden-xs meta" href="#">
              <span class="stress"><el-tag size="mini" type="success">{{ article.insert_at }}</el-tag></span>
              <span><el-tag size="mini">{{ article.click }} 浏览</el-tag></span>
            </a>

            <div class="avatar pull-left">
              <a href="/users/1">
                <img class="media-object img-responsive img-thumbnail avatar avatar-middle" :src="imgSrc">
              </a>
            </div>

            <div class="infos">
              <div class="media-heading">
                <span class="hidden-xs label label-default channel_featured channel_top">{{article.category_id}}</span>
                <router-link :to="'/article/' + article.id">{{ article.title }}</router-link>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'SearchArticle',
    data() {
      return {
        imgSrc: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=154816243,285037458&fm=26&gp=0.jpg',
        articles: {},
        loading: true,
        value: '',
      }
    },
    created() {
      let value = this.$route.params.word;
      this.value = value;
      this.getIndexArticle(value);
    },

    methods: {
      getIndexArticle(value) {
        // this.$axios.get('http://api.songyaofeng.com/api/articles', {params:{
        this.$axios.get('https://www.songyaofeng.xyz/api/articles', {params:{
            word: value
          }})
          .then(response => {
            this.articles = response.data;
          })
          .finally(() => this.loading = false);
      }
    }
  }
</script>
<style scoped>
  .panel {
    border-radius: 6px;
    -webkit-box-shadow: none;
    box-shadow: none;
    margin-top: 15px !important;
    border: 1px solid #dde2e8;
  }
  .topic-list .list-group-item {
    height: 58px;
    line-height: 34px;
  }
  .list-group {
    padding: 0 17px;
  }

  .content-body img {
    vertical-align: middle !important;
    width: 100% !important;
  }
</style>
