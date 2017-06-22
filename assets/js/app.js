$(document).ready(function(){
    // Au over, on augmente la taille de la cible
    $(".services > div").mouseover(function(){
        this.style.height=("35vw");
        this.style.width=("35vw");
        this.style.paddingTop=("5.5vw");
        this.style.fontSize=("2.5vw");
        this.querySelector("span").style.display=("block");
        // Et on diminue celle de tout les autres
        $(".services > div").not($(this)).each(function(){
            this.style.height=("15vw");
            this.style.width=("15vw");
            this.style.paddingTop=("5.5vw");
            this.style.fontSize=("2vw")
        })
    });

    // Au out, on ramène tout les elements à leur taille d'origine
    $(".services > div").mouseout(function(){
        $(".services > div").each(function(){
            this.style.height=("20vw");
            this.style.width=("20vw");
            this.style.paddingTop=("5vw");
            this.style.fontSize=("2.3vw");
            this.querySelector("span").style.display=("none")
        })
    });


    /***********
    *   FORM   *
    ***********/

    var theForm = document.getElementById( 'theForm' );
    new stepsForm( theForm, {
        onSubmit : function( form ) {
            // Cache le formulaire
            classie.addClass( theForm.querySelector( '.simform-inner' ), 'hide' );

            var messageEl = theForm.querySelector( '.final-message' );
            messageEl.innerHTML = 'Veuillez vérifier les informations renseignées';
            classie.addClass( messageEl, 'show' )
        }
    })
})