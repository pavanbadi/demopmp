import { Injectable, isDevMode} from '@angular/core';
import {TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { Observable, of, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AppTranslationService {
  defaultLanguage : any;
  private onLanguageChanged = new Subject<string>();
  languageChanged$ = this.onLanguageChanged.asObservable();

  constructor( private translate : TranslateService) { 
    this.defaultLanguage =  localStorage.getItem('language');
    this.setDefaultLanguage(isDevMode() ? "en" : this.defaultLanguage);
  }

  addLanguages(lang: string[]) {
    this.translate.addLangs(lang);
  }

  setDefaultLanguage(lang: string) {
    this.translate.setDefaultLang(lang);
  }

  getDefaultLanguage() {
    return this.translate.defaultLang;
  }

  getBrowserLanguage() {
    return this.translate.getBrowserLang();
  }

  getTranslation(
    key: string | Array<string>,
    interpolateParams?: Object
  ): string | any {
    return this.translate.instant(key, interpolateParams);
  }

  getTranslationAsync(
    key: string | Array<string>,
    interpolateParams?: Object
  ): Observable<string | any> {
    return this.translate.get(key, interpolateParams);
  }

  getCurrentLanguage() {
    return this.translate.currentLang;
  }
  
  changeLanguage(language: string = "ar") {
    if (!language) language = this.translate.defaultLang;

    if (language != this.translate.currentLang) {
      setTimeout(() => {
        this.translate.use(language);
        this.onLanguageChanged.next(language);
      });
    }

    return language;
  }

  useBrowserLanguage(): string | void {
    let browserLang = this.getDefaultLanguage();

    if (browserLang.match(/ar|en|pt/)) {
      this.changeLanguage(browserLang);
      return browserLang;
    }
  }
}

export class TranslateLanguageLoader implements TranslateLoader {
  public getTranslation(lang: string): any {
    // var require: any;
    switch (lang) {
      case "en":
        return of(require("../localization/en.json"));
      case "ar":
        return of(require("../localization/ar.json"));
      case "de":
          return of(require("../localization/de.json"));
      default:
    }
  }
}
