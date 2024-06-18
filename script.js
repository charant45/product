const pr = fetch("https://dummyjson.com/products");

pr.then((res) => {
  const pr2 = res.json();
  pr2.then((data) => {
    createUI(data);
  });
}).catch((err) => {
  console.log("❌Error occurred\n", err);
});

const main = document.getElementById("root");

function createUI(data) {
    const products = data.products;
    main.innerHTML = ``;
    for (let i = 0; i < products.length; i++) {
      const newCard = document.createElement("div");
      newCard.classList.add("card");
      newCard.innerHTML = `
              <div>
                  <img src="${products[i].thumbnail}">
                  <h3>${products[i].title}</h3>
                  <p>${products[i].description}</p>
                  <h5>Price: $${products[i].price}</h5>
              </div>
          `;
      main.appendChild(newCard);
    }
}

function searchProducts(e) {
    const searchText = e.target.value;
    const pr = fetch(`https://dummyjson.com/products/search?q=${searchText}`);
    pr.then((res) => {
      const pr2 = res.json();
      pr2.then((data) => {
        createUI(data);
      });
    });
}
