import { MatSliderModule } from '@angular/material/slider';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorldWideComponent } from './component/world-wide/world-wide.component';
import { RegionalComponent } from './component/regional/regional.component';
import { Covid19Service } from './service/covid19.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { MapComponent } from './component/map/map.component';
import { LeafletDrawModule } from '@asymmetrik/ngx-leaflet-draw';
import { ChartsComponent } from './component/charts/charts.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ReportComponent } from './component/report/report.component';
import { HomeComponent } from './component/home/home.component';
import { NewsComponent } from './component/news/news.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';



@NgModule({
  declarations: [
    AppComponent,
    WorldWideComponent,
    RegionalComponent,
    MapComponent,
    ChartsComponent,
    ReportComponent,
    HomeComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    LeafletModule,
    LeafletDrawModule,
    BrowserAnimationsModule,
    NgxChartsModule,
    ReactiveFormsModule,
    MatSliderModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule


  ],
  providers: [Covid19Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
