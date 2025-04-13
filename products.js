// Product data for local e-commerce site

// Product categories
const categories = [
    'Electronics', 'Clothing', 'Home Goods', 'Beauty & Health'
];

// u56fau5b9au4ea7u54c1u76eeu5f55 - u6bcfu4e2au4ea7u54c1u90fdu6709u56fau5b9au7684u540du79f0u3001u7c7bu522bu3001u56feu7247u548cu63cfu8ff0
const productCatalog = [
    // Electronics u4ea7u54c1
    {
        id: 'E001',
        name: 'Smart Watch Pro',
        category: 'Electronics',
        image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800',
        price: '$199.99',
        description: 'Advanced smartwatch with health monitoring and GPS tracking.',
        features: ['Heart rate monitoring', 'GPS tracking', 'Water resistant', '5-day battery life', 'Sleep tracking']
    },
    {
        id: 'E002',
        name: 'Wireless Earbuds',
        category: 'Electronics',
        image: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=800',
        price: '$89.99',
        description: 'Premium wireless earbuds with active noise cancellation.',
        features: ['Active noise cancellation', '24-hour battery', 'Touch controls', 'Water resistant', 'Premium sound']
    },
    {
        id: 'E003',
        name: 'Digital Camera',
        category: 'Electronics',
        image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800',
        price: '$399.99',
        description: 'Professional digital camera with high resolution sensor.',
        features: ['24MP sensor', '4K video recording', 'Optical stabilization', 'Wi-Fi connectivity', 'Interchangeable lenses']
    },
    {
        id: 'E004',
        name: 'Laptop Computer',
        category: 'Electronics',
        image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800',
        price: '$899.99',
        description: 'Powerful laptop for work and entertainment.',
        features: ['Intel Core i7', '16GB RAM', '512GB SSD', '15.6" display', 'Backlit keyboard']
    },
    // Clothing u4ea7u54c1
    {
        id: 'C001',
        name: 'Denim Jacket',
        category: 'Clothing',
        image: 'https://images.unsplash.com/photo-1551537482-f2075a1d41f2?w=800',
        price: '$79.99',
        description: 'Classic denim jacket that never goes out of style.',
        features: ['100% cotton denim', 'Classic fit', 'Multiple pockets', 'Durable design', 'Versatile style']
    },
    {
        id: 'C002',
        name: 'White T-Shirt',
        category: 'Clothing',
        image: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=800',
        price: '$19.99',
        description: 'Premium cotton classic white t-shirt for everyday comfort.',
        features: ['100% organic cotton', 'Comfortable fit', 'Pre-shrunk', 'Breathable fabric', 'Classic design']
    },
    {
        id: 'C003',
        name: 'Women\'s Blouse',
        category: 'Clothing',
        image: 'https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=800',
        price: '$29.99',
        description: 'Elegant women\'s blouse for any occasion.',
        features: ['Lightweight fabric', 'Flattering cut', 'Versatile style', 'Easy care', 'Multiple colors available']
    },
    {
        id: 'C004',
        name: 'Casual Shoes',
        category: 'Clothing',
        image: 'https://images.unsplash.com/photo-1560343090-f0409e92791a?w=800',
        price: '$49.99',
        description: 'Comfortable casual shoes for everyday wear.',
        features: ['Cushioned insole', 'Breathable material', 'Non-slip sole', 'Lightweight design', 'Durable construction']
    },
    // Home Goods u4ea7u54c1
    {
        id: 'H001',
        name: 'Table Lamp',
        category: 'Home Goods',
        image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800',
        price: '$49.99',
        description: 'Elegant table lamp with adjustable brightness.',
        features: ['LED lighting', 'Touch control', 'Multiple brightness levels', 'Energy efficient', 'Modern design']
    },
    {
        id: 'H002',
        name: 'Ceramic Vase Set',
        category: 'Home Goods',
        image: 'https://images.unsplash.com/photo-1612196808214-b40ab6eb6539?w=800',
        price: '$34.99',
        description: 'Beautiful ceramic vase set for home decoration.',
        features: ['Handcrafted', 'Set of three', 'Different sizes', 'Elegant design', 'Durable material']
    },
    {
        id: 'H003',
        name: 'Throw Pillows',
        category: 'Home Goods',
        image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=800',
        price: '$29.99',
        description: 'Decorative throw pillows for your living room or bedroom.',
        features: ['Soft fabric', 'Comfortable filling', 'Removable covers', 'Various colors', 'Set of two']
    },
    {
        id: 'H004',
        name: 'Coffee Table',
        category: 'Home Goods',
        image: 'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=800',
        price: '$149.99',
        description: 'Modern coffee table for your living room.',
        features: ['Solid wood construction', 'Modern design', 'Spacious surface', 'Easy assembly', 'Durable finish']
    },
    // Beauty & Health u4ea7u54c1
    {
        id: 'B001',
        name: 'Skincare Set',
        category: 'Beauty & Health',
        image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800',
        price: '$59.99',
        description: 'Complete skincare routine set for daily care.',
        features: ['Natural ingredients', 'Suitable for all skin types', 'Dermatologist tested', 'Cruelty-free', 'Travel-friendly sizes']
    },
    {
        id: 'B002',
        name: 'Vitamin C Serum',
        category: 'Beauty & Health',
        image: 'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=800',
        price: '$29.99',
        description: 'Brightening Vitamin C serum for radiant skin.',
        features: ['20% Vitamin C', 'Anti-aging formula', 'Brightening effect', 'Hydrating', 'Suitable for daily use']
    },
    {
        id: 'B003',
        name: 'Makeup Set',
        category: 'Beauty & Health',
        image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800',
        price: '$49.99',
        description: 'Professional makeup set with essential cosmetics.',
        features: ['High pigmentation', 'Long-lasting formula', 'Cruelty-free', 'Various shades', 'Travel case included']
    },
    {
        id: 'B004',
        name: 'Facial Mask',
        category: 'Beauty & Health',
        image: 'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?w=800',
        price: '$18.99',
        description: 'Deep cleansing facial mask for radiant skin.',
        features: ['Natural clay', 'Deep cleansing', 'Pore minimizing', 'Suitable for all skin types', 'Weekly treatment']
    }
];

