class Article {
    static idPrefix = 'article-';

    id;
    title;
    description;

    constructor(id, title, description) {
        this.id = id;
        this.title = title;
        this.description = description;

        this.assertRequiredProperty();
    }
    
    createArticleHtml() {
        let newArticle = $('<article></article>');
        let h3 = $('<h3></h3>');
        let p = $('<p></p>');
        let button = $('<button></button>');
        let news = $('#news');

        h3.html(this.title);
        p.html(this.description);
        button.html('View detail');
        this.bindButtonViewdetail(button, viewdetailClick);
        h3.addClass('title');
        newArticle.attr('id', Article.idPrefix + this.id);

        newArticle.append(h3);
        newArticle.append(p);
        newArticle.append(button);
        news.append(newArticle);
    }
    //fonction qui affiche les détails de l'article
    insertArticleHtml() { 
        this.assertRequiredProperty();
        this.assertUnicity();

        this.createArticleHtml();
        return true;
    }

    //fonction qui permet de lier le bouton "View detail" à la fonction "viewdetailClick"

    bindButtonViewdetail(button, callback) {
        button.click(callback);
    }

    //fonction qui vérifie si l'article existe déjà
    assertUnicity() {
        let h3s = $('.title');

        for (let i = 0; i < h3s.length; i++) {
            if ($(h3s[i]).html().toLowerCase().trim() === this.title.toLowerCase().trim()) {
                throw new DuplicateArticleError();
            }
        }
    }

    //fonction qui vérifie si les propriétés obligatoires sont présentes
    assertRequiredProperty() {
        if (this.title === '') {
            throw new RequiredPropertyError();
        }

        if (this.description === '') {
            throw new RequiredPropertyError();
        }
    }
}