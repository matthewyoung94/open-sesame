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
        productsArray.forEach((product, index) => {
            const productCard = document.createElement('div')
            productCard.classList.add('product-card')

            productCard.innerHTML = `
                <img src="https://via.placeholder.com/250" alt="Product Image">
                <p class="product-title">${product.title}</p>
                <p class="product-description">${product.description}</p>
                <div class="product-rating" data-index="${index}">
                    ${generateStarRating(product.rating)}
                </div>
                <p class="product-price">${product.price}</p>
            `
            productList.appendChild(productCard)
        })

        // Add event listeners to stars
        document
            .querySelectorAll('.product-rating')
            .forEach((ratingElement) => {
                ratingElement.addEventListener('click', function (event) {
                    if (event.target.classList.contains('star')) {
                        const productIndex =
                            event.currentTarget.getAttribute('data-index')
                        const newRating = parseInt(
                            event.target.getAttribute('data-value')
                        )

                        // Update product rating
                        products[productIndex].rating = newRating
                        renderProducts(products) // Re-render the products to reflect the new rating
                    }
                })
            })
    }

    // Function to generate stars dynamically
    function generateStarRating(rating) {
        let starsHTML = ''
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                starsHTML += `<span class="star filled" data-value="${i}">★</span>`
            } else {
                starsHTML += `<span class="star" data-value="${i}">☆</span>`
            }
        }
        return starsHTML
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
