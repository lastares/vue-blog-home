import Vue from 'vue'
import Vuex from 'vuex'
import ls from '../utils/localStorage'
import router from '../router'
import axios from 'axios'

Vue.use(Vuex)
const GET_ARTICLES = 'getArticles';
const state = {
  articles: {},
  count: 0
}

const mutations = {
  [GET_ARTICLES](state, {articles}) {
    state.articles = articles;
  },
  increment (state) {
    state.count ++ ;
  }
  // getArticles({commit}, {type=''}) {
  //   this.$axios.get('http://www.newblog.com/api/articles')
  //     .then((response) => {
  //         state.articles = response.data;
  //     });
  // }
}

const getters = {
  articles(state) {
    return state.articles;
  },
  safelyStoredNumber: state => state.safelyStoredNumber,
  storedNumberMatches(state) {
    return matchNumber => {
      return state.safelyStoredNumber === matchNumber;
    }
  }
}

const actions = {
  async getArticles({commit}, params) {
    let url = 'http://api.songyaofeng.com/api/articles';
    let response = await axios(url);
    commit('getArticles', {
      articles: response.data
    });
  }



}

const store = new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})

export default store
