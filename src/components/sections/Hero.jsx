import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative h-screen flex items-center overflow-hidden"
      style={{
        backgroundImage: 'url(https://images.pexels.com/photos/5370706/pexels-photo-5370706.jpeg?auto=compress&cs=tinysrgb&w=1600)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-charcoal-dark bg-opacity-40"></div>
      
      {/* Content */}
      <div className="container relative z-10 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl"
        >
          <h1 className="text-5xl md:text-6xl font-serif font-light mb-4 leading-tight">
            Timeless <span className="text-gold">Gold</span> Elegance
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100">
            Exquisite jewelry that celebrates life's precious moments
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#collections" 
              className="btn btn-primary"
            >
              Explore Collections
            </a>
            <a 
              href="#about" 
              className="btn btn-secondary"
            >
              Our Craftsmanship
            </a>
          </div>
        </motion.div>
      </div>

      {/* Floating decorative elements */}
      <motion.div 
        className="absolute bottom-10 right-10 w-40 h-40 border border-gold opacity-20 rounded-full"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.2 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      />
      <motion.div 
        className="absolute top-20 right-20 w-24 h-24 border border-gold opacity-20 rounded-full"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.2 }}
        transition={{ duration: 1.5, delay: 0.8 }}
      />
    </section>
  )
}

export default Hero