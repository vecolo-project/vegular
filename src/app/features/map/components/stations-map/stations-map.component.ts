import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {DivIcon, icon, latLng, marker, MarkerClusterGroupOptions, tileLayer} from "leaflet";
import "leaflet.markercluster"
import {Station} from "../../../../shared/models";

@Component({
  selector: 'app-stations-map',
  templateUrl: './stations-map.component.html',
  styleUrls: ['./stations-map.component.scss']
})
export class StationsMapComponent implements OnInit, OnChanges {

  @Input()
  stations: Station[];

  options = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        {
          maxZoom: 18,
          attribution: 'Vecolo',
        })
    ],
    zoom: 12,
    center: latLng(48.858222, 2.343683)
  };

  markerClusterOptions: MarkerClusterGroupOptions =
    {
      showCoverageOnHover: true,
      removeOutsideVisibleBounds: true,
      maxClusterRadius: 100
    }

  layers = []

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.layers = [];
    for (const station of this.stations) {
      this.layers.push((this.markerMaker(station)));
    }
  }

  ngOnInit(): void {

  }

  markerMaker(station: Station): any {
    return marker([station.coordinateY, station.coordinateX],
      {
        icon: icon({
          iconSize: [22, 35],
          iconAnchor: [11, 35],
          iconUrl: 'assets/images/marker-icon.png',
          iconRetinaUrl: 'assets/images/marker-icon-2x.png',
          shadowUrl: 'assets/images/marker-shadow.png'
        })
      })
      .bindPopup(
        `<h2>Station ${station.id}</h2>
                <li>Adresse : ${station.streetNumber} ${station.streetName} ${station.city.toUpperCase()} (${station.zipcode})</li>
                <li>Vélos disponibles : ${station.stationMonitoring[0]?.usedBikeSlot}/${station.bikeCapacity}</li>
                <li>Batterie : ${station.stationMonitoring[0]?.batteryPercent.toFixed(2)}%</li>
                <li>État : ${station.stationMonitoring[0]?.status.toUpperCase()}</li>
        `
      )
  }

}
