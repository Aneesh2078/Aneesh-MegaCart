/* ==========================================================================
   MegaCart Premium E-Commerce Interactivity Logic
   ========================================================================== */

// Product Database
const productDatabase = {
  1: { id: 1, name: 'Next-Gen Smartphone 5G', category: 'Mobiles', price: 12999, original_price: 19999, rating: 4.6, reviews: 12305, discount: 35, image: 'images/product_phone.svg', description: '8GB RAM, 128GB ROM, Octa-Core Processor, 6.7" FHD+ Display', specs: ['5G Connectivity', '8GB RAM', '128GB Storage', 'Octa-Core Processor', 'Dual Camera 48MP+8MP', '4000mAh Battery'] },
  2: { id: 2, name: 'Ultra-Slim Metallic Notebook 14"', category: 'Electronics', price: 38990, original_price: 54999, rating: 4.4, reviews: 8412, discount: 29, image: 'images/product_laptop.svg', description: 'Intel i5 (11th Gen), 16GB RAM, 512GB SSD, Windows 11', specs: ['Intel i5-11th Gen', '16GB RAM', '512GB SSD', '14" FHD Display', 'Weighs 1.4kg', '12hrs Battery'] },
  3: { id: 3, name: 'Wireless Active Noise Cancelling Headphones', category: 'Electronics', price: 2499, original_price: 4999, rating: 4.5, reviews: 4510, discount: 50, image: 'images/product_headphones.svg', description: 'Premium ANC Technology, 40 Hours Playtime, Bluetooth 5.0', specs: ['Active Noise Cancellation', '40hrs Playtime', 'Bluetooth 5.0', 'Built-in Microphone', 'Foldable Design', 'Touch Controls'] },
  4: { id: 4, name: 'Smart Watch v2 & Fitness Tracker', category: 'Electronics', price: 1899, original_price: 3999, rating: 4.3, reviews: 23194, discount: 52, image: 'images/product_watch.svg', description: 'SpO2 Monitoring, Heart Rate Monitor, GPS, Water Resistant', specs: ['SpO2 Monitoring', 'Heart Rate Monitor', 'GPS Tracking', '14-Day Battery', 'Water Resistant 50m', 'AMOLED Display'] },
  5: { id: 5, name: 'Pro-Flex Lightweight Breathable Running Shoes', category: 'Fashion', price: 1299, original_price: 2499, rating: 4.2, reviews: 1215, discount: 48, image: 'images/product_shoes.svg', description: 'Lightweight Design, Cushioned Sole, Perfect for Running', specs: ['Ultra-Light Weight', 'Breathable Mesh', 'Cushioned Sole', 'Anti-Slip Grip', 'Available Sizes 6-13', 'Multi-Color Options'] },
  6: { id: 6, name: 'Professional 4K DSLR Camera', category: 'Electronics', price: 42500, original_price: 59999, rating: 4.7, reviews: 756, discount: 29, image: 'images/product_camera.svg', description: '24.2 MP Sensor, 4K Video, Prime Lens Kit Included', specs: ['24.2MP Full-Frame Sensor', '4K Video Recording', 'ISO 100-51200', 'Prime Lens 50mm Included', 'Weather Sealed Body', 'Dual SD Card Slots'] },
  7: { id: 7, name: 'Ergonomic High-Back Mesh Chair', category: 'Home & Furniture', price: 4899, original_price: 8999, rating: 4.4, reviews: 3981, discount: 45, image: 'images/product_chair.svg', description: 'Lumbar Support & Armrests, Max Weight 120kg, Adjustable Height', specs: ['Ergonomic Design', 'Lumbar Support', 'Adjustable Armrests', 'Mesh Backing', 'Tilt Lock Function', 'Height Adjustable'] },
  8: { id: 8, name: 'Water-Resistant Anti-Theft Backpack', category: 'Travel & Accessories', price: 999, original_price: 2499, rating: 4.3, reviews: 6892, discount: 60, image: 'images/product_bag.svg', description: 'USB Charger Port, 30L Capacity, Weather Proof Material', specs: ['Water Resistant', 'USB Charger Port', '30L Capacity', 'Anti-Theft Design', 'Multiple Compartments', 'Laptop Sleeve 17"'] },
  9: { id: 9, name: 'Stylus Smart Tablet', category: 'Electronics', price: 14999, original_price: 24999, rating: 4.5, reviews: 1514, discount: 40, image: 'images/product_tablet.svg', description: '11-inch Smart Tablet with stylus pen (8GB RAM, 128GB WiFi)', specs: ['11-inch IPS Display', 'Stylus Pen Included', '8GB RAM', '128GB Storage', '7000mAh Battery', 'Android 13'] },
  10: { id: 10, name: 'Wireless Bluetooth Speaker', category: 'Electronics', price: 1299, original_price: 2999, rating: 4.4, reviews: 3219, discount: 56, image: 'images/product_speaker.svg', description: 'Wireless Cylinder Bluetooth Speaker with 360-degree RGB Sound Ring', specs: ['360° Surround Sound', 'RGB Light Ring', 'Bluetooth 5.2', '12 Hours Playback', 'IPX7 Waterproof', 'Dual Bass Radiators'] },
  11: { id: 11, name: 'Smartphone Pro Max', category: 'Mobiles', price: 74999, original_price: 89999, rating: 4.8, reviews: 954, discount: 16, image: 'images/product_phone_pro.svg', description: 'Gold Titanium, 256GB Storage, Triple Camera System', specs: ['Gold Titanium Finish', '256GB Storage', 'Triple Lens Camera', 'Super Retina XDR', 'Dynamic Island', 'A17 Pro Chip'] },
  12: { id: 12, name: 'Clamshell Flip Phone', category: 'Mobiles', price: 49999, original_price: 69999, rating: 4.5, reviews: 2810, discount: 28, image: 'images/product_phone_flip.svg', description: 'Clamshell Smart Flip Phone (Flex Screen, Dual Front Cameras)', specs: ['Folding OLED Screen', 'Compact Clamshell', 'Dual Front Cameras', '8GB RAM', '256GB Storage', 'Flex Mode Hinge'] },
  13: { id: 13, name: 'Robot Vacuum Cleaner', category: 'Appliances', price: 18999, original_price: 29999, rating: 4.6, reviews: 2109, discount: 36, image: 'images/product_vacuum.svg', description: 'Smart LiDAR Robot Vacuum Cleaner with Automatic Docking & Mop', specs: ['LiDAR Smart Mapping', 'Sweep & Mop 2-in-1', 'Auto-Dock Charging', '4000Pa Suction', 'App & Voice Control', '150 Mins Runtime'] },
  14: { id: 14, name: 'Smart OLED TV', category: 'Appliances', price: 34999, original_price: 49999, rating: 4.7, reviews: 4152, discount: 30, image: 'images/product_tv.svg', description: '55-inch Ultra HD 4K Smart OLED Television (Dolby Vision, Android TV)', specs: ['55" 4K OLED Screen', 'Dolby Vision & Atmos', 'Android TV OS', 'Google Assistant', '3 x HDMI 2.1 Ports', '120Hz Refresh Rate'] },
  15: { id: 15, name: 'Kitchen Stand Mixer', category: 'Home & Kitchen', price: 5499, original_price: 8999, rating: 4.4, reviews: 1894, discount: 38, image: 'images/product_mixer.svg', description: 'Professional Kitchen Stand Mixer and steel bowl (1000W, 5 Speed)', specs: ['1000W Powerful Motor', '5-Speed Control', '5L Stainless Steel Bowl', 'Beater & Dough Hook', 'Tilt-Head Design', 'Splash Guard'] },
  16: { id: 16, name: 'Elixir Parfum', category: 'Beauty & Care', price: 1499, original_price: 2999, rating: 4.6, reviews: 1844, discount: 50, image: 'images/product_perfume.svg', description: 'Luxury French Perfume Elixir Gold Spray (100ml EDP)', specs: ['French Gold Formulation', '100ml Eau de Parfum', 'Long-lasting Scent', 'Woody Spicy Notes', 'Premium Glass Bottle', 'Gift Box Included'] },
  17: { id: 17, name: 'Quadcopter Drone', category: 'Toys & Hobbies', price: 7999, original_price: 14999, rating: 4.6, reviews: 2912, discount: 46, image: 'images/product_drone.svg', description: '4K Camera GPS Quadcopter Drone with 30 Mins Flight Time', specs: ['4K Ultra HD Camera', 'GPS Auto-Return Home', '30 Mins Flight Time', 'Brushless Motors', '3-Axis Gimbal Stabilizer', 'Foldable Design'] },
  18: { id: 18, name: 'Wireless Gamepad', category: 'Gaming Gear', price: 2999, original_price: 4999, rating: 4.5, reviews: 4561, discount: 40, image: 'images/product_console.svg', description: 'Wireless Game Console Controller with Bluetooth & Vibration', specs: ['Bluetooth Connectivity', 'Dual Vibration Motors', 'Ergonomic Grips', '10H Rechargeable Battery', 'Multi-Platform Support', 'Analog Triggers'] },
  19: { id: 19, name: 'Hardshell Suitcase Trolley', category: 'Travel & Accessories', price: 3499, original_price: 6999, rating: 4.5, reviews: 1419, discount: 50, image: 'images/product_suitcase.svg', description: 'Hardshell Rolling Suitcase Trolley Bag with Spinner Wheels (Large Size)', specs: ['Polycarbonate Hardshell', '360° Spinner Wheels', 'TSA Approved Lock', 'Expandable Capacity', 'Telescopic Handle', 'Scratch Resistant'] },
  20: { id: 20, name: 'Double-Door Refrigerator', category: 'Appliances', price: 24999, original_price: 34999, rating: 4.5, reviews: 1205, discount: 28, image: 'images/product_refrigerator.svg', description: 'Smart Double-Door Frost Free Refrigerator with Digital Inverter', specs: ['Frost Free Technology', '260L Capacity', 'Convertible Freezer', 'Digital Inverter Compressor', 'Smart Screen Control', 'Water Dispenser'] },
  21: { id: 21, name: 'Front Load Washing Machine', category: 'Appliances', price: 28999, original_price: 39999, rating: 4.7, reviews: 1845, discount: 27, image: 'images/product_washing_machine.svg', description: 'Fully-Automatic Front Load Washing Machine with Inverter Direct Drive', specs: ['Inverter Direct Drive', '8KG Load Capacity', 'Steam Wash Technology', '1400 RPM Spin Speed', 'Smart Diagnostics', 'Child Lock'] },
  22: { id: 22, name: 'Microwave Oven', category: 'Appliances', price: 8999, original_price: 13999, rating: 4.4, reviews: 954, discount: 35, image: 'images/product_microwave.svg', description: 'Convection Microwave Oven with Touch Key Pad & Grill Mode', specs: ['Convection & Grill', '28L Capacity', 'Touch Control Panel', 'Auto Cook Menus', 'Keep Warm Function', 'Child Lock'] },
  23: { id: 23, name: 'Split Air Conditioner', category: 'Appliances', price: 31999, original_price: 44999, rating: 4.6, reviews: 2154, discount: 28, image: 'images/product_air_conditioner.svg', description: '1.5 Ton 5-Star Inverter Split Air Conditioner with PM 2.5 Filter', specs: ['1.5 Ton Capacity', '5-Star BEE Rating', 'Variable Speed Inverter', 'PM 2.5 Anti-dust Filter', 'Copper Condenser Coil', 'Super Silent Mode'] },
  24: { id: 24, name: 'Non-Stick Cookware Set', category: 'Home & Kitchen', price: 2499, original_price: 3999, rating: 4.3, reviews: 1045, discount: 37, image: 'images/product_cookware.svg', description: 'Premium Non-Stick Cookware Set - Frying Pan & Pot with Glass Lids', specs: ['3-Layer Non-stick Coating', 'Induction Friendly Base', 'Soft Touch Handles', 'Tempered Glass Lids', 'Dishwasher Safe', 'Cherry Red Finish'] },
  25: { id: 25, name: 'Electric Kettle', category: 'Home & Kitchen', price: 999, original_price: 1999, rating: 4.5, reviews: 2412, discount: 50, image: 'images/product_kettle.svg', description: '1.8L Double-Wall Electric Kettle with Auto Shut-Off', specs: ['1.8L Water Capacity', '1500W Fast Boiling', 'Double Wall Cool Touch', 'Stainless Steel Inner', 'Auto Shut-Off Protection', '360° Swivel Base'] },
  26: { id: 26, name: 'Espresso Coffee Maker', category: 'Home & Kitchen', price: 6999, original_price: 9999, rating: 4.4, reviews: 812, discount: 30, image: 'images/product_espresso.svg', description: '15-Bar High Pressure Espresso Coffee Machine with Steam Frother', specs: ['15 Bar High Pressure', 'Milk Frothing Steam Wand', 'Dual Filter Basket', 'Cup Warming Plate', '1.2L Removable Tank', 'Stainless Steel Body'] },
  27: { id: 27, name: 'Induction Cooktop', category: 'Home & Kitchen', price: 1899, original_price: 2999, rating: 4.3, reviews: 3810, discount: 36, image: 'images/product_induction.svg', description: '2000W Smart Induction Cooktop with Touch Control Panel', specs: ['2000W Power Output', 'Flat Glass Panel', 'Pre-programmed Menus', 'LED Digital Display', 'Auto Pan Detection', 'Timer & Child Lock'] },
  28: { id: 28, name: 'Gym Duffle Bag', category: 'Travel & Accessories', price: 899, original_price: 1999, rating: 4.4, reviews: 654, discount: 55, image: 'images/product_duffle.svg', description: 'Sporty Gym Duffle Bag with Shoe Compartment & Wet Pocket', specs: ['Separate Shoe Pocket', 'Wet/Dry Separation Bag', 'Water Resistant Fabric', 'Adjustable Shoulder Strap', '35L Medium Capacity', 'Tear Resistant'] },
  29: { id: 29, name: 'Laptop Messenger Bag', category: 'Travel & Accessories', price: 1999, original_price: 3999, rating: 4.6, reviews: 412, discount: 50, image: 'images/product_messenger.svg', description: 'Vintage Brown Leather Laptop Messenger Bag / Satchel', specs: ['Genuine Leather Accent', 'Padded Laptop Sleeve 15.6"', 'Adjustable Shoulder Strap', 'Multi-pocket Organizer', 'Magnetic Snaps', 'Stitched Edges'] },
  30: { id: 30, name: 'Hiking Backpack', category: 'Travel & Accessories', price: 2499, original_price: 4999, rating: 4.5, reviews: 892, discount: 50, image: 'images/product_hiking.svg', description: '65L Waterproof Rugged Camping & Hiking Backpack', specs: ['65L Large Capacity', 'Waterproof Rain Cover', 'Ergonomic Suspension', 'Trekking Pole Loops', 'Sleeping Bag Straps', 'Bungee Cord Grid'] },
  31: { id: 31, name: 'Crossbody Sling Bag', category: 'Travel & Accessories', price: 699, original_price: 1499, rating: 4.3, reviews: 1025, discount: 53, image: 'images/product_sling.svg', description: 'Sleek Anti-Theft Crossbody Sling Bag with USB Port', specs: ['Crossbody Sling Design', 'Anti-Theft Lock Pocket', 'External USB Port', 'Waterproof Polyester', 'Reflective Safety Band', 'Padded Air Mesh Back'] },
  32: { id: 32, name: 'Remote Control Car', category: 'Toys & Hobbies', price: 1499, original_price: 2499, rating: 4.4, reviews: 1845, discount: 40, image: 'images/product_rc_car.svg', description: '1:16 Scale Offroad RC Monster Truck 4WD Racing Car', specs: ['4WD Drive System', '1:16 Realistic Scale', '2.4GHz Remote Controller', 'All-Terrain Rubber Tires', 'Shock Absorber Springs', 'Rechargeable Battery'] },
  33: { id: 33, name: 'Wooden Building Blocks', category: 'Toys & Hobbies', price: 899, original_price: 1499, rating: 4.7, reviews: 954, discount: 40, image: 'images/product_blocks.svg', description: 'Classic Natural Wood Building Blocks Set for Toddlers', specs: ['100% Solid Natural Wood', 'Non-toxic Colored Paints', 'Smooth Sanded Edges', 'Various Geometric Shapes', 'Letter/Alphabet Prints', 'Storage Box Included'] },
  34: { id: 34, name: 'VR Headset', category: 'Toys & Hobbies', price: 2999, original_price: 4999, rating: 4.3, reviews: 2451, discount: 40, image: 'images/product_vr_headset.svg', description: 'Virtual Reality VR Headset with Adjustable Lenses & Head Strap', specs: ['HD Aspherical Lenses', 'Adjustable Pupil Distance', 'Padded Breathable Foam', 'Fits 4.7"-6.7" Phones', 'External AR Camera Cutout', '3D Surround Sound'] },
  35: { id: 35, name: 'Teddy Bear', category: 'Toys & Hobbies', price: 599, original_price: 999, rating: 4.8, reviews: 3205, discount: 40, image: 'images/product_teddy.svg', description: 'Ultra-Soft Plush Teddy Bear with Cute Decorative Bow', specs: ['Premium Soft Plush Fur', '100% Recycled Cotton Fill', 'Decorative Satin Bow', 'Child-safe Plastic Eyes', 'Washable Outer Cover', 'Perfect 40cm Size'] }
};



