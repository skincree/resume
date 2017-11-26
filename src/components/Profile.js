import React from 'react'

const Profile = props => {
  const profileObj = props.profileData
  return  <div>
    <div className="profileImg"><img className="img-rounded center-block" alt="" src={profileObj.picture} width="250"/></div>
    <h1 className="text-center">{profileObj.name}</h1>
    <h2 className="text-center">{profileObj.position}</h2>
    <div className="divider"></div>
    <ul className="list-unstyled contact-links text-center">
      <h3><li><i className="glyphicon glyphicon-map-marker"></i> {profileObj.location.city}, {profileObj.location.region}</li></h3>
      <h4><li><i className="glyphicon glyphicon-envelope"></i> <a href="timon3566@gmail.com">{profileObj.email}</a></li></h4>
    </ul>
    <div className="divider"></div>
    <div className="links">
      <ul className="profileLinks list-unstyled">
        <li><img src={profileObj.profiles[0].icon} width={20} height={20} alt=""/> <a href="https://vk.com/skincree">{"skincree"}</a></li>
        <li><img src={profileObj.profiles[1].icon} width={20} height={20} alt=""/> <a href="https://instagram.com/skincree">{"skincree"}</a></li>
        <li><img src={profileObj.profiles[2].icon} width={20} height={20} alt=""/> <a href="@skincree">{"@skincree"}</a></li>
      </ul>
    </div>
  </div>
}

export default Profile