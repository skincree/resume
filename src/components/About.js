import  React from 'react'

const About = props => {
  return (
    <section className="about">
      <h2 className="text-uppercase">Обо мне</h2>
      <div className="about-text text">{props.aboutData}</div>
    </section>
  )
}

export default About