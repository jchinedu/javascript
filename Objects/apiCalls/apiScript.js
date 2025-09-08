 const PRODUCT_URL = 'https://fakestoreapi.com/products';


// const getproducts = (url) => {
//     fetch(url)
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error));
// };

// getproducts(PRODUCT_URL);

const getProducts = async (url) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        displayproducts(data);
    } catch (error) {
        console.log(error);
    }
};

getProducts(PRODUCT_URL);


const productTag = document.querySelector(".productContainer")


const displayproducts = (products) => {

    products.forEach((product) => {
        const{title, price, image} = product;
        const productWrapper = document.createElement("div");
        productWrapper.innerHTML = `
          <img src="${image}" alt="" />
          <p>title: ${title}</p>
          <p>price: &#8358; ${price}</p>


          `
          productWrapper.classList.add("products")
          productTag.appendChild(productWrapper)
        
    });

}