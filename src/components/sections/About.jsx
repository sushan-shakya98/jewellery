import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="py-20 bg-cream-light">
      <div className="container">
        <div className="section-title">
          <h2>Our Story</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src="https://images.pexels.com/photos/3266700/pexels-photo-3266700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Artisan crafting gold jewelry" 
              className="w-full h-auto rounded-sm shadow-elegant"
            />
            <div className="absolute -bottom-6 -right-6 w-24 h-24 border-2 border-gold rounded-sm hidden lg:block"></div>
          </motion.div>
          
          {/* Right column - Text */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-serif mb-6">Crafting Elegance Since 1985</h3>
            <p className="mb-4 text-lg">
              For over three decades, Goldsmith has been creating exquisite gold jewelry that captures the essence of timeless elegance. 
              Our journey began with a passion for craftsmanship and a deep appreciation for the beauty of gold.
            </p>
            <p className="mb-6 text-lg">
              Each piece in our collection is meticulously handcrafted by our master artisans, who combine traditional techniques with contemporary design sensibilities. 
              We source only the finest materials, ensuring that every creation meets our exacting standards of quality and beauty.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <span className="text-gold text-4xl font-serif block mb-2">35+</span>
                <span className="text-charcoal-dark">Years of Excellence</span>
              </div>
              <div className="text-center">
                <span className="text-gold text-4xl font-serif block mb-2">5K+</span>
                <span className="text-charcoal-dark">Happy Clients</span>
              </div>
              <div className="text-center">
                <span className="text-gold text-4xl font-serif block mb-2">100%</span>
                <span className="text-charcoal-dark">Authentic Gold</span>
              </div>
            </div>
            
            <a href="#collections" className="btn btn-primary">Discover Our Collections</a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About