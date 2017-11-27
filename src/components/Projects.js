import React from 'react'

const Projects = props => {
  const projects = props.projectsData
  return (<div>
    <h2 className="text-uppercase">Проекты</h2>
    <div className="text">{projects}</div>
  </div>)
}

export default Projects