// Cart Management
class CartManager {
  constructor() {
    this.loadCart();
  }

  loadCart() {
    const savedCart = localStorage.getItem('megacart_cart');
    this.items = savedCart ? JSON.parse(savedCart) : [];
    this.updateBadge();
  }

  addItem(productIdentifier, quantity = 1) {
    let product = productDatabase[productIdentifier];
    if (!product) {
      // Find product by exact string name or case-insensitive match, or numeric ID in string format
      product = Object.values(productDatabase).find(p => {
        return p.name.toLowerCase() === String(productIdentifier).toLowerCase() ||
               String(p.id) === String(productIdentifier);
      });
    }
    
    if (!product) {
      console.warn("Product not found in database for identifier:", productIdentifier);
      return false;
    }

    const existingItem = this.items.find(item => item.id === product.id);
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.items.push({ ...product, quantity });
    }
    
    this.saveCart();
    this.updateBadge();
    return true;
  }

  removeItem(productId) {
    const id = parseInt(productId);
    this.items = this.items.filter(item => item.id !== id);
    this.saveCart();
    this.updateBadge();
  }

  updateQuantity(productId, quantity) {
    const id = parseInt(productId);
    const item = this.items.find(item => item.id === id);
    if (item) {
      item.quantity = Math.max(1, quantity);
      this.saveCart();
      this.updateBadge();
    }
  }

  saveCart() {
    localStorage.setItem('megacart_cart', JSON.stringify(this.items));
  }

  updateBadge() {
    const badges = document.querySelectorAll('#cartCountBadge');
    const total = this.items.reduce((sum, item) => sum + item.quantity, 0);
    badges.forEach(badge => {
      badge.innerText = total;
    });
  }

  getCart() {
    return this.items;
  }

  getTotalPrice() {
    return this.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }

  clearCart() {
    this.items = [];
    this.saveCart();
    this.updateBadge();
  }
}

