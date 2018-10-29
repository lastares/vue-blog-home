<template>
  <!--<div class="row">-->
    <footer class="footer">
      <div class="container">
        <div class="row footer-top">
          <div class="col-sm-6 col-lg-6 col-lg-push-2">
            <div class="row">
              <div class="col-sm-5">
                <h4>{{ other.title }}</h4>
                <ul class="list-unstyled">
                  <li v-for="(project, index) in other.list">{{ project.title }}: {{ project.description }}</li>
                </ul>
              </div>
              <!--<div class="col-sm-5 col-lg-push-4">-->
              <!--<img src="../../assets/dig.gif" alt="">-->
              <!--<h4>{{ statistics.title }}</h4>-->

              <!--<ul class="list-unstyled">-->
              <!--<li v-for="item in statistics.list">{{ item.title }}: {{ item.description }}</li>-->
              <!--</ul>-->
              <!--</div>-->

            </div>
          </div>
          <div class="col-sm-4 col-lg-4 col-lg-push-1" style="text-align: center;vertical-align: middle">
            <img src="../../assets/dig.gif" alt="">
            <p class="padding-top-xsm">{{ description }}</p>
            <!--<span v-html="designer"></span>-->
          </div>
        </div>
      </div>
    </footer>
  <!--</div>-->
</template>

<script>
  import title from '@/directives/title'
  export default {
    name: 'TheFooter',
    directives: {
      title
    },
    data() {
      return {
        description: 'songyaofeng 一个行走在技术之路上的PHP程序员站长',
        contacts: [
          {
            icon: 'envelope',
            title: '反馈问题',
            link: 'mailto:songyaofeng@aliyun.com'
          },
          {
            icon: 'weibo',
            title: '站长微博',
            link: '#'
          },
          {
            icon: 'weixin',
            title: '加我微信',
            link: '#'
          }
        ],
        contactStyle: {
          paddingRight: '8px'
        },
        designer: `
        <span style="font-size:0.9em">Designed by
          <span style="color: #e27575;font-size: 14px;">❤</span>
          <a href="https://github.com/songyaofeng" target="_blank" style="color:inherit">Songyaofeng</a>
        </span>
      `,
        statistics: {
          title: '统计信息',
          list: [
            {
              title: '文章数',
              description: '22889'
            },
            {
              title: '标签数',
              description: '7397'
            },
            {
              title: '评论数',
              description: '39375'
            },
            {
              title: '博客运行',
              description: '296 days'
            }
          ]
        },
        other: {
          title: '项目架构',
          list: [
            {
              title: 'Front：',
              description: 'vue'

            },
            {
              title: 'Api：',
              description: 'Lumen'
            },
            {
              title: 'Admin',
              description: 'Laravel + Bootstrap'
            }
          ]
        }
      }
    }
  }
</script>

<style scoped>
  a:hover, a:focus { color: #e27575; transition: color .15s;}
  @media (min-width: 768px){
    .footer {
      position: absolute;
      bottom: 0;
      height: 135px !important;
    }}

  .main-col, .side-bar {
     margin-bottom: 0px;
  }
</style>
