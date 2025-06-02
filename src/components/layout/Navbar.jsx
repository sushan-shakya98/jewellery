import { useState, useEffect } from 'react'
import { FiShoppingBag, FiMenu, FiX, FiSearch } from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from '../ui/Logo'

const Navbar = ({ cartItemCount, openCart }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Collections', href: '#collections' },
    { name: 'Products', href: '#products' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Logo className={isScrolled ? 'text-charcoal-dark' : 'text-white'} />
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className={`nav-link ${
                isScrolled ? 'text-charcoal' : 'text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>
        
        {/* Right side - search & cart */}
        <div className="flex items-center space-x-4">
          <button 
            className={`focus:outline-none ${isScrolled ? 'text-charcoal' : 'text-white'}`}
            onClick={() => setSearchOpen(!searchOpen)}
            aria-label="Search"
          >
            <FiSearch className="w-5 h-5" />
          </button>
          
          <button 
            className={`relative focus:outline-none ${isScrolled ? 'text-charcoal' : 'text-white'}`}
            onClick={openCart}
            aria-label="Shopping cart"
          >
            <FiShoppingBag className="w-5 h-5" />
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-gold text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </button>
          
          {/* Mobile menu button */}
          <button 
            className={`md:hidden focus:outline-none ${isScrolled ? 'text-charcoal' : 'text-white'}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? (
              <FiX className="w-6 h-6" />
            ) : (
              <FiMenu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>
      
      {/* Search bar */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="w-full bg-white shadow-md"
          >
            <div className="container mx-auto py-4">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search for jewelry..." 
                  className="w-full py-2 pl-4 pr-10 border-b border-gray-300 focus:border-gold focus:outline-none bg-transparent"
                />
                <FiSearch className="absolute right-3 top-3 text-gray-400" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white shadow-md overflow-hidden"
          >
            <nav className="container mx-auto py-4 flex flex-col">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  className="py-3 px-4 text-charcoal hover:bg-cream hover:text-gold transition-colors duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar