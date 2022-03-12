import { Component } from '@angular/core';
import { AppTranslationService } from 'src/app/services/app-translation.service';

@Component({
  templateUrl: 'home.component.html',
  styleUrls: [ './home.component.scss' ]
})

export class HomeComponent {
  texttoTranslate = "dxCollectionWidget-noDataText";
  translatedText : any;
  gT : any;

  constructor(private translateService : AppTranslationService) {
    this.gT = (key : string) => this.translateService.getTranslation(key);
    //this.translatedText = this.texttoTranslate;
  }


  
}
