$(document).ready(function(){/*cambiar una clase cuando se produzca el scroll vertical*/
    $(window).on("scroll",function(){
        let posicion =$("#pr").offset(); /*esto me va a dar el valor de la posicion del scroll*/
        if($(window).scrollTop()>=posicion.top){
            $("header").removeClass("transparente");
        }else{  
            $("header").addClass("transparente");
        }
    })
})