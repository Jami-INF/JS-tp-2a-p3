import ArticleNews from '../../view/components/ArticlesNews.js';
Vue.createApp({
    data() {
        return {
            title: 'TP4 JS'
        }
    }
}).mount('h1');

Vue.createApp({}).component('ArticleNews', ArticleNews).mount('#app');