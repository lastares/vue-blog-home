<template>
  <!--<div class="row">-->
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
            <li>
            <li :class="{ active: 0 === activeNavIndex }">
              <router-link :to="'/'" @click.native="changeNavIndex(0)">首页</router-link>
            </li>
            <li v-for="(item, index) in navList" :class="{ active: index + 1 === activeNavIndex }">
              <router-link @click.native="changeNavIndex(index + 1)" :to="{path: '/category/article/' + item.id}">{{ item.category_name }}</router-link>
            </li>
          </ul>
          <!-- 入口组件 -->
          <div class="navbar-right">
            <SearchInput></SearchInput>
            <!--<SearchInput v-on:listenToChildEvent="showMsgFromChild"></SearchInput>-->
            <TheEntry/>
          </div>
        </div>
      </div>
    </div>
  <!--</div>-->
</template>

<script>
  import LogoSrc from '@/assets/logo.png';
  import TheEntry from '@/components/layouts/TheEntry'
  import SearchInput from '@/components/layouts/SearchInput'
  import sign from '@/utils/sign'

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
          showCollapsedNav: false,
      }
    },
    created() {
      this.getCategory();
    },

    methods: {
      changeNavIndex(index) {
        this.activeNavIndex = index;

      },
      toggleNav() {
        this.showCollapsedNav = !this.showCollapsedNav
      },

      getCategory() {
        this.$axios.get('https://api.songyaofeng.com/api/categories')
          .then(response => {
            this.navList = response.data;
            console.log(this.navList);
          });
      }

    }
  }
</script>

<style scoped>

</style>
