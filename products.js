document.addEventListener('DOMContentLoaded', function () {
    const productList = document.getElementById('product-list')
    const searchInput = document.getElementById('search')
    const loadMoreBtn = document.getElementById('load-more')

    let products = [
        {
            title: 'Product 1',
            description: 'Ac tortor vitae purus faucibus.',
            price: '£6.99',
            rating: 4,
        },
        {
            title: 'Product 2',
            description: 'Ac tortor vitae purus faucibus.',
            price: '£6.99',
            rating: 4,
        },
        {
            title: 'Product 3',
            description: 'Ac tortor vitae purus faucibus.',
            price: '£6.99',
            rating: 5,
        },
        {
            title: 'Product 4',
            description: 'Ac tortor vitae purus faucibus.',
            price: '£6.99',
            rating: 4,
        },
        {
            title: 'Product 5',
            description: 'Ac tortor vitae purus faucibus.',
            price: '£6.99',
            rating: 4,
        },
        {
            title: 'Product 6',
            description: 'Ac tortor vitae purus faucibus.',
            price: '£6.99',
            rating: 5,
        },
    ]

    function renderProducts(productsArray) {
        productList.innerHTML = '' // Clear existing products
        productsArray.forEach((product) => {
            const productCard = document.createElement('div')
            productCard.classList.add('product-card')

            productCard.innerHTML = `
                <img src="https://via.placeholder.com/250" alt="Product Image">
                <p class="product-title">${product.title}</p>
                <p class="product-description">${product.description}</p>
                <p class="product-rating">${'★'.repeat(
                    product.rating
                )}${'☆'.repeat(5 - product.rating)}</p>
                <p class="product-price">${product.price}</p>
            `
            productList.appendChild(productCard)
        })
    }

    // Initial render
    renderProducts(products)

    // Search functionality
    searchInput.addEventListener('input', function () {
        const searchTerm = searchInput.value.toLowerCase()
        const filteredProducts = products.filter((product) =>
            product.title.toLowerCase().includes(searchTerm)
        )
        renderProducts(filteredProducts)
    })

    // Load More Products
    loadMoreBtn.addEventListener('click', function () {
        const moreProducts = [
            {
                title: 'Product 7',
                description: 'New product',
                price: '£7.99',
                rating: 4,
            },
            {
                title: 'Product 8',
                description: 'Another product',
                price: '£8.99',
                rating: 3,
            },
            {
                title: 'Product 9',
                description: 'Yet another one',
                price: '£9.99',
                rating: 5,
            },
        ]
        products = [...products, ...moreProducts]
        renderProducts(products)
    })
})
