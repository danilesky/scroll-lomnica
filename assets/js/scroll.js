var header = document.getElementById("header_fixed")
var section = document.getElementsByClassName("section")

document.addEventListener('scroll',function(){
    if(window.pageYOffset>300){
        header.classList.add("show");
        header.classList.remove("hide");
    }
    else{
        header.classList.add("hide");
    }
    for(let i = 0;i<section.length;i++){
        if(section[i].offsetTop+400 < window.pageYOffset){
            section[i].style.opacity = 0.4;
        }
        else{
            section[i].style.opacity = 1;
        }
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