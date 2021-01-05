import { Component, OnInit } from '@angular/core';
import { SedesService } from '../core/services/sedes.service';
import { Sede } from '../core/models/sede';

@Component({
  selector: 'app-main-widget',
  templateUrl: './main-widget.component.html',
  styleUrls: ['./main-widget.component.scss']
})
export class MainWidgetComponent implements OnInit {

  public sedes: any;

  data: any;
  sede: Sede = {} as Sede;

  constructor( private sedesService: SedesService) { }

  ngOnInit(): void {
    this.getSedes();
    this.getSede(3687238);
  }

  getSedes(): void {
    this.sedesService.getSedes()
      .subscribe((data: Sede) => {
        this.data = data;
        this.sedes = this.data.places;
        // console.log('sedes: ', this.sedes);
      }
    );
  }

  getSede(id: number): void{
    this.sedesService.getData()
      .subscribe((data: Sede) => {
        this.data = data;
        const places = this.data.places;
        const sede = places.filter( (place: any) => place.id === id )[0];

        console.log('sede encontrada: ', sede.name);
        console.log(sede);
        this.sede = this.mapSede(sede);

        console.log('esto retorna getSede: ', this.sede);
        return this.sede;
      },
      (err: string) => {
        console.log(err);
      },
      () => {
        console.log('peticion exitosa!');
      }
    );
  }

  mapSede(sede: any): Sede{
    return {
      image: sede.image,
      name: sede.name,
      icon: sede.weather[0].icon,
      id: sede.id,
      temp: sede.main.temp,
      humidity: sede.main.humidity,
      windSpeed: sede.wind.speed,
    };
  }
}
