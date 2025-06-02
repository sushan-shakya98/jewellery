import { motion } from 'framer-motion'

const NewsletterBanner = () => {
  return (
    <section className="py-16 bg-burgundy text-white">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-light mb-4">
              Join Our Gold Circle
            </h2>
            <p className="text-lg text-gray-200 mb-4">
              Subscribe to our newsletter and be the first to know about new collections, 
              exclusive offers, and jewelry care tips.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-2 max-w-lg">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow w-full sm:w-auto px-4 py-3 rounded-sm bg-white/10 border border-white/20 focus:outline-none focus:ring-1 focus:ring-gold text-white placeholder:text-gray-300"
              />
              <button className="btn bg-gold hover:bg-gold-dark text-white transition-colors duration-300 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </motion.div>
          
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <img 
              src="https://images.pexels.com/photos/11678675/pexels-photo-11678675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Gold jewelry collection" 
              className="w-full h-auto rounded-sm shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-burgundy to-transparent opacity-50 rounded-sm"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default NewsletterBanner