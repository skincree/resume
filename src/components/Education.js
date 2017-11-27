import React from 'react'

const Education = props => {
  const getEducation = props.educationData.map((item, index) => {
    return (
      <div key={index}>
        <strong><div className="institution">{item.institution}</div></strong>
        <div className="text">{item.area}</div>
        <div className="text">{item.studyDate}</div>
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