const cart = new CartManager();

/**
 * Handles adding a product to the cart.
 */
function addToCart(productIdentifier) {

  let product = productDatabase[productIdentifier];

  if (!product) {
    product = Object.values(productDatabase).find(p =>
      p.name.toLowerCase() === String(productIdentifier).toLowerCase() ||
      String(p.id) === String(productIdentifier)
    );
  }

  if (!product) {
    showToast('Product not found!', 'danger');
    return;
  }

  cart.addItem(product.id, 1);

  document.getElementById('modalImage').src = product.image;
  document.getElementById('modalName').innerText = product.name;
  document.getElementById('modalCategory').innerText = product.category;
  document.getElementById('modalDescription').innerText = product.description;
  document.getElementById('modalRating').innerText = product.rating;
  document.getElementById('modalReviews').innerText = product.reviews.toLocaleString();
  document.getElementById('modalPrice').innerText = product.price.toLocaleString();
  document.getElementById('modalOriginalPrice').innerText = product.original_price.toLocaleString();
  document.getElementById('modalDiscount').innerText = product.discount;

  const specsContainer = document.getElementById('modalSpecs');
  specsContainer.innerHTML = '';

  product.specs.forEach(spec => {
    specsContainer.innerHTML += `<li>${spec}</li>`;
  });

  const modal = new bootstrap.Modal(
    document.getElementById('cartModal')
  );

  modal.show();

  showToast(
    `<strong>${product.name}</strong> added to cart!`,
    'success'
  );
}

