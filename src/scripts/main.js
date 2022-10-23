"use strict"

//Burger menu

document.addEventListener('DOMContentLoaded', nav)
function nav(){
    const burger = document.querySelector('.nav__button');
    const nav = document.querySelector('.nav');
    burger.addEventListener('click', ()=>{
        nav.classList.toggle('show')
    })
}

//Back to top

const backtotopbutton = document.querySelector(".fleche-container__fleche");

const scrollContainer = () => {
    return document.documentElement || document.querySelector("body");
};

const goToTop = () => {
    document.body.scrollIntoView({
    behavior: "smooth",
  });
};

backtotopbutton.addEventListener("click", goToTop);