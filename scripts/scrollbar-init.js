document.addEventListener("DOMContentLoaded", function() {
    //The first argument are the elements to which the plugin shall be initialized
    //The second argument has to be at least a empty object or a object with your desired options
    OverlayScrollbars(document.getElementsByClassName('js-scrollbar'), { 
         scrollbars : {
             autoHide : "leave"
         }
    }); 
    /*по умолчанию прокручиваем до последнего сообщения в диалоге*/
    messages = OverlayScrollbars(document.getElementsByClassName('js-scrollbar-bottom'), { 
         scrollbars : {
             autoHide : "leave"
         }
    }); 
    //messages.scroll([ 0, "100%" ], 0);
});