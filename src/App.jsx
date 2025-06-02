import { useState } from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Collections from './components/sections/Collections'
import Products from './components/sections/Products'
import Features from './components/sections/Features'
import Testimonials from './components/sections/Testimonials'
import Contact from './components/sections/Contact'
import NewsletterBanner from './components/sections/NewsletterBanner'
import CartDrawer from './components/cart/CartDrawer'

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])

  const addToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id)
    
    if (existingItem) {
      setCartItems(cartItems.map(item => 
        item.id === product.id 
          ? { ...item, quantity: item.quantity + 1 } 
          : item
      ))
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }])
    }
    
    setIsCartOpen(true)
  }

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId))
  }

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId)
      return
    }
    
    setCartItems(cartItems.map(item => 
      item.id === productId 
        ? { ...item, quantity: newQuantity } 
        : item
    ))
  }

  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0)

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar cartItemCount={cartItemCount} openCart={() => setIsCartOpen(true)} />
      
      <main className="flex-grow">
        <Hero />
        <About />
        <Collections />
        <Products addToCart={addToCart} />
        <Features />
        <Testimonials />
        <NewsletterBanner />
        <Contact />
      </main>
      
      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        removeItem={removeFromCart}
        updateQuantity={updateQuantity}
      />
      
      <Footer />
    </div>
  )
}

export default App