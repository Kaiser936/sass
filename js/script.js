let burger = document.querySelector ('.burger');
console.log(burger);
let nav = document.querySelector ('.desktopNav');
console.log(nav);

function menu_burger() {
    nav.style.display = "flex";
    nav.style.flexDirection = "column";
}

burger.addEventListener("click", menu_burger);