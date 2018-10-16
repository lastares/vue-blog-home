<template>
  <div class="navbar navbar-default topnav">
    <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" @click="toggleNav">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a href="/" class="navbar-brand">
          <span class="title">{{ logo.title }}</span>
          <img :src="logo.src" :alt="logo.title">
        </a>
      </div>

      <div id="top-navbar-collapse" :class="['collapse', 'navbar-collapse', { in: showCollapsedNav }]">
        <ul class="nav navbar-nav">
          <li :class="{ active: 0 === activeNavIndex }">
            <router-link :to="'/'" @click="changeNavIndex(0)">首页</router-link>
          </li>
          <li v-for="(item, index) in navList" :class="{ active: index + 1 === activeNavIndex }">
            <a href="#" @click="changeNavIndex(index + 1)">{{ item.category_name }}</a>
          </li>
        </ul>

        <!-- 入口组件 -->
        <div class="navbar-right">
          <SearchInput/>
          <TheEntry/>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  import md5 from 'blueimp-md5'
  import sign from '@/utils/sign'
  import LogoSrc from '@/assets/logo.png';
  import TheEntry from '@/components/layouts/TheEntry'
  import SearchInput from '@/components/layouts/SearchInput'

  export default {
    name: 'TheHeader',
    components: {
      TheEntry,
      SearchInput
    },
    data() {
      return {
        logo: {
          src: LogoSrc,
          title: '宋耀锋博客logo',
        },
        navList: [],
        activeNavIndex: 0,
        showCollapsedNav: false
    }
    },
    created() {
      console.log(sign('123456pac'));
      this.getCategory();
    },

    beforeCreate() {
    },
    methods: {
      changeNavIndex(index) {
        this.activeNavIndex = index;
      },
      toggleNav() {
        this.showCollapsedNav = !this.showCollapsedNav
      },

      getCategory() {
        this.$axios.get('http://www.newblog.com/api/categories')
          .then(response => {
            this.navList = response.data;
          });
      }

    }
  }
</script>

<style scoped>

</style>
