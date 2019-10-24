import React from 'react';
import {Link} from 'react-router-dom';
import GetChargers from './GetChargers';


export default function ChargerLocations(props) {

    function SelectCharger(event)
    {    
      event.preventDefault();
      props.SetCharger(event.target.value); 
    }

    function UpdateSearchFilter(event)
    {
      
      props.SearchFilterUpdate(event.target.value)
    }

  return (
    <div>


      <h1>Here are our chargers:</h1> 

      <button value="OUL11" onClick={SelectCharger}>OUL11</button>
      <button value="OUL12" onClick={SelectCharger}>OUL12</button>

      <div>
        <input type="text" onChange={ UpdateSearchFilter }/>
        {
        props.Chargers
          .filter(item => item.name.includes(props.SearchFilter) || item.type.includes(props.SearchFilter))
          .map(item => <GetChargers key={item.id} {...item}/>
          )
        }
      </div>

      <Link to='/ChargingPage'>Submit</Link>
    </div>
  )
}
