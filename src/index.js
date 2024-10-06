import "./index.html";
import "./css/index.scss";
import products from "./modules/products.js";
import { renderProductsCards } from "./modules/productCards";
window.addEventListener("DOMContentLoaded", () => {
  const productWrapper = document.querySelector(".products__list");
  renderProductsCards(products, productWrapper);
});
