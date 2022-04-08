const logo = document.querySelector(".logo");
const responsive = document.querySelector("#responsive");
const equis = document.querySelector(".equis");

logo.addEventListener("click", ()=> {
	responsive.classList.add("active");
})
equis.addEventListener("click", ()=> {
	responsive.classList.remove("active")
})