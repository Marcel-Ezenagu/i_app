import React from 'react'
import {Link} from 'react-router-dom';

export default function Company({id, title, price, location, company, description   }) {
    return (
      <div key={id} className="ui link cards">
        <div className="card">
          <div className="content">
            <Link to={`/internships/${id}`}>
             <div className="header">{title}</div>

            </Link>
           
            <div className="description">{description}</div>
          </div>
          <div className="extra content">
            <span className="right floated">
              <small>$</small>
              <strong>{price}</strong>
            </span>
            
            <span className='center floated'>{company}</span>
            <br/>
            <span>{location}</span>
          </div>
        </div>
      </div>
    );
}
