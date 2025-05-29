//sidebar open close

let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let closeOpenBtn = document.querySelector(".nav-links .bx-x");
let navlinks = document.querySelector(".nav-links");

  menuOpenBtn.addEventListener("click", ()=>{
  navlinks.style.left="0";
 });

  closeOpenBtn.addEventListener("click", ()=>{
   navlinks.style.left="-100%";
   });

    let htmlArrow = document.querySelector(".html-arrow");
    htmlArrow.addEventListener("click", ()=>{
      navlinks.classList.toggle("show1");
    });

    let arrowMore = document.querySelector(".arrow-more");
    arrowMore.addEventListener("click", ()=>{
      navlinks.classList.toggle("show2");
    });
    let jsArrow = document.querySelector(".js-arrow");
    jsArrow.addEventListener("click", ()=>{
      navlinks.classList.toggle("show3");
    });