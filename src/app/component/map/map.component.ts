import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import {
  DrawEvents,
  featureGroup,
  FeatureGroup,
  latLng,
  tileLayer,
  circle,
  Circle,
} from 'leaflet';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import * as L from 'leaflet';
import { Covid19Service } from 'src/app/service/covid19.service';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  datas: any;
  dataAll: any;
  nameCountry: any;
  local: any;
  local1 = 14.058324;
  local2 = 108.277199;
  // options = {

  // };

  // options = {
  // };
  map!: L.Map;

  layers: any = [];
  rediuSize: number = 0;
  country = '';
  constructor(private service: Covid19Service) {}
  ngOnChanges(changes: SimpleChanges): void {}
  ngOnInit(): void {
    this.service.currentMessage.subscribe((message: string) => {
      this.country = message;
      this.service.getCountry(this.country).subscribe((i) => {
        this.local = i;

        this.local1 = this.local[0].location.lat;
        // console.log(this.local1);
        this.local2 = this.local[0].location.lng;
        this.map.panTo(new L.LatLng(this.local1, this.local2));
        // this.local1 = 0;
        // this.local2 = 0;
        // console.log(this.options.center);
      });
    });

    // this.changeView();
    this.service.getAll().subscribe((i: any) => {
      this.datas = i;
      // console.log(this.datas);

      this.datas.forEach((e: any) => {
        if (e.confirmed <= 999999) {
          let a: Circle<any> = circle([e.location.lat, e.location.lng], {
            radius: 50,
            color: 'red',
            /* stroke:false */ weight: 10,
            opacity: 0.5,
          });
          this.layers.push(a);
        } else if (e.confirmed > 999999) {
          let a: Circle<any> = circle([e.location.lat, e.location.lng], {
            radius: 100,
            color: 'red',
            /* stroke:false */ weight: 30,
            opacity: 0.5,
          });
          this.layers.push(a);
        }
      });

      // this.changeView();
    });
  }

  onMapReady(map: L.Map) {
    this.map = map;
  }
  changeView() {
    this.map.panTo(new L.LatLng(40.737, -73.923));
  }
  options = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '...',
      }),
    ],
    zoom: 5,
    center: latLng(this.local1, this.local2),
  };
}
