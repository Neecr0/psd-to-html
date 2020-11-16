window.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector(".button");
  const input= document.querySelector(".search__input")

  const inputAnimate = (e) => {
    e.preventDefault();
    input.classList.toggle("search__input--active");
  };
  btn.addEventListener("click", inputAnimate);


  const menu = document.querySelector(".menu--vertical");
  const retractor= document.querySelector(".menu__retractor");
  const arrow = document.querySelector(".menu__retractor-arrow");
  let flag = true;

  retractor.addEventListener("click", () => {
    if (flag){
      menu.style.transform = "translateX(-169px)";
      arrow.classList.add("arrow--active");
    flag = !flag;}
    else {
      menu.style.removeProperty('transform');
      arrow.classList.remove("arrow--active");
      flag = !flag;
    }
  });
});


