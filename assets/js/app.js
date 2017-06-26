$(document).ready(function(){

    if(window.matchMedia("(min-width: 960px)").matches){
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
        })
    } else if(window.matchMedia("(max-width: 480px)").matches){
        // Au click, on augmente la taille de la cible
        document.querySelectorAll(".service").forEach(function(elem){
            elem.addEventListener("click", function(){
                if(this.classList.contains("active")){
                    this.classList.remove("active");
                    this.querySelector("span").style.display=("none")
                }else{
                    // Au deuxième click, on ramène tout les elements à leur taille d'origine
                    this.classList.add("active");
                    this.querySelector("span").style.display=("block")
                }
            })
        })
    }


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