/**
 * Toggles a product in the wishlist.
 */
function toggleWishlist(btn, productName) {
  const icon = btn.querySelector('i');
  if (!icon) return;

  if (icon.classList.contains('bi-heart')) {
    icon.classList.remove('bi-heart');
    icon.classList.add('bi-heart-fill');
    btn.style.color = '#ef4444';
    
    btn.style.transform = 'scale(1.25)';
    setTimeout(() => btn.style.transform = 'none', 200);
    
    showToast(`Added <strong>${productName}</strong> to wishlist!`, 'info');
  } else {
    icon.classList.remove('bi-heart-fill');
    icon.classList.add('bi-heart');
    btn.style.color = 'var(--text-dark)';
    
    showToast(`Removed <strong>${productName}</strong> from wishlist!`, 'danger');
  }
}

/**
 * Handles search query form submission.
 */
function handleSearch() {
  const searchInput = document.getElementById('searchInput');
  if (!searchInput) return;

  const query = searchInput.value.trim();
  if (query !== "") {
    showToast(`Searching for <strong>"${query}"</strong> across all catalog categories...`, 'info');
  }
}

/**
 * Handles newsletter subscription submission.
 */
function handleNewsletter() {
  const emailInput = document.getElementById('newsletterEmail');
  if (!emailInput) return;

  const email = emailInput.value.trim();
  if (email) {
    showToast(`Thank you! <strong>${email}</strong> successfully subscribed to secret deals.`, 'success');
    emailInput.value = '';
  }
}

/**
 * Helper to display customizable Toast notifications.
 */
function showToast(message, type) {
  const toastMessage = document.getElementById('toastMessage');
  const toastEl = document.getElementById('cartToast');
  if (!toastMessage || !toastEl) return;

  toastMessage.innerHTML = message;
  
  toastEl.classList.remove('bg-success', 'bg-info', 'bg-danger');
  
  if (type === 'success') {
    toastEl.classList.add('bg-success');
  } else if (type === 'danger') {
    toastEl.classList.add('bg-danger');
  } else {
    toastEl.classList.add('bg-info');
  }
  
  if (window.bootstrap) {
    const toast = new bootstrap.Toast(toastEl);
    toast.show();
  }
}

// Theme Management - Disabled (Dark mode removed)

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
  cart.loadCart();
});
