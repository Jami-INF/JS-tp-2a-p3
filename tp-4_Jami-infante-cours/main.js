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
            descriptionToAdd: null
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
        viewDetailArticle(article) {
            console.log(article.description);
        },
        deleteArticle(article) {
            this.articles.pop(article);
            this.errorMessageColor = 'green';
            this.errorMessage = 'Article supprimé avec succès';
        },
        //autre syntaxe pour déclarer une fonction
        addArticle: function(event) {
            //console.log(this.titleToAdd);
            //console.log(this.descriptionToAdd);

            this.errorMessage = null;

            if (this.titleToAdd && this.titleToAdd !== '') {
                if(this.descriptionToAdd && this.descriptionToAdd !== '') {
                    //console.log(this.titleToAdd);
                    //console.log(this.descriptionToAdd);
                    this.articles.push({ title: this.titleToAdd, description: this.descriptionToAdd });
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
            //console.log(this.articles);
            event.preventDefault();
        }
    }
}).mount('#news');

Vue.createApp({
    data() {
        return {
            counter: 1
        }
    },
    methods: {
        increment() {
            this.counter++;
        },
        decrement() {
            if (this.counter > 0)
                this.counter--;
        }
    }
}).mount('#click');