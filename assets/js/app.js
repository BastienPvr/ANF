$(document).ready(function(){
    // Au over, on augmente la taille de la cible
    $(".services > div").mouseover(function(){
        this.style.height=("35vw");
        this.style.width=("35vw");
        // Et on diminue celle de tout les autres
        $(".services > div").not($(this)).each(function(){
            this.style.height=("15vw");
            this.style.width=("15vw")
        })
    })

    // Au out, on ramène tout les elements à leur taille d'origine
    $(".services > div").mouseout(function(){
        $(".services > div").each(function(){
            this.style.height=("20vw");
            this.style.width=("20vw")
        })
    })
})
