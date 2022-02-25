    $.ajax({
        url: "text.JSON",
        //url: "https://newsdata.io/api/1/news?apikey=pub_4627365ed0e1d1c0536016b89a969e1275ef&language=fr&category=technology",
        //Si le site ne fonctionnant plus, j'ai simplement sauvegardé sont contenu dans un fichier JSON, le fonctionnement est le même
        method: "GET"
    })
    .done(function(data, textStatus, xhr) {
        if (xhr.status >= 300 && xhr.status < 400)
            console.log('Attention redirection');
        console.log(data);
        

        data.results.forEach(function(article)  {
            let a = new Article("0", article.title, article.description);
            //console.log(article);
            a.insertArticleHtml();
        });
    })
    .fail(function(xhr, textStatus, error) {
        console.log(xhr.status);
    });
