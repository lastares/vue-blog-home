<template>
  <div class="panel panel-default corner-radius panel-hot-topics" style="padding-bottom:10px;border-radius: 0.28571429rem !important;">
    <div class="panel-heading">
      <h3 class="panel-title"><i class="fa fa-area-chart"></i> Me</h3>
    </div>
    <div class="panel-body">
          <!--<div class="">-->
            <!--<img width="120" class="img-rounded media-object img-responsive" src="http://p9.pstatp.com/large/6c2a000a63c97b230941" alt="Me">-->
          <!--</div>-->
          <!--<div class="media-body">-->
            <!--<h4 class="media-heading">Me</h4>-->
            <!--<p>曾梦想仗剑走天涯，由于bug太多就没去</p>-->
            <!--<p>-->
              <!--<a href="https://www.github.com/songyaofeng" target="_blank">-->
                <!--<img src="https://image.flaticon.com/icons/svg/25/25231.svg" width="30" class="img-responsive" alt="">-->
              <!--</a>-->
            <!--</p>-->
          <!--</div>-->
      <div class="media">
        <div class="media-left media-middle">
          <a href="#">
            <img class="media-object img-responsive img-circle" width="250" src="https://static.damengxiang.me/files/icon/2017/08-17/102145838169970580.png" alt="Me">
          </a>
        </div>
        <div class="media-right">
          <p>A computer is like air conditioning: it becomes useless when you open Windows</p>
        </div>
      </div>
    </div>
    <div class="media media-body" style="">
      <ul style="list-style: none;">
        <li style="float:left;margin-right:1em;" id="first">
          <a href="https://www.github.com/songyaofeng" target="_blank">
            <img src="https://image.flaticon.com/icons/svg/25/25231.svg" width="28" class="img-responsive" alt="">
          </a>
        </li>
        <li style="float:left;margin-right:1em;">
          <a href="https://legacy.gitbook.com/login?next=%2F%40songyaofeng%2Fdashboard" target="_blank">
            <img src="https://www.saashub.com/images/app/service_logos/0/12bff4a25eb3/large.png?1525413874" width="30" class="img-responsive" alt="">
          </a>
        </li>
        <li style="float:left;margin-right:1em;">
          <a href="mailto:songyaofeng@aliyun.com" target="_blank">
            <img src="https://banner2.kisspng.com/20180413/scq/kisspng-email-marketing-small-business-text-messaging-html-email-5ad08bbf7ed4e7.4600237815236167035195.jpg" width="30" class="img-responsive" alt="">
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Profile',
    data() {
      return {
        github: 'https://www.github.com/songyaofeng'
      }
    }
  }
</script>
<style scoped>
  #first {
    margin-left: 3em;
  }
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
