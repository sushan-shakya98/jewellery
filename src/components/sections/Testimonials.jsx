import { useState } from 'react'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Emily Johnson",
      location: "New York",
      quote: "The craftsmanship is impeccable. I purchased a necklace for my anniversary, and it exceeded all my expectations. The attention to detail is remarkable.",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 2,
      name: "Michael Roberts",
      location: "Los Angeles",
      quote: "I was looking for the perfect engagement ring, and Goldsmith delivered beyond my wildest dreams. The design assistance was invaluable, and my fiancée absolutely loves it!",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 3,
      name: "Sophia Chen",
      location: "Chicago",
      quote: "The bracelet I purchased has become my everyday staple. It's elegant yet durable, and I receive compliments every time I wear it. Worth every penny.",
      image: "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 4,
      name: "James Wilson",
      location: "Miami",
      quote: "I've been collecting fine jewelry for years, and Goldsmith pieces stand out in my collection. The quality is consistent, and their customer service is exceptional.",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ]

  return (
    <section className="py-20 bg-cream-light relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-40 h-40 border-2 border-gold opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 border-2 border-gold opacity-10 rounded-full translate-x-1/3 translate-y-1/3"></div>
      
      <div className="container relative z-10">
        <div className="section-title">
          <h2>What Our Clients Say</h2>
        </div>
        
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="pb-14"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <motion.div 
                className="bg-white p-8 rounded-sm shadow-elegant h-full flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex-grow">
                  <div className="text-gold text-3xl mb-4">"</div>
                  <p className="text-charcoal italic mb-6">
                    {testimonial.quote}
                  </p>
                </div>
                
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-serif">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
        
        <div className="mt-16 text-center">
          <div className="inline-block bg-gold bg-opacity-10 p-6 rounded-sm">
            <p className="text-2xl font-serif text-charcoal mb-4">
              Join our growing family of satisfied customers
            </p>
            <a href="#products" className="btn btn-primary">
              Shop Our Collections
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials