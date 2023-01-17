import React, { ReactElement } from 'react'
import './index.css'
import Image1 from '../../assets/avatar-1.svg'
import Image3 from '../../assets/avatar-3.svg'
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'

const data = [
  {
    id: 1,
    image: Image1,
    title: 'George Pop',
    subtitle: 'Product Manager at Google',
    comment:
      "I had the pleasure of working with Alin on a project, and I couldn't be happier with the results. As a Front-End developer, Alin is incredibly skilled and knowledgeable in his field. He was able to take our design and turn it into a beautiful and functional website. He was always available to answer any questions and made sure that the end product met our expectations. I highly recommend Alin for any Front-End development needs.",
  },
  {
    id: 2,
    image: Image3,
    title: 'Tatiana Sarbu',
    subtitle: 'Software Developer at IBM',
    comment:
      'Alin truly has a talent for creating mouth-watering pastries and breads that are not only visually appealing but also bursting with flavor. I particularly enjoyed his signature sourdough bread and his unique flavored cupcakes. Good luck! 👍',
  },
]

export const Testimonials = (): ReactElement => {
  return (
    <section className="testimonials container section">
      <h2 className="section__title">Clients & Reviews</h2>

      <Swiper
        className="testimonials__container grid"
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        grabCursor={true}
        pagination={{ clickable: true }}
      >
        {data.map(({ id, image, title, subtitle, comment }) => {
          return (
            <SwiperSlide className="testimonial__item" key={id}>
              <div className="thumb">
                <img src={image} alt="" />
              </div>
              <h3 className="testimonials__title">{title}</h3>
              <span className="subtitle">{subtitle}</span>
              <div className="comment">{comment}</div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}

export default Testimonials
