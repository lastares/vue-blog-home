import md5 from 'blueimp-md5'
import { sort } from './utils'

export default (params = {}) => {
  params = Object.assign({}, params);
  const queryString = Object.keys(params).sort(sort).map(i => `${i}=${typeof params[i] === 'string' ? params[i] : (params[i] || params[i] === 0) ? JSON.stringify(params[i]) : ''}`).join('&');
  const signStr = `${queryString}`;

  return md5(signStr);
};
