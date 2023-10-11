let card1 = { img: "img/1.jpg", cardTitle: "Resim-1", cardText: "Resim-1 Text" };
let card2 = { img: "img/2.jpg", cardTitle: "Resim-2", cardText: "Resim-2 Text" };
let card3 = { img: "img/3.jpg", cardTitle: "Resim-3", cardText: "Resim-3 Text" };

let cards = [card1, card2, card3];

let index = 0;

let rightArrow = document.querySelector("#right-arrow");
rightArrow.addEventListener("click", rightClick);

let leftArrow = document.querySelector("#left-arrow");
leftArrow.addEventListener("click", leftClick);

function rightClick() {
    index++;
    slide(index);
}

function leftClick() {
    index--;
    slide(index);
}

function slide(i){
    index=i;
    if(i<0){
        index=cards.length-1;
    }
    if(i>=cards.length){
        index=0;
    }
    document.querySelector(".card-img-top").setAttribute("src", cards[index].img);
    document.querySelector(".card-title").textContent = cards[index].cardTitle;
    document.querySelector(".card-text").textContent = cards[index].cardText;
}

window.addEventListener("load",loader);
function loader(){
    document.querySelector(".card-img-top").setAttribute("src", cards[index].img);
    document.querySelector(".card-title").textContent = cards[index].cardTitle;
    document.querySelector(".card-text").textContent = cards[index].cardText;
}