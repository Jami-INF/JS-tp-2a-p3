class Article{
    constructor(title, description, id){
        this.title = title;
        this.description = description;
        this.id=id;
    }

    createArticleHtml() {
        let noArticle = buttonArticleNb()+1;
        let newArticle = document.createElement('article');
        newArticle.setAttribute('id', 'article-'+noArticle);

        let h3 = document.createElement('h3');
        let news = document.querySelector('#news');
        h3.innerHTML = this.title;
        h3.classList.add('title');

        let buttonArticle = document.createElement('button');
        buttonArticle.classList.add('buttonArticle');
        buttonArticle.innerText = 'View Detail';

        let p = document.createElement('p');
        p.innerText = this.description;

        newArticle.append(h3, p, buttonArticle);
        news.append(newArticle);
        return this;
    }

    assertRequiredField() {
        if (this.title === '')
            throw 'Titre vide';

        if (this.title.length < 3)
            throw 'Titre trop court';

        if (this.description === '')
            throw 'Description vide';

        if (this.description.length < 3)
            throw 'Description trop courte';
        return this;
    }

    assertArticleUnicity() {
        let h3s = document.querySelectorAll('h3.title');

        for (let i = 0; i < h3s.length; i++) {
            if (h3s[i].innerHTML.toLowerCase().trim() === this.title.toLowerCase().trim()) {
                throw 'Erreur article deja existant';
            }
        }

        return true;
    }

    addArticle() {
        try {
            clearErrors();
            this.assertRequiredField();
            this.assertArticleUnicity();
            this.createArticleHtml();
            buttonArticleNb();

            return true;
        } catch (e) {
            let form = document.querySelector('#addNewsForm');
            addError(e, form);
            return false;
        }
        
    }
}