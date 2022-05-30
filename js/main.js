$(document).ready(function(){/*cambiar una clase cuando se produzca el scroll vertical*/
    $(window).on("scroll",function(){
        //Cambio de header
        let posicion =$("#pr").offset(); /*esto me va a dar el valor de la posicion del scroll*/
        if($(window).scrollTop()>=posicion.top){
            $("header").removeClass("transparente");
        }else{  
            $("header").addClass("transparente");
        }
    })
    //Accionamiento del menú lateral
    $("#burger").click(function(){
        $("#burger").toggleClass("abierto");
        $(".menu").toggleClass("abierto");
    })
    // smooth scroll
    $("a").on("click", function(){
        if(this.hash !==""){
            let hash = this.hash;
            $("html,body").animate({
                scrollTop: $(hash).offset().top
            }, 800) //milisegundos
        }
    })
})