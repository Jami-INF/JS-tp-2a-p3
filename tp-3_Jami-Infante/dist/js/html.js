
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
        let title = $('input[name="titleToAdd"]');
        let description = $('textarea[name="descriptionToAdd"]');

        let id = buttonArticleNb()+1;

        try {
            let article = new Article(id, title.val(), description.val());
            if (article.insertArticleHtml()) {
                title.val('');
                description.val('');
            }
        } catch (e) {
            clearErrors();
            let form = $('#addNewsForm');

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
    $('.error').remove();
}

function addError(message, parent) {
    let error = $('<p></p>');
    error.html(message);
    error.css('color', ROUGE);
    error.addClass('error');

    parent.prepend(error);
}

function viewdetailClick() {
    let p = $(this).parent()[0].querySelector('p');
    //let p = this.parentNode.querySelector('p');
    logMessageWithDate(p.innerHTML);
}
