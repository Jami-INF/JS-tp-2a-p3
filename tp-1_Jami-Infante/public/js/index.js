function boucle(){
    for(i=0;i<5;i++){
        logg = logMessage(i);
        if(i == 0){
            let couleur = vert;
            document.body.style.background=couleur;
            //J'ai pas compris a quoi servais le couleur 
            logMessage(couleur);
        }
        else if(i%2 == 0){
            let couleur = rouge;
            setTimeout(() => { document.body.style.background=couleur; }, 100*i);
            logMessage(couleur);
        }
        else{
            let couleur = bleu;
            setTimeout(() => { document.body.style.background=couleur; }, 100*i);
            logMessage(couleur);
        }
    }
    couleur = blanc;
    setTimeout(() => { document.body.style.background=couleur; }, 100*i);
}
function ajoutArticle(){
    let txt = document.forms["addNewsForm"].elements["titleToAdd"];
    let text = txt.value;
    let article = document.querySelectorAll('article h3');
    try{
        for(let i=0;i<article.length;i++){
            if(article[i].innerHTML == text){
                throw "Article déjà existant";
                //si article deja existant, throws une erreur
            }
        }
        if(text == ""){
            throw "Veuillez entrer un titre";
            //si titre vide, throws une erreur
        }
        
        //sinon crée un article
        let newArticle = document.createElement('article');
        let newh3 = document.createElement('h3');
        let textNode = document.createTextNode(text);
        newh3.classList.add('title');

        newh3.appendChild(textNode);
        newArticle.appendChild(newh3);
        document.querySelector('#news').appendChild(newArticle);

        supprimeErreur();//supprime precedente erreur si elle existe
    }catch(e){
        supprimeErreur();
        let error = document.createElement('erreur');
        let text = document.createTextNode(e);
        error.setAttribute('style','color:'+rouge);
        error.appendChild(text);

        let parentDiv = document.querySelector('#titleNews').parentNode
        let sp2 = document.querySelector('#titleNews')
        parentDiv.insertBefore(error, sp2)
        logMessage(e);
    }
}
function supprimeErreur(){
    let erreurdiv = document.querySelector('erreur');
    if(erreurdiv != null){
        erreurdiv.parentNode.removeChild(erreurdiv);//supprime la balise erreur si elle existe
    }
}
function ajoutArticleV1(){
    let nameNews = document.forms["addNewsForm"].elements["titleToAdd"].value;
    let d1 = document.getElementById('news');
    d1.insertAdjacentHTML('afterend', '<article><h3 class="title">'+nameNews+'</h3></article>');
    boucle();
}

let texth1 = document.querySelector('h1').innerHTML;
logMessage(texth1);

let texth2 = document.querySelector('#titleNews, h2').innerHTML;
logMessage(texth2);

let texth3 = document.querySelectorAll('.title');
texth3.forEach(function(element){
    logMessage(element.textContent);
});
/*
let myButton = document.getElementById('button');

myButton.onclick = function() {
    ajoutArticle();
}
*/
boucle();
let form = document.querySelector('#addNewsForm');
form.onsubmit = function(e){
    e.preventDefault();
    ajoutArticle();
    return false;
};
