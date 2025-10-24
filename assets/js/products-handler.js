// products-handler.js - Handles product display, filtering, and pagination

document.addEventListener('DOMContentLoaded', function () {
    const filterLinks = document.querySelectorAll('.categories-list a[data-filter]');
    const productsContainer = document.getElementById('products-container');
    const featuredContainer = document.getElementById('featured-products');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');
    const pageNumbers = document.querySelectorAll('.page-numbers:not(#prevBtn):not(#nextBtn)');

    let currentCategory = 'sweets';
    let currentPage = 0;
    const itemsPerPage = 9;

    // Category display names mapping
    const categoryNames = {
        'sweets': 'SWEETS',
        'traditional_sweets': 'TRADITIONAL SWEETS',
        'kaju_sweets': 'KAAJU SWEETS',
        'Dry Fruit Sweets': 'DRY FRUIT SWEETS',
        'juicy_sweets': 'JUICE/BENGALI SWEETS',
        'ghee': 'GHEE SAVORIES',
        'snacks': 'SAVORIES',
        'bakery': 'BAKERY',
        'pickle&powder': 'PICKLES AND POWDERS'
    };

    // Render featured products in sidebar
    function renderFeaturedProducts() {
        const featured = getFeaturedProducts();
        featuredContainer.innerHTML = featured.map(product => `
            <div class="single-post-item">
                <div class="thumb bg-cover" style="background-image: url('${product.image}');"></div>
                <div class="post-content">
                    <div class="star">
                        <span class="fas fa-star"></span>
                        <span class="fas fa-star"></span>
                        <span class="fas fa-star"></span>
                        <span class="fas fa-star"></span>
                        <span class="fas fa-star color-bg"></span>
                    </div>
                    <h4>${product.name}</h4>
                </div>
            </div>
        `).join('');
        
        // Preload featured images
        featured.forEach(product => {
            const img = new Image();
            img.src = product.image;
        });
    }

    // Render products with pagination
    function renderProductsWithPagination(category) {
        const products = getProductsByCategory(category);
        const totalPages = Math.ceil(products.length / itemsPerPage);
        const start = currentPage * itemsPerPage;
        const end = start + itemsPerPage;
        const pageProducts = products.slice(start, end);

        // Build HTML with category heading on first page
        let html = '';
        
        // Add category heading only on first page
        if (currentPage === 0) {
            const categoryDisplayName = categoryNames[category] || category.toUpperCase();
            html = `
                <div class="col-12 mb-4">
                    <div class="text-center">
                        <h2 style="font-size: 32px; font-weight: bold; color: #333; margin-bottom: 30px;">${categoryDisplayName}</h2>
                    </div>
                </div>
            `;
        }

        // Add products
        html += pageProducts.map(product => `
            <div class="col-xl-4 col-lg-4 col-md-6 product-item" data-category="${product.category}">
                <div class="food-items center">
                    <div class="food-image">
                        <img src="${product.image}" 
                             alt="${product.name}" 
                             loading="lazy"
                             width="350"
                             height="350"
                             onerror="this.src='assets/img/placeholder.jpg'">
                    </div>
                    <div class="food-content">
                        <h3>${product.name}</h3>
                    </div>
                </div>
            </div>
        `).join('');

        // Render to container
        productsContainer.innerHTML = html;

        // Update pagination
        updatePagination(totalPages);
    }

    // Update pagination buttons
    function updatePagination(totalPages) {
        pageNumbers.forEach((btn, index) => {
            if (index < totalPages) {
                btn.parentElement.style.display = 'inline-block';
                btn.classList.toggle('pagenumberactive', index === currentPage);
            } else {
                btn.parentElement.style.display = 'none';
            }
        });

        // Update prev/next button states
        prevBtn.style.opacity = currentPage === 0 ? '0.5' : '1';
        prevBtn.style.cursor = currentPage === 0 ? 'not-allowed' : 'pointer';
        nextBtn.style.opacity = currentPage >= totalPages - 1 ? '0.5' : '1';
        nextBtn.style.cursor = currentPage >= totalPages - 1 ? 'not-allowed' : 'pointer';
    }

    // Handle category filter
    filterLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            // Remove active class from all categories
            filterLinks.forEach(l => {
                l.parentElement.classList.remove('active');
            });
            
            // Add active class to clicked category
            this.parentElement.classList.add('active');

            // Update category and reset to first page
            currentCategory = this.getAttribute('data-filter');
            currentPage = 0;

            // Render products
            renderProductsWithPagination(currentCategory);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });

    // Handle pagination - Next button
    if (nextBtn) {
        nextBtn.addEventListener('click', function (e) {
            e.preventDefault();
            const products = getProductsByCategory(currentCategory);
            const totalPages = Math.ceil(products.length / itemsPerPage);

            if (currentPage < totalPages - 1) {
                currentPage++;
                renderProductsWithPagination(currentCategory);
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
    }

    // Handle pagination - Previous button
    if (prevBtn) {
        prevBtn.addEventListener('click', function (e) {
            e.preventDefault();
            if (currentPage > 0) {
                currentPage--;
                renderProductsWithPagination(currentCategory);
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
    }

    // Handle page number clicks
    pageNumbers.forEach((btn, index) => {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            const products = getProductsByCategory(currentCategory);
            const totalPages = Math.ceil(products.length / itemsPerPage);
            
            if (index < totalPages) {
                currentPage = index;
                renderProductsWithPagination(currentCategory);
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
    });

    // Initial load
    renderFeaturedProducts();
    renderProductsWithPagination(currentCategory);
    
    // Set initial active state for "Sweets" category
    const sweetsLink = document.querySelector('.categories-list a[data-filter="sweets"]');
    if (sweetsLink) {
        sweetsLink.parentElement.classList.add('active');
    }
});