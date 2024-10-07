import "./index.html";
import "./css/index.scss";
import products from "./modules/products.js";
import { renderProductsCards } from "./modules/productCards";
import { paginate } from "./modules/pagination.js";
window.addEventListener("DOMContentLoaded", () => {
  const productWrapper = document.querySelector(".products__list");
  //renderProductsCards(products, productWrapper);
  paginate(products);
});
// let chars = ["1", "2", "2", "1", "3"];
// let uniqueChars = chars.filter((element, index) => {
//   return chars.indexOf(element) === index;
// });
