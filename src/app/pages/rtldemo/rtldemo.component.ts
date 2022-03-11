import { NgModule, Component, enableProdMode, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import {
  DxAccordionModule,
  DxSelectBoxModule,
  DxMenuModule,
  DxTreeViewModule,
  DxTemplateModule,
} from 'devextreme-angular';
import {Continent, EuropeCountry, Service } from '../../services/appservices';


@Component({
  selector: 'app-rtldemo',
  templateUrl: './rtldemo.component.html',
  styleUrls: ['./rtldemo.component.scss'],
  providers : [Service]
})
export class RtldemoComponent {

  continents: Continent[] = [];
  europeCountries : EuropeCountry[] = [];

  languages: string[] = [
    'Arabic: Right-to-Left direction',
    'English: Left-to-Right direction',
  ];

  rtlEnabled = false;

  constructor( service : Service ) { 
    this.continents = service.getContinents();
    this.europeCountries = service.getEuropeCountries();
  }

  selectLanguage(e : any) {
    this.rtlEnabled = e.value === this.languages[0];
  }

}
