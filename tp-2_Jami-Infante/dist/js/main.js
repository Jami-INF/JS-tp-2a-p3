iterate();

let h1 = document.querySelector('h1');
logMessageWithDate(h1.innerHTML);

let titleNews = document.querySelector('#titleNews');
logMessageWithDate(titleNews.innerHTML);

let titles = document.querySelectorAll('h3.title');
titles.forEach(element => logMessageWithDate(element.innerHTML));

let button = document.querySelector('input[name="addNewsBtn"]');
bindButton(button);

logMessageWithDate('Debut du TP2')


let articles = JSON.parse(ALLNEWJSON); //converti une chaine de caractères en objet (Object)
console.log(articles);

articles.forEach(element => logMessageWithDate(element.description)); //on accède aux clé comme des propriétés

let articlesString = JSON.stringify(articles); //converti un objet en chaine de caractères
console.log(articlesString);

let article0 = new Article(articles[0].title, articles[0].description, articles[0].id);
let article1 = new Article(articles[1].title, articles[1].description, articles[1].id);
let article2 = new Article(articles[2].title, articles[2].description, articles[2].id);

console.log(article0);
console.log(article1);
console.log(article2);

article0.addArticle();
article1.addArticle();
article2.addArticle();

buttonArticleNb()


