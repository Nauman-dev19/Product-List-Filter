import { productLListGenerator } from '../../src/script/cards.js';
import { responsiveList } from '../../src/script/functions.js';
import { contentChange } from '../../src/script/btns.js'; // assigning variables to buttons
import { filterCategory } from '../../src/script/filter.js'; // assigning variables to buttons

const displayBtn = document.querySelector(`#display-btn`);
// function to toggle product list layout
window.addEventListener('resize', responsiveList);
window.addEventListener('load', responsiveList);
// function to generate product list
productLListGenerator();
// event listener to change button content on click
displayBtn.addEventListener(`click`, contentChange);
// event listener to filter products based on category
filterCategory();
