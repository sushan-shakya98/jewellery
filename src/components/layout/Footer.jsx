import { FiInstagram, FiFacebook, FiTwitter, FiYoutube } from 'react-icons/fi'
import Logo from '../ui/Logo'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  const footerLinks = [
    {
      title: 'Shop',
      links: [
        { name: 'All Collections', href: '#' },
        { name: 'New Arrivals', href: '#' },
        { name: 'Necklaces', href: '#' },
        { name: 'Earrings', href: '#' },
        { name: 'Rings', href: '#' },
        { name: 'Bracelets', href: '#' }
      ]
    },
    {
      title: 'About',
      links: [
        { name: 'Our Story', href: '#' },
        { name: 'Craftsmanship', href: '#' },
        { name: 'Sustainability', href: '#' },
        { name: 'Blog', href: '#' },
        { name: 'Press', href: '#' }
      ]
    },
    {
      title: 'Customer Service',
      links: [
        { name: 'Contact Us', href: '#' },
        { name: 'Shipping & Returns', href: '#' },
        { name: 'Care Guide', href: '#' },
        { name: 'FAQs', href: '#' },
        { name: 'Size Guide', href: '#' }
      ]
    }
  ]

  const socialLinks = [
    { icon: <FiInstagram />, name: 'Instagram', href: '#' },
    { icon: <FiFacebook />, name: 'Facebook', href: '#' },
    { icon: <FiTwitter />, name: 'Twitter', href: '#' },
    { icon: <FiYoutube />, name: 'YouTube', href: '#' }
  ]

  return (
    <footer className="bg-charcoal text-white pt-16 pb-8">
      <div className="container">
        {/* Top section with logo, newsletter and social links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-10 border-b border-gray-700">
          <div>
            <Logo className="text-white mb-6" />
            <p className="text-gray-300 max-w-md mb-6">
              Exquisite gold jewelry handcrafted with passion and precision. 
              Each piece tells a story of elegance and timeless beauty.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-gold transition-colors duration-300"
                  aria-label={link.name}
                >
                  <span className="text-xl">{link.icon}</span>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-serif mb-6">Subscribe to Our Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Stay updated with our latest collections and exclusive offers.
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-charcoal-light text-white px-4 py-3 rounded focus:outline-none focus:ring-1 focus:ring-gold flex-grow"
                required
              />
              <button 
                type="submit" 
                className="btn bg-gold hover:bg-gold-dark text-white transition-colors duration-300 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        {/* Middle section with links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-10">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-lg font-serif mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      className="text-gray-400 hover:text-gold transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          
          <div>
            <h4 className="text-lg font-serif mb-4">Visit Our Store</h4>
            <address className="text-gray-400 not-italic">
              <p>123 Luxury Avenue</p>
              <p>New York, NY 10001</p>
              <p className="mt-2">Mon-Sat: 10am - 8pm</p>
              <p>Sunday: 11am - 6pm</p>
              <p className="mt-2">
                <a href="tel:+12345678901" className="hover:text-gold transition-colors duration-300">
                  +1 (234) 567-8901
                </a>
              </p>
              <p>
                <a href="mailto:info@goldsmith.com" className="hover:text-gold transition-colors duration-300">
                  info@goldsmith.com
                </a>
              </p>
            </address>
          </div>
        </div>
        
        {/* Bottom section with copyright and policies */}
        <div className="pt-8 border-t border-gray-700 text-gray-400 text-sm flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {currentYear} Goldsmith Jewelry. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gold transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors duration-300">Terms of Service</a>
            <a href="#" className="hover:text-gold transition-colors duration-300">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer