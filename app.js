//load container for image and button, next, last
let ctn_images = document.getElementsByClassName("images")[0];
var position = 0;
var width = window.getComputedStyle(ctn_images).width;
var max_position = parseInt(width.charAt(0) + width.charAt(1) + width.charAt(2) + width.charAt(3));
var dist = max_position/5;

function SetIndicator(){
    let indicators = document.querySelectorAll(".container_indicator");
    indicators.forEach((i) =>{i.classList.remove("active")})
    if(position == 0){
        indicators[0].classList.add("active");
    }else{
        indicators[Math.abs(position)/dist].classList.add("active");
    }
    
}
function move_left(){
    if(position >= 0){
        position = (max_position-dist)*-1
    }else{
        position += dist;
    }
    SetIndicator();
    ctn_images
    ctn_images.style.left = position.toString()+"px";
}
function move_right(){
    if(position <= (max_position-dist)*-1){
        position = 0;
    }else{
        position -= dist;
    }
    SetIndicator();
    ctn_images.style.left = position.toString()+"px";
}



let timerID = setInterval(() => move_right(), 3000);
