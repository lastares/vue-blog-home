<template>
  <div class="panel panel-default corner-radius panel-hot-topics" style="border-radius: 0.28571429rem !important;">
    <div class="panel-heading">
      <h3 class="panel-title"><i class="fa fa-area-chart"></i> 随机文章</h3>
    </div>
    <div class="panel-body">
      <ul class="list" id="hots">
        <li>1. <a href="/view/107">历届奥斯卡最佳</a></li>
        <li>2. <a href="/view/49">JVM垃圾回收算法之-标记清除</a></li>
        <li>3. <a href="/view/50">MaxTenuringThreshold 和 TargetSurvivorRatio参数说明</a></li>
        <li>4. <a href="/view/25">刘瑜：年轻时我们都梦想拯救世界，后来……</a></li>
        <li>5. <a href="/view/122">Stephen Wolfram--地球上活着的最聪明的人之一</a></li>
        <li>6. <a href="/view/48">JVM垃圾回收算法-复制算法</a></li>
        <li>7. <a href="/view/123">问世间情为何物</a></li>
        <li>8. <a href="/view/109">强势推荐--侣行</a></li>
        <li>9. <a href="/view/47">volatile</a></li>
        <li>10. <a href="/view/115">史上最全的大数据分析和制作工具(持续更新)</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'RandomArticle'
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
