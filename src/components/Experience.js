import React from 'react'

const Experience = props => {
  const experience = props.experienceData
  return (
    <section className="experience">
      <h2 className="text-uppercase">Опыт</h2>
      <div className="expirience-text text">
        <div><strong>{experience[0].year}</strong></div>
        <div className="tags">{experience[0].place}</div>
        <div className="tags">{experience[0].position}</div>
        <div className="divid"></div>
        <div>{experience[0].obligations}</div>
      </div>
    </section>
  )
}

export default Experience