// u5907u7528u56feu7247uff0cu7528u4e8eu56feu7247u52a0u8f7du5931u8d25u65f6u663eu793a
const backupImages = {
    'Electronics': 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=800',
    'Clothing': 'https://images.unsplash.com/photo-1489987707025-c0654b55a2e2?w=800',
    'Home Goods': 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=800',
    'Beauty & Health': 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=800',
    'default': 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800'
};

// u4ea7u54c1u7c7bu522bu56feu7247u96c6u5408
const categoryImagesCollection = {
    'Electronics': [
        'https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=800',
        'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=800',
        'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800',
        'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800',
        'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800',
        'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800',
        'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800',
        'https://images.unsplash.com/photo-1519558260268-cde7e03a0152?w=800',
        'https://images.unsplash.com/photo-1588508065123-287b28e013da?w=800',
        'https://images.unsplash.com/photo-1526738549149-8e07eca6c147?w=800'
    ],
    'Clothing': [
        'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800',
        'https://images.unsplash.com/photo-1489987707025-c0654b55a2e2?w=800',
        'https://images.unsplash.com/photo-1551537482-f2075a1d41f2?w=800',
        'https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=800',
        'https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=800',
        'https://images.unsplash.com/photo-1560343090-f0409e92791a?w=800',
        'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800',
        'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800',
        'https://images.unsplash.com/photo-1523381294911-8d3cead13475?w=800',
        'https://images.unsplash.com/photo-1479064555552-3ef4979f8908?w=800'
    ],
    'Home Goods': [
        'https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=800',
        'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=800',
        'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800',
        'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800',
        'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=800',
        'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800',
        'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800',
        'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=800',
        'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=800',
        'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=800'
    ],
    'Beauty & Health': [
        'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=800',
        'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=800',
        'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800',
        'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=800',
        'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800',
        'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?w=800',
        'https://images.unsplash.com/photo-1571646034647-52e6ea84b28c?w=800',
        'https://images.unsplash.com/photo-1570194065650-d99fb4d8a609?w=800',
        'https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=800',
        'https://images.unsplash.com/photo-1631730359585-5d8cfb98f3bf?w=800'
    ]
};

// u83b7u53d6u7c7bu522bu56feu7247 - u7528u4e8eu7c7bu522bu9875u9762
function getCategoryImage(category) {
    if (categoryImagesCollection[category]) {
        const images = categoryImagesCollection[category];
        const randomIndex = Math.floor(Math.random() * images.length);
        return images[randomIndex];
    }
    return backupImages['default'];
}

// u83b7u53d6u6240u6709u4ea7u54c1
function getAllProducts() {
    return productCatalog;
}

// u83b7u53d6u7279u5b9au7c7bu522bu7684u4ea7u54c1
function getProductsByCategory(category) {
    return productCatalog.filter(product => product.category === category);
}

// u6839u636eIDu83b7u53d6u4ea7u54c1
function getProductById(id) {
    return productCatalog.find(product => product.id === id);
}

// u83b7u53d6u9996u9875u63a8u8350u4ea7u54c1
function getFeaturedProducts() {
    // u8fd4u56deu56fau5b9au7684u63a8u8350u4ea7u54c1uff08u6bcfu4e2au7c7bu522bu7684u7b2cu4e00u4e2au4ea7u54c1uff09
    return [
        productCatalog[0], // Electronics
        productCatalog[4], // Clothing
        productCatalog[8], // Home Goods
        productCatalog[12] // Beauty & Health
    ];
}

// u83b7u53d6u76f8u5173u4ea7u54c1 - u540cu7c7bu522bu7684u5176u4ed6u4ea7u54c1
function getRelatedProducts(category, currentProductId) {
    return productCatalog.filter(product => 
        product.category === category && product.id !== currentProductId
    ).slice(0, 4); // u6700u591au8fd4u56de4u4e2au76f8u5173u4ea7u54c1
}

// u83b7u53d6u5907u7528u56feu7247
function getBackupImage(category) {
    return backupImages[category] || backupImages['default'];
}
