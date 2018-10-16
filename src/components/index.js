import Vue from 'vue'
import Slider from './Slider'

const components = {
  Slider
}

for(const [key, value] of Object.entries(components)) {
  Vue.component(key, vlaue);
}
