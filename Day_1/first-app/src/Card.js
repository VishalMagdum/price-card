import React from 'react'

function Card(props) {
  
  return (
    <div className="col-lg-4">
    <div className="card mb-5 mb-lg-0">
      <div className="card-body">
        <h5 className="card-title text-muted text-uppercase text-center">{props.card.plan}</h5>
        <h6 className="card-price text-center">${props.card.price}<span className="period">/month</span></h6>
        <hr/>
        <ul className="fa-ul">
          <li className={props.card.userEnabler?"":"text-muted"}><span className="fa-li" ><i className={props.card.userEnabler?"fas fa-check":"fas fa-times"}></i></span>{props.card.plan==="FREE"?<>{props.card.user}</>:<b>{props.card.user}</b>}</li>
          <li className={props.card.storageEnabler?"":"text-muted"}><span className="fa-li"><i className={props.card.storageEnabler?"fas fa-check":"fas fa-times"}></i></span>{props.card.storage}</li>
          <li className={props.card.publicProjectEnabler?"":"text-muted"}><span className="fa-li"><i className={props.card.publicProjectEnabler?"fas fa-check":"fas fa-times"}></i></span>{props.card.publicProject}</li>
          <li className={props.card.communityAccessEnabler?"":"text-muted"}><span className="fa-li"><i className={props.card.communityAccessEnabler?"fas fa-check":"fas fa-times"}></i></span>{props.card.communityAccess}</li>
          <li className={props.card.privateProjectsEnabler?"":"text-muted"}><span className="fa-li"><i className={props.card.privateProjectsEnabler?"fas fa-check":"fas fa-times"}></i></span>{props.card.privateProjects}</li>
          <li className={props.card.phoneSupportEnabler?"":"text-muted"}><span className="fa-li"><i className={props.card.phoneSupportEnabler?"fas fa-check":"fas fa-times"}></i></span>{props.card.phoneSupport}</li>
          <li className={props.card.subdomainEnabler?"":"text-muted"}><span className="fa-li"><i className={props.card.subdomainEnabler?"fas fa-check":"fas fa-times"}></i></span><span>{props.card.plan==="PRO"?<b>Unlimited</b>:<></>} {props.card.subdomain}</span></li>
          <li className={props.card.reportsEnabler?"":"text-muted"}><span className="fa-li"><i className={props.card.reportsEnabler?"fas fa-check":"fas fa-times"}></i></span>{props.card.reports}</li>
        </ul>
        <div className="d-grid">
          <a href="javascript(void)" className="btn btn-primary text-uppercase">Button</a>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Card