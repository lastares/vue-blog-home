<template>
  <div class="navbar-form navbar-left hidden-sm">
    <div class="form-group">
      <!--<el-form ref="form" :model="form" label-width="80px">-->
      <!--<el-form-item label="活动名称">-->
        <!--<el-input v-model="form.name" @keyup.enter="search"></el-input>-->
      <!--</el-form-item>-->
      <!--</el-form>-->
      <input
        v-model.trim="value"
        type="text"
        class="form-control search-input mac-style"
        placeholder="搜索"
        @keyup.enter="goIndexPage"
      >
    </div>
    <!--<router-view></router-view>-->
  </div>
</template>

<script>
  export default {
    name: 'SearchInput',
    data() {
      return {
        value: '' // 搜索值
      }
    },
    methods: {
      goIndexPage() {
        const value = this.value;
        // this.$emit("listenToChildEvent", value);
        // if (value !== '') {
          this.$router.push({ path: '/', name: 'SearchArticle', params: {word: value}});
          // console.log(value);
        // }
      }
    }
  }
</script>

<style scoped>
  .search-input { background-image: url(https://vuejscaffcdn.phphub.org/assets/images/icon-search.png)}
</style>
