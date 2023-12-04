const hamburger=document.querySelector('[data-js="hamburger"]');
const navMenu=document.querySelector('[data-js="navMenu"]');
console.log(hamburger);
hamburger.addEventListener("click",function() {
    navMenu.classList.toggle("menu_show")
});


// $(document).ready(function() {
// 	$("body").on('click', '.top', function() {
// 		$("nav.menu").toggleClass("menu_show");
// 	});
// });