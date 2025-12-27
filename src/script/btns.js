export function contentChange() {
	const displayBtn = document.querySelector(`#display-btn`);
	if (displayBtn.textContent === `Show Products`) {
		displayBtn.textContent = `Hide Products`;
	} else {
		displayBtn.textContent = `Show Products`;
    }
    const productList = document.querySelector(`.product-list`);
    productList.classList.toggle(`hidden`);
    productList.classList.toggle(`grid`);
}
