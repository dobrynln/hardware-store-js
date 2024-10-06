const renderProductsCard = (product) => {
  const divItem = document.createElement("div");
  divItem.classList.add("product__item");
  divItem.innerHTML = `
            <div class="product__image">
              <div class="product__image-block">
                <img
                  src="${product.photo}"
                  alt="${product.model}" loading="lazy">
              </div>
            </div>
            <span class="product__title">${product.model}</span>
            <span class="product__price">${product.prices[0]} ₽</span>
            <button type="button" class="product__cart">Добавить в корзину</button>
  `;
  return divItem;
};
const appendProductCard = (product, container) => {
  container.append(product);
};
const renderProductsCards = (products, container) => {
  products.forEach((product) => {
    const card = renderProductsCard(product);
    appendProductCard(card, container);
  });
};
export { renderProductsCards };
