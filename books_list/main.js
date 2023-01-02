//console.log(books[0].author);

fetch("products.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (products) {
    let placeholder = document.querySelector("#book_list_box");
    let out = "";
    for (let product of products) {
      out += `
      <div class="book_info">
        <img src="${product.image}" alt="book">
        <h1 class="book_name">${product.title}</h1>
        <h2 class="book_author">${product.author}</h2>
        <div class="info_container">
            <h3 class="price">${product.price}</h3>
            <a class="view-link">View</a>
        </div>
    </div>
        `;
    }
    placeholder.innerHTML = out;
  });
