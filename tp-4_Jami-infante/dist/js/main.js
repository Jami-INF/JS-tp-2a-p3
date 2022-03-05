Vue.createApp({
    data(){
        return{
            title:'TP5 JS',
        }
    }
}).mount('h1');

Vue.createApp({
    data(){
        return{
            counter: 0,
            articles : this.getArticles()
        }
    },
    computed:{
        getNbArticles(){
            return this.articles.length;
        },
    },
    methods:{
        viewDetailArticle(article){
            console.log(article.title);
        },
        getArticles(){
            return ALLNEWJSON;
        },
        addArticle(title, description){
            this.articles.push({title: title, description, description})
        }
    }
}).mount('#news');

Vue.createApp({
    data(){
        return{
            counter:1,
        }
    },
    methods:{
        increment(){
            this.counter++;
        },
        decrement(){
            this.counter--;
        }
        
    }


}).mount('#click')
