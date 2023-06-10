import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'aa1e6d61202041a692538ce924e52382',
  },
});
