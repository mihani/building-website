$(document).ready(function () {
    var url = $(location).attr('href');
    var splitUrl = url.split("/");
    var siteName = splitUrl[2];
    var codeHtml = 'Désolé ' + siteName + ' est en construction. <i class="fa fa-cogs" aria-hidden="true"></i>';
    $('#siteName').html(codeHtml);

    var overlay = $('.overlay');

    $('.popup-button').each(function (i, el) {
        var modal = $('#' + $(el).attr('data-modal'));
        var close = $('.close');

        // fonction qui enleve la class .show de la popup et la fait disparaitre
        function removeModal() {
            modal.removeClass('show');
        }

        // evenement qui appelle la fonction removeModal()
        function removeModalHandler() {
            removeModal();
        }

        // au clic sur le bouton on ajoute la class .show a la div de la popup qui permet au CSS3 de prendre le relai
        $(el).click(function () {
            modal.addClass('show');
            overlay.unbind("click");
            // on ajoute sur l'overlay la fonction qui permet de fermer la popup
            overlay.bind("click", removeModalHandler);
        });

        // en cliquant sur le bouton close on ferme tout et on arrête les fonctions
        close.click(function (event) {
            event.stopPropagation();
            removeModalHandler();
        });

    });
});