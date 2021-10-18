let haikei = document.querySelector(".haikei");
let appearance1 = document.querySelector(".appearance1");
const bgm = document.querySelector("#bgm");
const btn = document.querySelector("#btn-play");

addEventListener("keypress", function(x){
    if(x.which = 32);{
        $(".describe").css('display', 'none');
        bgm.play();
        haikei.classList.toggle("moving");
    }
});
