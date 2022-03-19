export default {
    props: {
        title: String,
        description: String
    },
    methods: {
        viewDetailArticle(article) {
            console.log(this.description)
        },
        deleteArticle() {
            this.$emit('remove');
        },
        changeState: function() {
            this.$emit('changeState', this.articles);
        }
    },

    template: `
    <article>
        <h3 class="title">{{ title }}</h3>
        <p class="Description">{{ description }}</p>
        <button @click="viewDetailArticle(article)">View detail</button>
        <button @click="deleteArticle(article)">Delete</button>
    </article>`
}