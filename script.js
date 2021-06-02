'use strict'
   
let barra_lateral = $("#scrollup");


$(document).on({
    
    scroll:function( ev ){
        let altoVentana = $(window).height();
   
        let altoBody = $(document).height();

        let scroll_total    = altoBody - altoVentana;
        
        let top = $(document).scrollTop();
        console.log ("scroll");
        console.log (top);

        let porcentaje_scroll = (100 * top) / scroll_total;
        
        console.log (porcentaje_scroll)
        barra_lateral.css("width", porcentaje_scroll + "%");
    }
});

