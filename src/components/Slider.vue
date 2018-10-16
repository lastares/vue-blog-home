<template>
  <div class="row">
    <div class="panel panel-default corner-radius panel-hot-topics">
      <div class="panel-heading">
        <h3 class="panel-title"><i class="fa fa-area-chart"></i> 热门文章</h3>
      </div>
      <div class="panel-body">
        <ul class="list" id="hots"><li>1. <a href="/view/107">历届奥斯卡最佳</a></li><li>2. <a href="/view/49">JVM垃圾回收算法之-标记清除</a></li><li>3. <a href="/view/50">MaxTenuringThreshold 和 TargetSurvivorRatio参数说明</a></li><li>4. <a href="/view/25">刘瑜：年轻时我们都梦想拯救世界，后来……</a></li><li>5. <a href="/view/122">Stephen Wolfram--地球上活着的最聪明的人之一</a></li><li>6. <a href="/view/48">JVM垃圾回收算法-复制算法</a></li><li>7. <a href="/view/123">问世间情为何物</a></li><li>8. <a href="/view/109">强势推荐--侣行</a></li><li>9. <a href="/view/47">volatile</a></li><li>10. <a href="/view/115">史上最全的大数据分析和制作工具(持续更新)</a></li></ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Slider',
    props: {
      // 轮播项
      slides: {
        type: Array,
        default: () => []
      },
      // 是否自动轮播
      autoplay: {
        type: Boolean,
        default: true
      },
      // 轮播延迟
      delay: {
        type: Number,
        default: 3000
      }
    },
    data() {
      return {
        currentIndex: 0, // 当前项索引
        show: true // 是否显示当前项
      }
    },
    computed: {
      // 当前项
      currentSlide() {
        return this.slides[this.currentIndex]
      },
      // 下一项索引
      nextIndex() {
        if (this.currentIndex === this.slides.length - 1) {
          return 0
        } else {
          return this.currentIndex + 1
        }
      }
    },
    mounted() {
      if (this.autoplay) this.play()
    },
    methods: {
      play() {
        if (this.autoplay) {
          this.interval = setInterval(() => {
            this.playTo(this.nextIndex)
          }, this.delay)
        }
      },
      stop() {
        if (this.interval) clearInterval(this.interval)
      },
      playTo(n) {
        if (this.currentIndex === n) return
        this.show = false
        setTimeout(() => {
          this.currentIndex = n
          this.show = true
        }, 0)
      }
    }
  }
</script>

<style scoped>
  .carousel {margin-top:4px;padding-bottom:30px;}
  .carousel-inner > div {min-height:177px;}
  @media (min-width: 1200px){.carousel-inner > div {min-height:228px;}}
  .carousel-indicators {bottom:0;border-radius: 12px;background-color: hsla(0,0%,100%,.3);margin-bottom: 0px;padding: 4px 8px;}
  .carousel-indicators li {margin:0 3px;border:1px solid #ff8580;background-color: #f4665f;}
</style>
涉
