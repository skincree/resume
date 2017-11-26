import React from 'react'
import Skills from './Skills'
import About from './About'
import Profile from './Profile'
import Experience from './Experience'
import Education from './Education'
import "bootstrap/dist/css/bootstrap.css"
import '../styles/Layout.css'

const Root = props => {
  const {main, about, skills, experience, education} = props.profile
  return <div className="container">
    <div className="row">
      <aside className="col-md-4">
        <div className="inner">
          <Profile profileData={main}/>
        </div>
      </aside>
      <main className="col-md-8">
        <div className="inner">
          <About aboutData={about}/>
          <div className="divider"></div>
          <Skills skillsData={skills}/>
          <div className="divider"></div>
          <Experience experienceData={experience}/>
          <div className="divider"></div>
          <Education educationData={education}/>
        </div>
      </main>
    </div>
  </div>
}

export default Root