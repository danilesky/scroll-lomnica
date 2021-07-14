var header = document.getElementById("header_fixed")
var section = document.getElementsByClassName("section")

window.onbeforeunload = function () {
    window.scrollTo(0,0);
};

document.addEventListener('scroll',function(){
    if(window.pageYOffset>300){
        header.classList.add("show");
        header.classList.remove("hide");
    }
    else{
        header.classList.add("hide");
    }
    for(let i = 0;i<section.length;i++){
        if(section[i].offsetTop+300 < window.pageYOffset){
            section[i].getElementsByTagName("img")[0].style.opacity = 0.4;
            section[i].getElementsByClassName("section_left_content")[0].style.opacity = 0.4;
        }
        else{
            section[i].getElementsByTagName("img")[0].style.opacity = 1;
            section[i].getElementsByClassName("section_left_content")[0].style.opacity = 1;
        }
    }
})





$(function(){
    'use strict';
    var view = window.height;
    $('.section')
    .height(view)
    .scrollie({
        scrollOffset: -500,
        scrollingInView: function(e){
            var bgColor = e.data('background');
            var bgImage = e.data('image')
            $('.sections').css('background-color',bgColor);
            $('.sections').css('background-image','url('+bgImage+')');
            $('.section_right_content').css('background-color',bgColor);
        }
    });
});