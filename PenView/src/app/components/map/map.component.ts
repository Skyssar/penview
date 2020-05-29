import { Component, OnInit } from '@angular/core';

import * as Mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  mapa: Mapboxgl.Map;
  account = 'Andres Felipe Rivero Burgos'

  constructor() { }

  ngOnInit() {

    (Mapboxgl as any).accessToken = 'pk.eyJ1IjoiYW5kcmVzZnIiLCJhIjoiY2thbzF1OGV6MGpiejJxb2cwa3M2dWE1ZCJ9.x9XdAYt5Fm6K3r-BSNwwcw';
    this.mapa = new Mapboxgl.Map({
    container: 'mapa', // container id
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-75.832686,8.738892], // starting position // LNG, LAT
    zoom: 8 // starting zoom
    });

    this.marker(-75.832686,8.738892)
    this.mapa.addControl(new Mapboxgl.NavigationControl());

    this.mapa.addControl(
      new Mapboxgl.GeolocateControl({
      positionOptions: {
      enableHighAccuracy: true
      },
      trackUserLocation: true
      })
      );
  }

  marker(lng: number, lat: number){
    var marker = new Mapboxgl.Marker({
      draggable: true
      })
      .setLngLat([lng, lat])
      .addTo(this.mapa);

      marker.on('drag',() => {
        console.log(marker.getLngLat());
      })
  }

}


