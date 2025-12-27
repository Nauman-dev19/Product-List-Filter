export function responsiveList() {
	const productList = document.querySelector('.product-list');
	if (window.innerWidth > 768) {
		productList.classList.remove('grid-cols-1');
		productList.classList.add('grid-cols-3');
	} else {
		productList.classList.remove('grid-cols-3');
		productList.classList.add('grid-cols-1');
	}
}
