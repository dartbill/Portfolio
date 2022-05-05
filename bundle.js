(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

},{}]},{},[1]);
