import React from 'react';
import {Link} from 'react-router-dom';

export default function ChargerLocations(props) {

    function SelectCharger(event)
    {    
      event.preventDefault();
      props.SetCharger(event.target.value); 
    }

  return (
    <div>
      <h1>Here are our chargers:</h1> 
      <form onSubmit={SelectCharger}>
        <div>
          Charger <input type="text" name="chargername" />
        </div>
        <div>
        <button type="submit">Submit FORM</button>
        </div>
      </form>

      <button value="OUL11" onClick={SelectCharger}>OUL11</button>
      <button value="OUL12" onClick={SelectCharger}>OUL12</button>

      <Link to='/ChargingPage'>Submit</Link>
    </div>
  )
}
