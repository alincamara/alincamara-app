import React, { ReactElement } from 'react'

import './index.css'

export const AboutBox = (): ReactElement => {
  return (
    <div className="about__boxes grid">
      <div className="about__box">
        <i className="about__icon icon-fire"></i>

        <div>
          <h3 className="about__title">14</h3>
          <span className="about__subtitle">Project completed</span>
        </div>
      </div>

      <div className="about__box">
        <i className="about__icon icon-cup"></i>

        <div>
          <h3 className="about__title">125</h3>
          <span className="about__subtitle">Cups of coffee</span>
        </div>
      </div>

      <div className="about__box">
        <i className="about__icon icon-people"></i>

        <div>
          <h3 className="about__title">14</h3>
          <span className="about__subtitle">Satisfied clients</span>
        </div>
      </div>

      <div className="about__box">
        <i className="about__icon icon-chemistry"></i>

        <div>
          <h3 className="about__title">26</h3>
          <span className="about__subtitle">Recepies</span>
        </div>
      </div>
    </div>
  )
}

export default AboutBox
