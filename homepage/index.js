function displaybutton(){
   document.getElementById("right-button").style.display="block";
}
var slide1=1;
function sliderright (){
    if(slide1==1){
        document.getElementById("slider1").style.marginLeft=" -555px";
        document.getElementById("left-button").style.display="block";
        slide1=slide1+1;
    }else if(slide1==2){
        document.getElementById("slider1").style.marginLeft=" -1110px";
        slide1=slide1+1;
    }else if(slide1==3){
        document.getElementById("slider1").style.marginLeft=" -1670px";
        slide1=slide1+1;
    }else if(slide1==3){
        document.getElementById("slider1").style.marginLeft=" -1560px";
        slide1=slide1+1;
    }
    
}

function  sliderleft(){
    if(slide1==2){
        document.getElementById("slider1").style.marginLeft="0px";
        slide1=slide1-1;
        document.getElementById("left-button").style.display="none";
    }else if(slide1==3){
        document.getElementById("slider1").style.marginLeft="-555px";
        slide1=slide1-1;
    }else if(slide1==4){
        document.getElementById("slider1").style.marginLeft="-1110px";
        slide1=slide1-1;
    }
}



var slide2=1;
function slider2right (){
    if(slide2==1){
        document.getElementById("slider2").style.marginLeft=" -1060px";
        document.getElementById("left-button").style.display="block";
        slide1=slide1+1;
    }
    
}

function  slider2left(){
    if(slide1==2){
        document.getElementById("slider2").style.marginLeft="0px";
        slide1=slide1-1;
        document.getElementById("left-button").style.display="none";
    }
}




var slide3=1;
function slider3right (){
    if(slide3==1){
        document.getElementById("slider3").style.marginLeft=" -1060px";
        slide3=slide3+1;
    }
    
}

function  slider3left(){
    if(slide3==2){
        document.getElementById("slider3").style.marginLeft="0px";
        slide3=slide3-1;
       
    }
}