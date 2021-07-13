var header = document.getElementById("header_fixed")

document.addEventListener('scroll',function(){
    if(window.pageYOffset>300){
        header.classList.add("show");
        header.classList.remove("hide");
    }
    else{
        header.classList.add("hide");
    }
})

$(function(){
    'use strict';
    var view = window.height;
    $('.section')
    .height(view)
    .scrollie({
        scrollOffset: -50,
        scrollingInView: function(e){
            var bgColor = e.data('background');
            $('.sections').css('background-color',bgColor);
        }
    });
});