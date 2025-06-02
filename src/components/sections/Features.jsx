import { motion } from 'framer-motion'
import { FiAward, FiPackage, FiRefreshCw, FiShield } from 'react-icons/fi'

const Features = () => {
  const features = [
    {
      icon: <FiAward className="w-8 h-8 text-gold" />,
      title: "Premium Quality",
      description: "We use only the finest 18K and 24K gold in all our jewelry pieces, ensuring exceptional quality and durability."
    },
    {
      icon: <FiPackage className="w-8 h-8 text-gold" />,
      title: "Luxury Packaging",
      description: "Each piece comes in our signature packaging, perfect for gifting or keeping your treasures safe."
    },
    {
      icon: <FiRefreshCw className="w-8 h-8 text-gold" />,
      title: "Lifetime Maintenance",
      description: "We offer complimentary cleaning and maintenance services for all our jewelry throughout its lifetime."
    },
    {
      icon: <FiShield className="w-8 h-8 text-gold" />,
      title: "Authenticity Guarantee",
      description: "Every piece comes with a certificate of authenticity, ensuring the gold purity and craftsmanship."
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2
      }
    }
  }
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="section-title">
          <h2>Our Commitment</h2>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="bg-cream p-8 rounded-sm shadow-elegant text-center hover:shadow-elegant-hover transition-shadow duration-300"
              variants={itemVariants}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-cream-light rounded-full mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-serif mb-4">{feature.title}</h3>
              <p className="text-charcoal">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-16 bg-cream p-10 rounded-sm shadow-elegant">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl font-serif mb-4">Our Craftsmanship Process</h3>
              <p className="mb-6">
                At Goldsmith, we believe in the power of traditional craftsmanship combined with modern techniques. 
                Every piece of jewelry goes through a meticulous process:
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-6 h-6 bg-gold text-white rounded-full mr-3 flex-shrink-0 mt-1">1</span>
                  <span>
                    <strong className="font-serif">Design:</strong> Our designers sketch and develop unique concepts inspired by art, nature, and culture.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-6 h-6 bg-gold text-white rounded-full mr-3 flex-shrink-0 mt-1">2</span>
                  <span>
                    <strong className="font-serif">Material Selection:</strong> We source only the highest quality gold and gemstones from ethical suppliers.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-6 h-6 bg-gold text-white rounded-full mr-3 flex-shrink-0 mt-1">3</span>
                  <span>
                    <strong className="font-serif">Handcrafting:</strong> Our master artisans meticulously craft each piece by hand, ensuring precision and detail.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-6 h-6 bg-gold text-white rounded-full mr-3 flex-shrink-0 mt-1">4</span>
                  <span>
                    <strong className="font-serif">Quality Control:</strong> Every piece undergoes rigorous inspection to ensure it meets our exacting standards.
                  </span>
                </li>
              </ul>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/5370764/pexels-photo-5370764.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Jewelry crafting process" 
                className="w-full h-auto rounded-sm shadow-elegant"
              />
              <div className="absolute -top-4 -left-4 w-20 h-20 border-2 border-gold rounded-sm hidden lg:block"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features