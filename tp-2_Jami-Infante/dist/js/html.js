function bindButton(button){
	button.onclick = function(event){
		event.preventDefault();
    	let champTitre = document.querySelector('input[name="titleToAdd"]');
		let champDescription = document.querySelector('textarea[name="descriptionToAdd"]');
        let id = buttonArticleNb()+1;
        let article = new Article(champTitre.value, champDescription.value, id)
		if(article.addArticle()){
            champTitre.value = '';
            champDescription.value = '';
        
		return false;
        }
	}
}

function bindButtonArticle(article){
    let button = article.querySelector('button')
    button.onclick = function(event){
        event.preventDefault();
        let articleContent = article.querySelector('p').innerText;
        let articleTitle = article.querySelector('h3').innerText;
        logMessageWithDate("Titre de l'article : " + articleTitle);
        logMessageWithDate("Description de l'article : " + articleContent);
        return false;
    }
}

//Fonction calculant le nombre d'article
function buttonArticleNb(){
    let element = document.querySelectorAll('[id^="article-"]');
    let nbelements = 0;

    element.forEach(function(element){
        nbelements = nbelements + 1;
    });

    for(i=1;i<=nbelements;i++){
        let article = document.querySelector('#article-'+i);
        bindButtonArticle(article);
    }
    return nbelements;
}

function clearErrors(){
	let errors = document.querySelectorAll('.error');

    if(errors){
        while(errors.length > 0 && errors[0].parentNode != null){
            errors[0].parentNode.removeChild(errors[0]);
        }        
    }
}

function addError(message, parent){
	let error = document.createElement('p');
    error.innerHTML = message;
    error.style.color = ROUGE;
    error.classList.add('error');

    parent.prepend(error);
}
