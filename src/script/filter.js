export function filterCategory() {
	let finalProducts;
	const filterSelector = document.querySelector('#filter');
	const productItems = Array.from(document.querySelectorAll('.product-item'));
	const applyfilter = (item) => {
		const selectedValue = filterSelector.value.toLowerCase();
		return item.dataset.category === selectedValue || selectedValue === 'all';
	};
	filterSelector.addEventListener('change', () => {
		finalProducts = productItems.filter(applyfilter);
		productItems.forEach((item) => {
			item.style.display = 'none';
		});
		finalProducts.forEach((item) => {
			item.style.display = 'block';
		});
		console.log(finalProducts);
	});
}
