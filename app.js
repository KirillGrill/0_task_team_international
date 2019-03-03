/*selector*/

function selector() {
    const cSelector = document.getElementById("cSelector");
    const portfolioBottom = document.getElementById("portfolioButton");
    if(cSelector.hidden === true){
        cSelector.hidden = false;
        portfolioBottom.classList.add("portfolioButton");
    }else{
        cSelector.hidden = true;
        portfolioBottom.classList.remove("portfolioButton");
    }
}

/*slider*/

var slideNumber = 0;
var countOfSlides = 3;
function slideLeft() {
    var vestibulumWrap0 = document.getElementById(`vestibulumWrap${slideNumber}`);
    vestibulumWrap0.hidden = true;
    var maecenasWrap0 = document.getElementById(`maecenasWrap${slideNumber}`);
    maecenasWrap0.hidden = true;
    --slideNumber;
    if(slideNumber === countOfSlides){
        slideNumber = 0;
    }
    if(slideNumber === -1){
        slideNumber = countOfSlides-1;
    }
    var vestibulumWrap1 = document.getElementById(`vestibulumWrap${slideNumber}`);
    vestibulumWrap1.hidden = false;
    var maecenasWrap1 = document.getElementById(`maecenasWrap${slideNumber}`);
    maecenasWrap1.hidden = false;
}

function slideRight(){
    var vestibulumWrap0 = document.getElementById(`vestibulumWrap${slideNumber}`);
    vestibulumWrap0.hidden = true;
    var maecenasWrap0 = document.getElementById(`maecenasWrap${slideNumber}`);
    maecenasWrap0.hidden = true;
    if(slideNumber === countOfSlides-1){
        slideNumber = -1;
    }
    ++slideNumber;
    var vestibulumWrap1 = document.getElementById(`vestibulumWrap${slideNumber}`);
    vestibulumWrap1.hidden = false;
    var maecenasWrap1 = document.getElementById(`maecenasWrap${slideNumber}`);
    maecenasWrap1.hidden = false;
}

