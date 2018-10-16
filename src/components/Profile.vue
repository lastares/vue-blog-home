<template>
  <div class="panel panel-default corner-radius panel-hot-topics" style="border-radius: 0.28571429rem !important;">
    <div class="panel-heading">
      <h3 class="panel-title"><i class="fa fa-area-chart"></i> Me</h3>
    </div>
    <div class="panel-body">
      <ul class="media-list">
        <li class="media">
          <div class="media-left">
            <a href="#">
              <img class="img-circle media-object" src="http://placehold.it/140x140" alt="Me">
            </a>
          </div>
          <div class="media-body">
            <h4 class="media-heading">Me</h4>
            <p>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</p>
            <p>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</p>
            <p>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</p>
            <p>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Profile'
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
