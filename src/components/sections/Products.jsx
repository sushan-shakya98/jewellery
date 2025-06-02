import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiShoppingBag, FiHeart } from 'react-icons/fi'

const Products = ({ addToCart }) => {
  const [activeCategory, setActiveCategory] = useState('all')
  const [hoveredProduct, setHoveredProduct] = useState(null)
  
  const categories = [
    { id: 'all', name: 'All' },
    { id: 'necklaces', name: 'Necklaces' },
    { id: 'rings', name: 'Rings' },
    { id: 'earrings', name: 'Earrings' },
    { id: 'bracelets', name: 'Bracelets' }
  ]
  
  const products = [
    {
      id: 1,
      name: 'Royal Chain Necklace',
      price: 1499,
      category: 'necklaces',
      image: 'https://images.pexels.com/photos/9628115/pexels-photo-9628115.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      isNew: true,
      isBestseller: false
    },
    {
      id: 2,
      name: 'Eternal Love Ring',
      price: 999,
      category: 'rings',
      image: 'https://images.pexels.com/photos/10891780/pexels-photo-10891780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      isNew: false,
      isBestseller: true
    },
    {
      id: 3,
      name: 'Cascade Drop Earrings',
      price: 799,
      category: 'earrings',
      image: 'https://images.pexels.com/photos/14557287/pexels-photo-14557287.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      isNew: true,
      isBestseller: false
    },
    {
      id: 4,
      name: 'Infinity Bracelet',
      price: 899,
      category: 'bracelets',
      image: 'https://images.pexels.com/photos/10891768/pexels-photo-10891768.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      isNew: false,
      isBestseller: false
    },
    {
      id: 5,
      name: 'Twisted Rope Necklace',
      price: 1299,
      category: 'necklaces',
      image: 'https://images.pexels.com/photos/10891780/pexels-photo-10891780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      isNew: false,
      isBestseller: true
    },
    {
      id: 6,
      name: 'Solitaire Diamond Ring',
      price: 1899,
      category: 'rings',
      image: 'https://images.pexels.com/photos/9628842/pexels-photo-9628842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      isNew: true,
      isBestseller: false
    },
    {
      id: 7,
      name: 'Stud Earrings Set',
      price: 599,
      category: 'earrings',
      image: 'https://images.pexels.com/photos/8891959/pexels-photo-8891959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      isNew: false,
      isBestseller: false
    },
    {
      id: 8,
      name: 'Charm Bracelet',
      price: 749,
      category: 'bracelets',
      image: 'https://images.pexels.com/photos/13349809/pexels-photo-13349809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      isNew: false,
      isBestseller: true
    }
  ]
  
  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory)
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1
      }
    }
  }
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <section id="products" className="py-20 bg-cream-light">
      <div className="container">
        <div className="section-title">
          <h2>Our Products</h2>
        </div>
        
        {/* Category tabs */}
        <div className="flex flex-wrap justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`px-6 py-2 mx-2 my-2 transition-all duration-300 border-b-2 ${
                activeCategory === category.id 
                  ? 'border-gold text-gold' 
                  : 'border-transparent text-charcoal hover:text-gold'
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Product grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {filteredProducts.map((product) => (
            <motion.div 
              key={product.id}
              className="product-card group"
              variants={itemVariants}
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div className="relative overflow-hidden">
                {/* Product labels */}
                {product.isNew && (
                  <span className="absolute top-4 left-4 z-10 bg-burgundy text-white text-xs px-2 py-1 rounded">
                    New
                  </span>
                )}
                {product.isBestseller && (
                  <span className="absolute top-4 left-4 z-10 bg-gold text-white text-xs px-2 py-1 rounded">
                    Bestseller
                  </span>
                )}
                
                {/* Product image */}
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-72 object-cover"
                />
                
                {/* Quick actions overlay */}
                <div 
                  className={`absolute inset-0 bg-charcoal bg-opacity-40 flex items-center justify-center gap-4 transition-opacity duration-300 ${
                    hoveredProduct === product.id ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <button
                    className="w-12 h-12 rounded-full bg-white text-charcoal flex items-center justify-center hover:bg-gold hover:text-white transition-colors duration-300"
                    onClick={() => addToCart(product)}
                    aria-label="Add to cart"
                  >
                    <FiShoppingBag className="w-5 h-5" />
                  </button>
                  <button
                    className="w-12 h-12 rounded-full bg-white text-charcoal flex items-center justify-center hover:bg-gold hover:text-white transition-colors duration-300"
                    aria-label="Add to wishlist"
                  >
                    <FiHeart className="w-5 h-5" />
                  </button>
                </div>
              </div>
              
              {/* Product info */}
              <div className="p-6">
                <h4 className="text-xl font-serif mb-2">{product.name}</h4>
                <p className="text-gray-600 mb-4">18K Gold</p>
                <div className="flex justify-between items-center">
                  <span className="text-gold font-semibold">${product.price}</span>
                  <button 
                    className="text-charcoal hover:text-gold underline underline-offset-4"
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Load more button */}
        <div className="text-center mt-12">
          <button className="btn btn-secondary">
            Load More Products
          </button>
        </div>
      </div>
    </section>
  )
}

export default Products