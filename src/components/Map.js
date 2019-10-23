import React from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import MapGL from 'react-map-gl';

const MAPBOX_TOKEN = 'pk.eyJ1IjoibGFyZGVoeCIsImEiOiJjazIyYnU2OXUxaG9pM21tdjA5cjZoN2RmIn0.I-NQ3T2UkGAac6tHq4UqYA'; // Set your mapbox token here

//This is just a static view of the map with charger stations included
export default function Map(){
    return(
        <div style={{ display:"flex", alignItems:"center", justifyContent:"center"}}>
        <MapGL
        width={"80%"}
        height={500}
        mapStyle="mapbox://styles/mapbox/light-v9"
        mapboxApiAccessToken={MAPBOX_TOKEN}
        latitude={64}
        longitude={24.9}
        zoom={4.2}
        />
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