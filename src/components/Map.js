import React from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import ReactMapGL, {Marker} from 'react-map-gl';

const MAPBOX_TOKEN = 'pk.eyJ1IjoibGFyZGVoeCIsImEiOiJjazIyYnU2OXUxaG9pM21tdjA5cjZoN2RmIn0.I-NQ3T2UkGAac6tHq4UqYA'; // Set your mapbox token here

//This is just a static view of the map with charger stations included
export default function Map(){

  function RedirectOulu(){
    console.log("testoulu")
  }

  function RedirectHelsinki(){
    console.log("testhelsinki")
  }

  function RedirectVaasa(){
    console.log("testvaasa")
  }

  function RedirectTampere(){
    console.log("testtampere")
  }

  return(
      <div style={{ display:"flex", alignItems:"center", justifyContent:"center"}}>
      <ReactMapGL
        width={"80%"}
        height={500}
        mapStyle="mapbox://styles/mapbox/light-v9"
        mapboxApiAccessToken={MAPBOX_TOKEN}
        latitude={64}
        longitude={24.9}
        zoom={4.2}>
          
          <Marker color="red" latitude={65} longitude={25}><div style={{color:"red"}} onClick={RedirectOulu}>5 stations</div></Marker>
          <Marker color="red" latitude={60.5} longitude={25}><div style={{color:"red"}} onClick={RedirectHelsinki}>8 stations</div></Marker>
          <Marker color="red" latitude={63.3} longitude={21.6}><div style={{color:"red"}} onClick={RedirectVaasa}>4 stations</div></Marker>
          <Marker color="red" latitude={61.7} longitude={23.9}><div style={{color:"red"}} onClick={RedirectTampere}>5 stations</div></Marker>

        </ReactMapGL>

      </div>
  )

}





/*
export default class Map extends Component {
  state = {
    mapStyle: 'mapbox://styles/mapbox/streets-v11',
    viewport: {
      latitude: 65.1124097,
      longitude: 23.5654119,
      zoom: 15.5,
      bearing: 0,
      pitch: 0
    }
  };

  _onViewportChange = viewport => this.setState({viewport});

  _onStyleChange = mapStyle => this.setState({mapStyle});

  render() {
    const {viewport, mapStyle} = this.state;
    
    return (
      <MapGL
        {...viewport}
        style={{ width: '100%', height: '400px' }}
        mapStyle={mapStyle}
        mapboxApiAccessToken={MAPBOX_TOKEN}
        latitude={65.1124097}
        longitude={23.5654119}
        zoom={8}
      >
      </MapGL>
    );
  }
}

export function renderToDom(container) {
  render(<Map />, container);
}*/