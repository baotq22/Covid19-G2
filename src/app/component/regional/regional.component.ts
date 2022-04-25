import { Component, OnInit } from '@angular/core';
import { Covid19Service } from 'src/app/service/covid19.service';

@Component({
  selector: 'app-regional',
  templateUrl: './regional.component.html',
  styleUrls: ['./regional.component.css'],
})
export class RegionalComponent implements OnInit {
  countries: any;
  selectedOption: any;
  deaths = 0;
  confirmed = 0;
  reCover = 0;
  dataAll: any;
  fatality = '';
  code = '';

  constructor(private httpService: Covid19Service) {}

  ngOnInit(): void {
    this.httpService.getAll().subscribe((data: any) => {
      this.dataAll = data;
      
      data.forEach((element: any) => {
        if (element.countryregion == 'Afghanistan') {
          this.deaths += element.deaths;
          this.confirmed += element.confirmed;
          this.reCover += element.recovered;
          this.fatality = ((this.deaths * 100) / this.confirmed).toFixed(4);
        }
      });
      this.countries = [
        ...new Map(
          data.map((item: any) => [item['countryregion'], item])
        ).values(),
      ];
    });
  }

  getCountry() {
    this.deaths = 0;
    this.confirmed = 0;
    this.reCover = 0;
      

    this.dataAll.forEach((element: any) => {
      if (element.countryregion == this.selectedOption) {
        this.deaths += element.deaths;
        this.confirmed += element.confirmed;
        this.reCover += element.recovered;
        this.fatality = ((this.deaths * 100) / this.confirmed).toFixed(4);
        this.createMessageC(this.selectedOption)
        this.createMessage( element.countrycode.iso2)
      }
      /* console.log(this.code) */
      
    });
    
    
  }
  createMessage(code: string) {
    this.httpService.changeMessage(code);
  }
  createMessageC(mess:string){
    this.httpService.changeMessageC(mess)
  }
}
