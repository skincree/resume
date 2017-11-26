import React from 'react'

const Education = props => {
  const getEducation = props.educationData.map((item, index) => {
    return (
      <div key={index}>
        <span className="institution">{item.institution},</span> <span className="text">{item.area}</span>
        <h4>{item.studyDate}</h4>
      </div>
    )
  })

  return (
    <section className="education">
      <h2 className="text-uppercase">Образование</h2>
      {getEducation}
    </section>
  )
}

export default Education
