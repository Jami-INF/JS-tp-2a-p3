import ArticlesNews from '/view/components/ArticlesNews.js';
Vue.createApp({
    data() {
        return {
            title: 'TP4 JS'
        }
    }
}).mount('h1');


Vue.createApp({
    data() {
        return {
            articles: this.getArticles(),
            errorMessage: null,
            errorMessageColor: null,
            descriptionToAdd: null,
            titleToAdd: TITLEPLACEHOLDER
        }
    },
    computed: {
        getNbArticles() {
            return this.articles.length;
        },
        articleVar() {
            if(this.articles.length > 1) {
                return 'articles';
            } else {
                return 'article';
            }
        }
    },
    methods: {
        getArticles() {
            return ALLNEWSJSON;
        },
        addArticle: function(event) {
            event.preventDefault();
            this.errorMessage = null;

            if (this.titleToAdd && this.titleToAdd !== '') {
                if(this.descriptionToAdd && this.descriptionToAdd !== '') {
                    let article = new Article(this.getNbArticles+1,this.titleToAdd, this.descriptionToAdd);
                    this.articles.push(article);
                    this.titleToAdd = null;
                    this.descriptionToAdd = null;
                    this.errorMessageColor = 'green';
                    this.errorMessage = 'Article ajouté avec succès';
                } else {
                    this.errorMessageColor = 'red';
                    this.errorMessage = 'Veuillez saisir une description';
                }
            } else {
                this.errorMessageColor = 'red';
                this.errorMessage = 'Le titre doit être renseigné';
            }            
        }
    }
}).component('ArticlesNews', ArticlesNews).mount('#app');
