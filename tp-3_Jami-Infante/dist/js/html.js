
//Fonction calculant le nombre d'article
function buttonArticleNb(){
    let element = $('[id^="article-"]');
    let nbelements = 0;

    element.each(function(){
        nbelements = nbelements + 1;
    });
    return nbelements;
}
/*
//Fonction calculant le nombre d'article
function buttonArticleNb(){
    let elements = $('[id^="article-"]');
    let nbelements = 0;

    elements.each(function(){
        nbelements = nbelements + 1;
    });
    return nbelements;
}
*/
function bindButton(button) {
    button.onclick = function(event) {
        event.preventDefault();
        let title = $('input[name="titleToAdd"]')[0];
        let description = $('textarea[name="descriptionToAdd"]')[0];
        let idelm = buttonArticleNb()+1;
        try {
            let article = new Article(idelm, title.value, description.value);
            if (article.insertArticleHtml()) {
                title.value = '';
                description.value = '';
            }
        } catch (e) {
            clearErrors();
            let form = $('#addNewsForm')[0];

            if (e instanceof RequiredPropertyError || e instanceof DuplicateArticleError) {
                addError(e.message, form);
            } else {
                addError('Une erreur inconnue est survenue !', form);
                console.error(e);
            }
        }

        return false;
    };
}


function clearErrors() {
    let errors = $('.error');

    if (errors) {
        while (errors.length > 0 && errors[0].parentNode != null) {
            errors[0].parentNode.removeChild(errors[0]);
        }
    }
}

function addError(message, parent) {
    let error = $('p')[0];
    error.html(error);
    error.style.color = ROUGE;
    error.classList.add('error');

    parent.prepend(error);
}

function viewdetailClick() {
    let p = $(this).parent()[0].querySelector('p');
    //let p = this.parentNode.querySelector('p');
    logMessageWithDate(p.innerHTML);
}