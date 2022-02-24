articlestab();//affiche l'onglet Article & recherche par defaut

function articlestab() {
    $('#ajouttab').hide();//cache le formulaire d'ajout
    $('#articlestab').show();//affiche le formulaire de recherche

    $('#articlestabbutton').hide();//cache le bouton Article & recherche
    $('#ajouttabutton').show();//affiche le bouton Ajouter un article
}
function ajouttab() {
    $("#ajouttab").show();//affiche le formulaire de recherche
    $('#articlestab').hide();//cache le formulaire de recherche

    $('#ajouttabutton').hide();//cache le bouton Ajouter un article
    $('#articlestabbutton').show();//affiche le bouton Article & recherche
}

$('#articlestabbutton').click(function() {
    articlestab()
});
$('#ajouttabutton').click(function() {
    ajouttab()
});
