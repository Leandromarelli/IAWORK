// Crear una función para generar el HTML de los productos
function generateProductHTML(product) {
    return `
        <div class="product">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
        </div>
    `;
}

const products = await fetch('stock.json').then(res => res.json());
const productsContainer = document.getElementById("products");

// Generar el HTML de todos los productos de una vez
let productHTML = "";
products.forEach(product => {
    productHTML += generateProductHTML(product);
});

// Insertar el HTML en el elemento "products"
productsContainer.innerHTML = productHTML;
generateProductHTML(product)