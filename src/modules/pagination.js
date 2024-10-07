const paginate = (products) => {
  let productCount = 6;
  let currentPage = 1;
  console.log(products);

  const productListContainer = document.querySelector(".products__list");
  const pagination = document.querySelector(".pagination__inner");
  const buttonPaginatoinPrev = document.querySelector(".pagination__prev");
  const buttonPaginatoinNext = document.querySelector(".pagination__next");

  const renderProducts = (products, container, numberProducts, page) => {
    productListContainer.innerHTML = "";
    const firstProduct = numberProducts * page - numberProducts;
    const lastProduct = firstProduct + numberProducts;
    const productsOnPage = products.slice(firstProduct, lastProduct);
    console.log(productsOnPage);
    productsOnPage.forEach((products) => {
      const divItem = document.createElement("div");
      divItem.classList.add("product__item");
      divItem.innerHTML = `
            <div class="product__image">
              <div class="product__image-block">
                <img
                  src="${products.photo}"
                  alt="${products.model}" loading="lazy">
              </div>
            </div>
            <span class="product__title">${products.model}</span>
            <span class="product__price">${products.prices[0]} ₽</span>
            <button type="button" class="product__cart">Добавить в корзину</button>`;
      container.append(divItem);
      console.log(products);
    });
  };
  const renderPagination = (products, numberProducts) => {
    const pageCount = Math.ceil(products.length / numberProducts);
    const ul = document.querySelector(".pagination__list");
    for (let i = 1; i <= pageCount; i++) {
      const li = renderButtonsPagination(i);
      ul.append(li);
    }
    pagination.classList.remove("hidden");
  };
  const renderButtonsPagination = (page) => {
    const li = document.createElement("li");
    li.classList.add("pagination__list-item");
    li.textContent = page;
    if (currentPage === page) {
      li.classList.add("pagination-active");
    }
    return li;
  };
  const updatePagination = () => {
    pagination.addEventListener("click", (e) => {
      if (!e.target.closest(".pagination__list-item")) {
        return;
      } else {
        currentPage = e.target.textContent;
        renderProducts(
          products,
          productListContainer,
          productCount,
          currentPage
        );
        const currentButtonsPagination = document.querySelector(
          ".pagination__list-item.pagination-active"
        );
        currentButtonsPagination.classList.remove("pagination-active");
        e.target.classList.add("pagination-active");
      }
    });
  };
  renderProducts(products, productListContainer, productCount, currentPage);
  renderPagination(products, productCount);
  updatePagination();
  const buttonsLiPagination = document.querySelectorAll(
    ".pagination__list-item"
  );

  // const buttonsLiPagination;
  const handlerPagination = (e) => {
    const currentPageActive = document.querySelector(
      ".pagination__list-item.pagination-active"
    );
    let newPageActive;
    if (e.target.closest(".pagination__next")) {
      newPageActive = currentPageActive.nextElementSibling;
      currentPage++;
    } else {
      newPageActive = currentPageActive.previousElementSibling;
      currentPage--;
    }

    if (!newPageActive && e.target.closest(".pagination__next")) {
      newPageActive = buttonsLiPagination[0];
    } else if (!newPageActive) {
      newPageActive = buttonsLiPagination[buttonsLiPagination.length - 1];
    }

    currentPageActive.classList.remove("pagination-active");
    newPageActive.classList.add("pagination-active");

    if (currentPage > buttonsLiPagination.length) {
      currentPage = 1;
    } else if (currentPage < 1) {
      currentPage = buttonsLiPagination.length;
    }
    renderProducts(products, productListContainer, productCount, currentPage);
  };
  buttonPaginatoinPrev.addEventListener("click", handlerPagination);
  buttonPaginatoinNext.addEventListener("click", handlerPagination);
};
export { paginate };
