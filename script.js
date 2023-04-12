const burger = Array.from(document.getElementsByClassName('js-burger'));
const dropNav = Array.from(document.getElementsByClassName('js-drop-down-menu'));



// BURGER
burger.forEach(item => {
	item.addEventListener('click', dropDown)
});

function dropDown() {
	burger.forEach(item => {
		item.classList.toggle('is-active');
	});
	dropNav.forEach(item => {
		item.classList.toggle('is-active');
	});
	document.body.classList.toggle('js-is-lock');
};



//STICKY-HEADER
window.addEventListener("scroll", function () {
	const header = Array.from(document.getElementsByClassName('main-header'));
	header.forEach(item => {
		item.classList.toggle("js-sticky", window.scrollY > 0);
	})
})