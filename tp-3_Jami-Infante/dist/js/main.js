iterate();

let h1 = $('h1');
logMessageWithDate(h1.html());

let titleNews = $('#titleNews');
logMessageWithDate(titleNews.html());

let titles = $('.title');
titles.each(function() {
    logMessageWithDate($(this).html())
});

let button = $('input[name="addNewsBtn"]')[0];
bindButton(button);

let buttons = $('article button');
buttons.each(function() {
    $(this).click(viewdetailClick);
});

let articles = jQuery.parseJSON(ALLNEWSJSON);
articles.forEach(function(element) {
    console.log(element);

    try {
        let a = new Article(element.id, element.title, element.description);
        a.insertArticleHtml();
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
});
