$(document).ready(function(){
    // Selectionne tous les liens en "#" et retire ceux qui ne comportent pas de réel lien (ou un lien de remplissage)
    $('a[href*="#"]').not('[href="#"]').click(function(event) {
        //Verifie l'existence du lien
        if(location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname){
            // Selectionne la cible du lien en faisant un dernier check de la cible
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                // Le scroll prime sur un hypothetique evenement
                event.preventDefault();
                // Lancement du scroll
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function() {
                    // Verification du "onfocus" et changement de ce dernier a l'issue du scroll
                    // Utile si le focus est utilisé par d'autres fonctionnalités
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) {
                        return false;
                    } else {
                        $target.attr('tabindex','-1');
                        $target.focus();
                    }
                })
            }
        }
    })
})
