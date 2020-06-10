var cards=["ciri.png", "geralt.png", "iorweth.png", "jaskier.png", "triss.png", "yen.png", "ciri.png", "geralt.png", "iorweth.png", "jaskier.png", "triss.png", "yen.png"];

var c0=document.getElementById("c0");
var c1=document.getElementById("c1");
var c2=document.getElementById("c2");
var c3=document.getElementById("c3");

var c4=document.getElementById("c4");
var c5=document.getElementById("c5");
var c6=document.getElementById("c6");
var c7=document.getElementById("c7");

var c8=document.getElementById("c8");
var c9=document.getElementById("c9");
var c10=document.getElementById("c10");
var c11=document.getElementById("c11");

c0.addEventListener("click", function() {revealCard(0)});
c1.addEventListener("click", function() {revealCard(1)});
c2.addEventListener("click", function() {revealCard(2)});
c3.addEventListener("click", function() {revealCard(3)});

c4.addEventListener("click", function() {revealCard(4)});
c5.addEventListener("click", function() {revealCard(5)});
c6.addEventListener("click", function() {revealCard(6)});
c7.addEventListener("click", function() {revealCard(7)});

c8.addEventListener("click", function() {revealCard(8)});
c9.addEventListener("click", function() {revealCard(9)});
c10.addEventListener("click", function() {revealCard(10)});
c11.addEventListener("click", function() {revealCard(11)});

var oneVisible=false;
var turnCounter=0;
var firstCardNumber;
var lock=false;
var pairs=6;

function revealCard(nr) {
    var opacityValue=$("#c"+nr).css("opacity");
    console.log(opacityValue);
    if ((opacityValue!=0) && (lock==false)) {
        lock=true;
        var obraz="url(images/"+cards[nr]+")";
        $("#c"+nr).css('background-image', obraz);
        $("#c"+nr).addClass('cardA');
        $("#c"+nr).removeClass('card');

        if (oneVisible==false) {
            //first card
            oneVisible=true;
            visibleNumber=nr;
            lock=false;

        } else {
            //second card
        
            if(cards[nr]==cards[visibleNumber]) {
               // alert("masz parę");
               setTimeout(function() {hideTwoCards(nr,  visibleNumber)}, 500);
           
            } else {
                //alert("pudło - spróbuj jeszcze raz");

                setTimeout(function() {restoreTwoCards(nr,  visibleNumber)}, 1500);
            }

            turnCounter++;
            $('.score').html('Turn counter: '+turnCounter);
            oneVisible=false;
        }
    }
    
}

function hideTwoCards(nr1, nr2) {
    $("#c"+nr1).css("opacity", "0");
    $("#c"+nr2).css("opacity", "0");
    lock=false;
    pairs--;
    console.log(pairs);

    if (pairs==0) {
        $('.board').html('<h1>You won!<br>All done in:<br>'+turnCounter+' turns</h1>');
    }
}

function restoreTwoCards(nr1, nr2) {

    $("#c"+nr1).css('background-image', 'url(images/karta.png)');
    $("#c"+nr2).css('background-image', 'url(images/karta.png)');

    $("#c"+nr1).addClass('card');
    $("#c"+nr2).addClass('card');
    $("#c"+nr1).removeClass('cardA');
    $("#c"+nr2).removeClass('cardA');
    lock=false;
}