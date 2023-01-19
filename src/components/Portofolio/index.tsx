import React, { ReactElement, useState } from 'react'

import './index.css'
import Menu from './Menu'

export const Portofolio = (): ReactElement => {
  const [items, setItems] = useState(Menu)

  const filterItem = (categoryItem: any) => {
    const updatedItems = Menu.filter((curElem) => {
      return curElem?.category === categoryItem
    })
    setItems(updatedItems)
  }

  return (
    <section className="work container section" id="portofolio">
      <h2 className="section__title">Recent Works</h2>
      <div className="work__filters">
        <span className="work__item" onClick={() => setItems(Menu)}>
          Everything
        </span>
        <span className="work__item" onClick={() => filterItem('Development')}>
          Development
        </span>
        <span className="work__item" onClick={() => filterItem('Baking')}>
          Baking
        </span>
        <span className="work__item" onClick={() => filterItem('Videography')}>
          Videography
        </span>
        <span className="work__item" onClick={() => filterItem('Photography')}>
          Photography
        </span>
      </div>

      <div className="work__container grid">
        {items.map((elem: any) => {
          const { id, image, title, category, link } = elem
          return (
            <div className="work__card" key={id}>
              <div className="work__thumbnail">
                <img src={image} alt="" className="work__img" />
                <div className="work__mask"></div>
              </div>

              <span className="work__category">{category}</span>
              <h3 className="work__title">{title}</h3>
              <a href={link} className="work__button">
                <i className="icon-link work__button-icon"></i>
              </a>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Portofolio
