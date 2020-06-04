import React from 'react';
import './index.css';

const Card=({name,email,id})=>{
	//const{name,email,id}=props
	return(

      <div className='back dib br3 pa3 ma2 grow bw2 shadow-5 dimension'> 
          <img alt="photos" src={`https://robohash.org/${id}?set=set4`} />
          <div>
           <h2>{name}</h2> 
           <p>{email}</p>
          </div>
       </div>
		);
}

export default Card;