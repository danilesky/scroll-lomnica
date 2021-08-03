var slogan = document.getElementById('slogan')
var overlay = document.getElementById('intro_overlay')

var interval = 500;
var timer = 500;

const words = ["Ľudskosť","Umenie","Zážitok"]

function msieversion(){
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");

    if (msie > 0)
    {
        return true;
    }
    else
    {
        return false;
    }
}

var animationInterval = words.length*interval+interval;

window.addEventListener('load',function(){
    for(let i = 0;i < words.length;i++){
        this.setTimeout(function(){
            slogan.innerHTML = words[i]
            slogan.style.opacity = 1;
            if(i!==2){
                setTimeout(function(){
                    slogan.style.opacity = 0.5;
                },200)
            }
            
        },timer)
        timer=timer+interval;
    }
    if(msieversion()){
        this.setTimeout(function(){
            overlay.classList.add("hideIE");
        },words.length*interval+interval)
    }
    else{
        this.setTimeout(function(){
            overlay.classList.add("animateHide");
        },animationInterval)
        this.setTimeout(function(){
            overlay.remove();
        },1000 + animationInterval)
    }
})

