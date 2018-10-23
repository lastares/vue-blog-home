<template>
  <div class="panel panel-default corner-radius panel-hot-topics" style="border-radius: 0.28571429rem !important;">
    <div class="panel-heading">
      <h3 class="panel-title"><i class="fa fa-area-chart"></i> 随机文章</h3>
    </div>
    <div class="panel-body">
      <ul class="list" id="hots">
        <li v-for="(article, index) in articles">{{index + 1}}. <router-link :to="'/article/' + article.id">{{article.title}}</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'RandomArticle',
    data() {
      return {
        articles: {}
      }
    },
    created() {
      this.getRandomArticle();
    },
    methods: {
      getRandomArticle() {
        this.$axios.get('http://www.newblog.com/api/article/random')
          .then(response => {
            this.articles = response.data;
          })
      },
    }
  }
</script>
<style scoped>
  .side-right ul.list li {
    margin-bottom: 4px;
    line-height: 18px;
    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    font-size: 13px;
  }
</style>
