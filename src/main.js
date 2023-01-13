import "./style.css";
import Alpine from "alpinejs";
window.Alpine = Alpine;
Alpine.start();

// MENU
const menu_click = document.querySelector(".menu_click");
var menu_punkter = document.querySelector(".menu_punkter");
var menu_luk = document.querySelector(".menu_luk");

menu_click.addEventListener("click", (e) => {
  menu_punkter.classList.toggle("hidden");
});

menu_luk.addEventListener("click", (e) => {
  menu_punkter.classList.add("hidden");
});

// Cookieboks

const accepterCookie = document.querySelector("#accepter");
const afvisCookie = document.querySelector("#afvis");
const boks = document.querySelector("#cookieboks");

accepterCookie.addEventListener("click", fjernBoks);
afvisCookie.addEventListener("click", fjernBoks);

function fjernBoks() {
  boks.classList.add("hidden");
  sessionStorage.setItem("fjernboks", true);
}

if (sessionStorage.getItem("fjernboks")) {
  boks.classList.add("hidden");
}


/* Ida rettelser*/

/* Import af Motion One bibliotek */
import { animate, stagger, inView, scroll, timeline } from "motion"

/* får body tl at fade ind, med en duration på 2 */
animate( "body", { opacity: [ 0, 1] }, { duration: 2 })

/* får knappen på forsiden til at pulsere, inde i html har jeg gjort så den pulsere mod center */
animate(".mereanimate", 
  { scale: [0.7, 0.95, 0.7, 0.95] }, 
  { duration: 6, direction: "alternate", repeat: Infinity }
)
