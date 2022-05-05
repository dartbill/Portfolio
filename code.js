const homepageTitle1 = document.querySelector("#homepageTitle1");
const homepageTitle2 = document.querySelector("#homepageTitle2");
const body = document.querySelector("body")

document.addEventListener("DOMContentLoaded", e=>{
let letter = 0;
let letter2 = 0;
const text1 = "Hi, "
const text2 = "My name is Billie"


function typeText(){
    if(letter<text1.length){

        homepageTitle1.textContent += text1.charAt(letter);
        letter++;
        let speed = Math.floor(Math.random()*500)+50;
        setTimeout(typeText, speed);
    }

    if(letter2<text2.length){

        homepageTitle2.textContent += text2.charAt(letter2);
        letter2++;
        let speed = Math.floor(Math.random()*500)+50;
        setTimeout(typeText, speed);
    }

}
typeText();
})
