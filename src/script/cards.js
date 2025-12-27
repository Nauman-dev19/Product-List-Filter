export function productLListGenerator() {
	class ProductCard {
		constructor(name, id, price, category, image) {
			this.name = name;
			this.id = id;
			this.price = price;
			this.category = category;
			this.image = image;
		}
		productCardGenerator() {
			const productList = document.querySelector(`.product-list`);
			const productItem = document.createElement(`li`);
			productItem.classList.add(`product-item`, `card`);
			productItem.dataset.category = this.category.toLowerCase();
			const productImageDiv = document.createElement(`div`);
			productImageDiv.classList.add(
				`product-image`,
				`card-image`,
				`mb-4`,
				`cursor-pointer`
			);
			const productImage = document.createElement(`img`);
			productImage.src = this.image;
			productImage.alt = this.name;
			const productName = document.createElement(`h3`);
			productName.textContent = this.name;
			const productPrice = document.createElement(`p`);
			productPrice.textContent = `$${this.price.toFixed(2)}`;
			productImageDiv.appendChild(productImage);
			productItem.appendChild(productImageDiv);
			productItem.appendChild(productName);
			productItem.appendChild(productPrice);
			productList.appendChild(productItem);
		}
	}
	const product1 = new ProductCard(
		'Wireless Headphones',
		101,
		99.99,
		'Electronics',
		'../src/assets/images/headphone.png'
	);
	const product2 = new ProductCard(
		'Smart Watch',
		102,
		199.99,
		'Electronics',
		'../src/assets/images/smartwatch.png'
	);
	const product3 = new ProductCard(
		'Running Shoes',
		103,
		79.99,
		'Footwear',
		'../src/assets/images/runningshoe.png'
	);
	const product4 = new ProductCard(
		'Coffee Maker',
		104,
		49.99,
		'HomeAppliances',
		'../src/assets/images/coffeemaker.png'
	);
	const product5 = new ProductCard(
		'Yoga Mat',
		105,
		29.99,
		'Fitness',
		'../src/assets/images/mats.png'
	);
	const products = [product1, product2, product3, product4, product5];
	function displayProducts() {
		products.forEach((product) => {
			product.productCardGenerator();
		});
	}
	displayProducts();
}
