const newsTemplate = `<article>
			              <h3  class="title" :style="cliquer ? { 'color': 'green'} : {'color': 'red'}">{{ article.title }}</h3>
                          <p>{{ article.description }}</p>
			              <button @click="changerTitre(article.description)">View detail</button>
		              </article>`;

const newsComponent = {
    props: ['article'],
    data: function() {
        return {
            cliquer: false,
        }

    },
    template: newsTemplate,
    methods: {
        changerTitre: function(desc) {
            this.cliquer = !this.cliquer
            console.log(desc)
        }
    }
};

const ArticleVue = {
    data() {
        let articles = JSON.parse(ALLNEWSJSON);
        let counter = articles.length;
        let title = 'article';

        if (counter > 1)
            title = 'articles';

        return {
            counter: counter,
            title: title,
            articles: articles,
        };

    }
};

Vue.createApp(ArticleVue).component('news-item', newsComponent).mount('#newsVue');
