

productCatalog = [
    {
      id: 1,
      name: "Hoodie",
      price: 29.99,
      image: "./assets/hoodie.png",
      category:"hoodie,sweatshirt",
      description: "A comfortable and stylish hoodie."
    },
    {
      id: 2,
      name: "T-shirt",
      price: 19.99,
      image: "./assets/t-shirt1.png",
      category:"shirt,t-shirt",
      description: "A classic cotton t-shirt."
    },
    {
      id: 3,
      name: "Nikes",
      price: 59.99,
      image: "./assets/shoes1.png",
      category:"shoes,sport,nikes",
      description: "Nikes shoes filled with energy."
    },
    {
        id: 4,
        name: "Hoodie",
        price: 29.99,
        image: "./assets/hoodie2.png",
        category:"hoodie,sweatshirt",
        description: "A comfortable and stylish hoodie."
      },
    {
        id: 5,
        name: "Hoodie",
        price: 19.99,
        image: "./assets/hoodie2.png",
        category:"hoodie,sweatshirt",
        description: "A comfortable and stylish hoodie."
    },
    {
        id: 1,
        name: "Hoodie",
        price: 29.99,
        image: "./assets/hoodie.png",
        category:"hoodie,sweatshirt",
        description: "A comfortable and stylish hoodie."
      },
      {
        id: 2,
        name: "T-shirt",
        price: 19.99,
        image: "./assets/t-shirt1.png",
        category:"shirt,t-shirt",
        description: "A classic cotton t-shirt."
      },
      {
        id: 3,
        name: "Nikes",
        price: 59.99,
        image: "./assets/shoes1.png",
        category:"shoes,sport,nikes",
        description: "Nikes shoes filled with energy."
      },
      {
          id: 4,
          name: "Hoodie",
          price: 29.99,
          image: "./assets/hoodie2.png",
          category:"hoodie,sweatshirt",
          description: "A comfortable and stylish hoodie."
        },
      {
          id: 5,
          name: "Hoodie",
          price: 19.99,
          image: "./assets/hoodie2.png",
          category:"hoodie,sweatshirt",
          description: "A comfortable and stylish hoodie."
      }
]

document.addEventListener('DOMContentLoaded', function() {
    const productList = document.querySelector('.shoping-content');

    function renderProducts(products) {
        productList.innerHTML = ''; // Clear previous products

        products.forEach(product => {
            const productItem = document.createElement('div');
            productItem.classList.add('product');

            productItem.innerHTML = `
                <img src="${product.image}" alt="${product.name} ">
                <p>${product.description}</p>
                <p id="product-name">${product.name}</p>
                <p>Price: $${product.price.toFixed(2)}</p>
                <button class="add-to-cart" data-id="1" id="button">Add to cart</button>
            `;

            productList.appendChild(productItem);
        });
    }

    // Function to filter products based on search value
    function filterProducts(search) {
        if (search === '') {
            // If search is empty, display all products
            renderProducts(productCatalog);
        } else {
            // Filter productCatalog based on the search value
            const filteredProducts = productCatalog.filter(product => product.category.toLowerCase().includes(search.toLowerCase()));
            renderProducts(filteredProducts);
        }

        if(productList.trim()){
            productList.innerHTML=`
                <h1>Ops... We dont have that yet!</h1>
            `
        }
    }

    // Add event listener to search input
    document.getElementById('search').addEventListener('input', function() {
        const search = this.value.trim(); // Trim leading and trailing whitespace
        filterProducts(search);
    });


    // Render all products initially
    filterProducts('');
});



document.getElementById('cart').addEventListener('click',function(){
    window.location.href='/cart/cart.html';
});

document.getElementById('user').addEventListener('click',function(){
    window.location.href='/userInfo/userInfo.html';
});

document.getElementById('button').addEventListener('click',function(){

    this.textContent="Added to cart";
    
})
