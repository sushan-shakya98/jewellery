import { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiTrash2, FiPlus, FiMinus } from 'react-icons/fi'

const CartDrawer = ({ isOpen, onClose, cartItems, removeItem, updateQuantity }) => {
  const drawerRef = useRef(null)
  
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target) && isOpen) {
        onClose()
      }
    }
    
    const handleEscape = (event) => {
      if (event.key === 'Escape' && isOpen) {
        onClose()
      }
    }
    
    document.addEventListener('mousedown', handleOutsideClick)
    document.addEventListener('keydown', handleEscape)
    
    // Prevent scrolling when drawer is open
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'auto'
    }
  }, [isOpen, onClose])
  
  const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50"
          />
          
          {/* Drawer */}
          <motion.div
            ref={drawerRef}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 right-0 w-full sm:w-96 h-full bg-white shadow-xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="p-4 border-b border-gray-200 flex justify-between items-center">
              <h2 className="text-xl font-serif">Your Cart</h2>
              <button 
                onClick={onClose}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors duration-200"
                aria-label="Close cart"
              >
                <FiX className="w-5 h-5" />
              </button>
            </div>
            
            {/* Cart items */}
            <div className="flex-grow overflow-y-auto py-4 px-4">
              {cartItems.length === 0 ? (
                <div className="text-center py-10">
                  <p className="text-gray-500 mb-4">Your cart is empty</p>
                  <button 
                    onClick={onClose}
                    className="btn btn-secondary"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <ul className="space-y-4">
                  {cartItems.map((item) => (
                    <li key={item.id} className="flex border-b border-gray-100 pb-4">
                      <div className="w-20 h-20 flex-shrink-0 overflow-hidden rounded-sm">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div className="ml-4 flex-grow">
                        <h3 className="font-serif">{item.name}</h3>
                        <p className="text-gold text-sm font-medium">${item.price}</p>
                        
                        <div className="flex justify-between items-center mt-2">
                          <div className="flex items-center border border-gray-300 rounded-sm">
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-charcoal"
                              aria-label="Decrease quantity"
                            >
                              <FiMinus className="w-4 h-4" />
                            </button>
                            <span className="w-8 text-center">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-charcoal"
                              aria-label="Increase quantity"
                            >
                              <FiPlus className="w-4 h-4" />
                            </button>
                          </div>
                          
                          <button 
                            onClick={() => removeItem(item.id)}
                            className="text-gray-400 hover:text-burgundy transition-colors duration-200"
                            aria-label="Remove item"
                          >
                            <FiTrash2 className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            
            {/* Footer */}
            {cartItems.length > 0 && (
              <div className="border-t border-gray-200 p-4">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-serif text-lg">Total</span>
                  <span className="font-serif text-lg">${totalPrice.toFixed(2)}</span>
                </div>
                
                <button className="btn btn-primary w-full mb-2">
                  Proceed to Checkout
                </button>
                
                <button 
                  onClick={onClose}
                  className="btn btn-secondary w-full"
                >
                  Continue Shopping
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default CartDrawer