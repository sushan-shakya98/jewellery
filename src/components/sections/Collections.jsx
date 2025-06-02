import { useState } from 'react'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const Collections = () => {
  const [activeCollection, setActiveCollection] = useState(0)
  
  const collections = [
    {
      id: 1,
      name: "Royal Heritage",
      description: "Inspired by royal jewelry traditions, this collection features intricate designs with a modern twist.",
      image: "https://images.pexels.com/photos/9638689/pexels-photo-9638689.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 2,
      name: "Modern Minimalist",
      description: "Clean lines and subtle elegance define this collection of contemporary gold pieces.",
      image: "https://images.pexels.com/photos/8891959/pexels-photo-8891959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 3,
      name: "Nature's Embrace",
      description: "Delicate designs inspired by the beauty of nature, featuring organic shapes and textures.",
      image: "https://images.pexels.com/photos/11144020/pexels-photo-11144020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 4,
      name: "Vintage Glamour",
      description: "Timeless pieces that capture the opulence and sophistication of bygone eras.",
      image: "https://images.pexels.com/photos/10474786/pexels-photo-10474786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ]

  return (
    <section id="collections" className="py-20 bg-white">
      <div className="container">
        <div className="section-title">
          <h2>Our Collections</h2>
        </div>
        
        {/* Collection tabs */}
        <div className="flex flex-wrap justify-center mb-12">
          {collections.map((collection, index) => (
            <button
              key={collection.id}
              className={`px-6 py-2 mx-2 my-2 transition-all duration-300 border-b-2 ${
                activeCollection === index 
                  ? 'border-gold text-gold' 
                  : 'border-transparent text-charcoal hover:text-gold'
              }`}
              onClick={() => setActiveCollection(index)}
            >
              {collection.name}
            </button>
          ))}
        </div>
        
        {/* Collection display */}
        <div className="relative">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.id}
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: activeCollection === index ? 1 : 0,
                display: activeCollection === index ? 'block' : 'none'
              }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              {/* Left column - Image */}
              <div className="relative">
                <img 
                  src={collection.image} 
                  alt={collection.name} 
                  className="w-full h-auto rounded-sm shadow-elegant"
                />
                <div className="absolute -bottom-4 -left-4 w-16 h-16 border-2 border-gold rounded-sm hidden lg:block"></div>
              </div>
              
              {/* Right column - Text */}
              <div>
                <h3 className="text-3xl font-serif mb-6">{collection.name}</h3>
                <p className="mb-6 text-lg">
                  {collection.description}
                </p>
                <a href="#products" className="btn btn-primary">
                  View Collection
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Featured pieces slider */}
        <div className="mt-20">
          <h3 className="text-2xl font-serif text-center mb-10">Featured Pieces</h3>
          
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 5000 }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="pb-12"
          >
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <SwiperSlide key={item}>
                <div className="product-card">
                  <div className="overflow-hidden">
                    <img 
                      src={`https://images.pexels.com/photos/13349809/pexels-photo-13349809.jpeg?auto=compress&cs=tinysrgb&w=600&h=750&dpr=2`} 
                      alt="Featured gold jewelry piece" 
                      className="w-full h-72 object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-serif mb-2">Elegance Necklace</h4>
                    <p className="text-gray-600 mb-4">18K Gold, Hand-crafted</p>
                    <div className="flex justify-between items-center">
                      <span className="text-gold font-semibold">$1,299</span>
                      <a href="#" className="text-charcoal hover:text-gold underline underline-offset-4">
                        View Details
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Collections