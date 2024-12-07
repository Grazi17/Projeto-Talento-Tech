document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { id: 1, name: 'Geleia de Morango', price: 10.00 },
        { id: 2, name: 'Geleia de Uva', price: 12.00 },
        { id: 3, name: 'Geleia de Laranja', price: 8.00 },
        { id: 3, name: 'Geleia de Amora', price: 14.00 }
    ];

    const cart = [];

    const productList = document.querySelector('.product-list');
    const cartElement = document.getElementById('cart');
    const checkoutBtn = document.getElementById('checkoutBtn');
    const totalElement = document.createElement('div');
    totalElement.id = 'total';
    cartElement.appendChild(totalElement);

    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('product-item');
        productItem.innerHTML = `
            <span>${product.name} - R$ ${product.price.toFixed(2)}</span>
            <button onclick="addToCart(${product.id})">Adicionar</button>
        `;
        productList.appendChild(productItem);
    });

    window.addToCart = function(productId) {
        const product = products.find(p => p.id === productId);
        cart.push(product);
        updateCart();
    };

    window.removeFromCart = function(index) {
        cart.splice(index, 1);
        updateCart();
    };

    function updateCart() {
        cartElement.innerHTML = '';
        let total = 0;
        cart.forEach((item, index) => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <span>${item.name} - R$ ${item.price.toFixed(2)}</span>
                <button class="remove" onclick="removeFromCart(${index})">Remover</button>
            `;
            cartElement.appendChild(cartItem);
            total += item.price;
        });
        totalElement.textContent = `Total: R$ ${total.toFixed(2)}`;
        cartElement.appendChild(totalElement);
    }

    checkoutBtn.addEventListener('click', () => {
        if (cart.length > 0) {
            alert('Compra realizada com sucesso!');
            cart.length = 0;
            updateCart();
        } else {
            alert('Carrinho está vazio!');
        }
    });
});
