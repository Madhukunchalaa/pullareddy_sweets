// products.js - Store all product data in one file

const productsData = [
  // SWEETS
  {
    id: 1,
    name: "Mothichur Laddu",
    image: "assets/img/Mothichur_laddu.jpg",
    category: "sweets",
    featured: true
  },
  {
    id: 2,
    name: "Kaju Katli",
    image: "assets/img/kaju_katli.jpg",
    category: "sweets"
  },
  {
    id: 3,
    name: "Kalakand",
    image: "assets/img/kalakand.jpg",
    category: "sweets"
  },
  {
    id: 4,
    name: "Badusha",
    image: "assets/img/badushaa.jpg",
    category: "sweets"
  },
  {
    id: 5,
    name: "Dry Fruit Laddu",
    image: "assets/img/dryfruit_laddu.jpg",
    category: "sweets"
  },
  {
    id: 6,
    name: "Badam Katli",
    image: "assets/img/badam_katli.jpg",
    category: "sweets"
  },
  {
    id: 7,
    name: "Boondi Laddu",
    image: "assets/img/boondi_laddu.jpg",
    category: "sweets"
  },
  {
    id: 8,
    name: "Ravva Laddu",
    image: "assets/img/rava_laddu.jpg",
    category: "sweets"
  },
  {
    id: 9,
    name: "Kaju pakam",
    image: "assets/img/kaju_pakam.jpg",
    category: "sweets"
  },
  {
    id: 10,
    name: "Bandar Laddu",
    image: "assets/img/Bandhar_laddu.jpg",
    category: "sweets"
  },



  
  // BAKERY
  {
    id: 11,
    name: "Cakes",
    image: "assets/img/cakes.jpg",
    category: "bakery"
  },
  {
    id: 12,
    name: "Dilpasand",
    image: "assets/img/Dilpasand.jpg",
    category: "bakery"
  },
  {
    id: 13,
    name: "Brown biscuits",
    image: "assets/img/Brwn biscuits.jpg",
    category: "bakery"
  },
  {
    id: 14,
    name: "Osmania biscuits",
    image: "assets/img/osmania_Biscuits.jpg",
    category: "bakery"
  },
  {
    id: 15,
    name: "Spl Biscuits",
    image: "assets/img/Spl Biscuits (1).jpg",
    category: "bakery"
  },
  {
    id: 16,
    name: "Kova Bun",
    image: "assets/img/kova_bun.jpg",
    category: "bakery"
  },
  {
    id: 17,
    name: "Biscuits",
    image: "assets/img/Biscuits.jpg",
    category: "bakery"
  },
  
  // SNACKS
  {
    id: 18,
    name: "Chekodilu",
    image: "assets/img/chekodilu.jpg",
    category: "snacks"
  },
  {
    id: 19,
    name: "Cornflakes Mixture",
    image: "assets/img/mixture.jpg",
    category: "snacks"
  },
  {
    id: 20,
    name: "Veena Murkulu",
    image: "assets/img/veena murkulu.jpg",
    category: "snacks"
  },
  {
    id: 21,
    name: "Pappu Chekka",
    image: "assets/img/pappu_chekka.jpg",
    category: "snacks",
    featured: true
  },
  {
    id: 22,
    name: "Ribbon Pakoda",
    image: "assets/img/ribbon_pakoda.jpg",
    category: "snacks"
  },
  {
    id: 23,
    name: "Samosa",
    image: "assets/img/samosa.jpg",
    category: "snacks"
  },
  {
    id: 24,
    name: "All in one Mixture",
    image: "assets/img/All_in_oneMixture.jpg",
    category: "snacks"
  },
  {
    id: 25,
    name: "Challa Karalu",
    image: "assets/img/challa-chakralu.jpg",
    category: "snacks"
  },
  {
    id: 26,
    name: "Minapa Murkulu",
    image: "assets/img/Minapa murkulu.jpg",
    category: "snacks"
  },
  {
    id: 27,
    name: "Masala Peanuts",
    image: "assets/img/masala-peanuts.jpg",
    category: "snacks"
  },
  
  // GHEE SAVORIES
  {
    id: 28,
    name: "Soan Patti",
    image: "assets/img/soan patti.jpg",
    category: "ghee"
  },
  {
    id: 29,
    name: "Ariselu",
    image: "assets/img/ariselu.jpeg",
    category: "ghee"
  },
  {
    id: 30,
    name: "Badusha",
    image: "assets/img/Badusha.jpg",
    category: "ghee"
  },
  {
    id: 31,
    name: "Motichur Laddu",
    image: "assets/img/mothichur-laddu.jpg",
    category: "ghee",
    featured: true
  },
  {
    id: 32,
    name: "Ajmeri Kalakand",
    image: "assets/img/kalakand.jpg",
    category: "ghee"
  },
  {
    id: 33,
    name: "Mysorepak",
    image: "assets/img/mysorepak.jpg",
    category: "ghee",
    featured: true
  },
  {
    id: 34,
    name: "Jaggery Sunnundalu",
    image: "assets/img/jaggery sunnandalu.jpg",
    category: "ghee"
  },
  {
    id: 35,
    name: "Milk Mysorepak",
    image: "assets/img/milkmysorepak.jpg",
    category: "ghee"
  },
  {
    id: 36,
    name: "Ghee Kara Boondi",
    image: "assets/img/ghee karaboondhi.jpeg",
    category: "ghee"
  },
  
  // PICKLES AND POWDERS
  {
    id: 37,
    name: "Mango Pickle",
    image: "assets/img/all pickles/MangoPickle.jpg",
    category: "pickle&powder"
  },
  {
    id: 38,
    name: "Gongura Pickle",
    image: "assets/img/all pickles/GonguraPickle.jpg",
    category: "pickle&powder"
  },
  {
    id: 39,
    name: "Tamarind Pickle",
    image: "assets/img/all pickles/TamarindPickle.jpg",
    category: "pickle&powder"
  },
  {
    id: 40,
    name: "Tomato Pickle",
    image: "assets/img/all pickles/TomatoPickle1.jpg",
    category: "pickle&powder"
  },
  {
    id: 41,
    name: "Lemon Pickle",
    image: "assets/img/all pickles/LemonPickle-V.jpg",
    category: "pickle&powder",
    featured: true
  },
  {
    id: 42,
    name: "Drum Stick Powder",
    image: "assets/img/Drum stick Leaf Powder.jpg",
    category: "pickle&powder"
  },
  {
    id: 43,
    name: "Nalla Karam",
    image: "assets/img/Nalla Karam.jpg",
    category: "pickle&powder"
  },
  {
    id: 44,
    name: "Roasted Chana Powder",
    image: "assets/img/Putnala Karam.jpg",
    category: "pickle&powder"
  },
  {
    id: 45,
    name: "Amla Powder",
    image: "assets/img/Amla Powder.jpg",
    category: "pickle&powder"
  },
  {
    id: 46,
    name: "Groundnut Powder",
    image: "assets/img/Groundnut Powder.jpg",
    category: "pickle&powder"
  },
  {
    id: 47,
    name: "Flax Seeds",
    image: "assets/img/flaxseed_powder.jpg",
    category: "pickle&powder"
  },
   //traditional sweets

   {
    id: 48,
    name: "Kova puri",
    image: "assets/img/kova_puri.jpg",
    category:"traditional_sweets"
   }





];

// Function to get products by category
function getProductsByCategory(category) {
  if (category === 'all') return productsData;
  return productsData.filter(product => product.category === category);
}

// Function to get featured products
function getFeaturedProducts() {
  return productsData.filter(product => product.featured === true);
}

// Function to render products
function renderProducts(products, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  
  container.innerHTML = products.map(product => `
    <div class="col-xl-4 col-lg-4 col-md-6 product-item" data-category="${product.category}">
      <div class="food-items center">
        <div class="food-image">
          <img src="${product.image}" alt="${product.name}">
        </div>
        <div class="food-content">
          <h3>${product.name}</h3>
        </div>
      </div>
    </div>
  `).join('');
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { productsData, getProductsByCategory, getFeaturedProducts, renderProducts };
}