import React from 'react';
import {Link} from 'react-router-dom';
import GetChargers from './GetChargers';


export default function ChargerLocations(props) {

  function UpdateSearchFilter(event)
  {
    props.SearchFilterUpdate(event.target.value.toUpperCase())
  }

  return (
    <div style={{textAlign: "center"}}>

      <h1>Here are our chargers:</h1> 

      <div>
        <input type="text" onChange={ UpdateSearchFilter }/>
        <div style={{ display: "flex", flexWrap: "wrap"}}>
        {
        props.Chargers
          .filter(item => item.name.includes(props.SearchFilter) || item.type.includes(props.SearchFilter))
          .map(item => <GetChargers key={item.id} {...item}/>
          )
        }
        </div>
      </div>
    </div>
  )
}
