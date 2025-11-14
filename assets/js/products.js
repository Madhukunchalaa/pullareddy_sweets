// products.js - Store all product data in one file

const productsData = [
  // SWEETS
  {
    id: 1,
    name: "Motichoor Laddu",
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
  // {
  //   id: 6,
  //   name: "Badam Katli",
  //   image: "assets/img/badam_katli.jpg",
  //   category: "sweets"
  // },
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
  // {
  //   id: 11,
  //   name: "Plum Cake",
  //   image: "assets/img/cakes.jpg",
  //   category: "bakery"
  // },
  {
    id: 12,
    name: "Plum Cake",
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
    id: 16,
    name: "Kova Bun",
    image: "assets/img/kova_bun.jpg",
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
    id: 35,
    name: "Kaju pakoda",
    image: "assets/img/kajupakoda1.jpg",
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
    name: "Amla Pickle",
    image: "assets/img/amla-pickle.jpg",
    category: "pickle&powder"
  },
  {
    id: 43,
    name: "Red Chilli Pickle",
    image: "assets/img/red-chilli-pickle.jpg",
    category: "pickle&powder"
  },
  {
    id: 44,
    name: "Drum Stick Powder",
    image: "assets/img/Drum stick Leaf Powder.jpg",
    category: "pickle&powder"
  },
  {
    id: 45,
    name: "Nalla Karam",
    image: "assets/img/Nalla Karam.jpg",
    category: "pickle&powder"
  },
  {
    id: 46,
    name: "Roasted Chana Powder",
    image: "assets/img/Putnala Karam.jpg",
    category: "pickle&powder"
  },
  {
    id: 47,
    name: "Amla Powder",
    image: "assets/img/Amla Powder.jpg",
    category: "pickle&powder"
  },
  {
    id: 48,
    name: "Groundnut Powder",
    image: "assets/img/Groundnut Powder.jpg",
    category: "pickle&powder"
  },
  {
    id: 49,
    name: "Flax Seeds",
    image: "assets/img/flaxseed_powder.jpg",
    category: "pickle&powder"
  },




  // TRADITIONAL SWEETS
  {
    id: 48,
    name: "Kova Puri",
    image: "assets/img/Kovapuri_Bhujiya1.jpg",
    category: "traditional_sweets"
  },
  {
    id: 49,
    name: "Badusha",
    image: "assets/img/badushaa.jpg",
    category: "traditional_sweets"
  },
  {
    id: 50,
    name: "Laddoo",
    image: "assets/img/boondi_laddu.jpg",
    category: "traditional_sweets"
  },
  {
    id: 51,
    name: "Bombay Halwa",
    image: "assets/img/MixedHalwa.jpg",
    category: "traditional_sweets"
  },
  {
    id: 52,
    name: "Motichoor Laddoo",
    image: "assets/img/Mothichur_laddu.jpg",
    category: "traditional_sweets"
  },
  {
    id: 53,
    name: "Soan Patti",
    image: "assets/img/soan patti.jpg",
    category: "traditional_sweets"
  },
  {
    id: 54,
    name: "Pheni",
    image: "assets/img/Pheni1.jpg",
    category: "traditional_sweets"
  },
  {
    id: 55,
    name: "Jangri",
    image: "assets/img/Jaangri1.jpg",
    category: "traditional_sweets"
  },
  {
    id: 56,
    name: "Ariselu",
    image: "assets/img/Ariselu1.jpg",
    category: "traditional_sweets"
  },
  {
    id: 57,
    name: "Soan Papdi Yellow and White",
    image: "assets/img/soan-papdi.jpg",
    category: "traditional_sweets"
  },
  {
    id: 58,
    name: "Pootharekulu",
    image: "assets/img/paper-sweet1.jpg",
    category: "traditional_sweets"
  },
  {
    id: 59,
    name: "Chocolate Burfi",
    image: "assets/img/chocolate-burfi.jpg",
    category: "traditional_sweets"
  },
  {
    id: 60,
    name: "Mysore Paak",
    image: "assets/img/MysorePaak1.jpg",
    category: "traditional_sweets"
  },
  {
    id: 61,
    name: "Assorted Sweets",
    image: "assets/img/sweetbox1.jpg",
    category: "traditional_sweets"
  },

  // KAJU SWEETS
  {
    id: 62,
    name: "Kaju Pakam",
    image: "assets/img/kaju_pakam.jpg",
    category: "kaju_sweets"
  },
  {
    id: 623,
    name: "Kaju katli",
    image: "assets/img/kaju_katli.jpg",
    category: "kaju_sweets"
  },
  {
    id: 63,
    name: "Kaju Burfi",
    image: "assets/img/Kaju-Barfi.jpg",
    category: "kaju_sweets"
  },
  {
    id: 64,
    name: "Bellam Kaju",
    image: "assets/img/Bellam-kaju.jpg",
    category: "kaju_sweets"
  },
  {
    id: 65,
    name: "Kaju Bouquet",
    image: "assets/img/kaju-bouquet.jpg",
    category: "kaju_sweets"
  },
  {
    id: 67,
    name: "Kaju Casatta",
    image: "assets/img/kajupizza1.jpg",
    category: "kaju_sweets"
  },
  {
    id: 68,
    name: "Kaju Anjeer Roll",
    image: "assets/img/kajuroll1.jpg",
    category: "kaju_sweets"
  },
  {
    id: 69,
    name: "Kaju Pista Roll",
    image: "assets/img/kajupistaroll1.jpg",
    category: "kaju_sweets"
  },

  // DRY FRUIT SWEETS
  {
    id: 789,
    name: "Dry Fruit Laddoo",
    image: "assets/img/dryfruit_laddu.jpg",
    category: "dry_fruit_sweets"
  },
  {
    id: 71,
    name: "Khajur Bisco",
    image: "assets/img/Kajur-Bisco.jpg",
    category: "dry_fruit_sweets"
  },

 

  {
    id: 72,
    name: "Kesar Anjeer Roll",
    image: "assets/img/kesarianjeerroll1.jpg",
    category: "dry_fruit_sweets"
  },
  {
    id: 73,
    name: "Badam Burfi",
    image: "assets/img/badam-burfi.jpg",
    category: "dry_fruit_sweets"
  },
  {
    id: 74,
    name: "Pista Burfi",
    image: "assets/img/pista-burfi1.jpg",
    category: "dry_fruit_sweets"
  },

  // JUICY / BENGALI SWEETS
  {
    id: 75,
    name: "Gulab Jamun",
    image: "assets/img/Gulabjamun1.jpg",
    category: "juicy_sweets"
  },
  // {
  //   id: 76,
  //   name: "Rasgulla",
  //   image: "assets/img/Rasgulla1.jpg",
  //   category: "juicy_sweets"
  // },
  {
    id: 77,
    name: "Basundi",
    image: "assets/img/Basundi.jpg",
    category: "juicy_sweets"
  },
  {
    id: 78,
    name: "Rasmalai",
    image: "assets/img/Rasmalai1.jpg",
    category: "juicy_sweets"
  },
  {
    id: 79,
    name: "Rasbheri",
    image: "assets/img/Rasbheri1.jpg",
    category: "juicy_sweets"
  },

  // BAKERY (ADDITIONAL ITEMS)
 
 
  {
    id: 82,
    name: "Chocolate Chip Cookies",
    image: "assets/img/chocolatechipcookie.jpg",
    category: "bakery"
  },
  
  {
    id: 84,
    name: "Badam Pista Sticks",
    image: "assets/img/Badam-Pista-Sticks.jpg",
    category: "bakery"
  },
  {
    id: 83,
    name: "Coconut Cookies",
    image: "assets/img/Coconut_Cookies[2].jpg",
    category: "bakery"
  },

    {
    id: 85,
    name: "Kaju katli",
    image: "assets/img/kaju_katli",
    category: "kaaju"
  },
  {
    id: 86,
    name: "Vanilla Sponge Cake",
    image: "assets/img/VanillaSpongeCake1.jpg",
    category: "bakery"
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