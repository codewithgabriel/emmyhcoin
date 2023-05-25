import * as React from 'react';
import indicator from '../imgs/loading.svg';


function ActivityIndicator(){
  return(
    <div className="container-fluid col-12 activity-indicator" data-aos="fade-down">
      <div className="col-1" style={{overflow: 'hidden'}}>
        <img  src={indicator}  alt="Loading"/>
      </div>
    </div>
  )
}


export default ActivityIndicator;
