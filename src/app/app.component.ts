import { Component, HostBinding } from '@angular/core';
import { AuthService, ScreenService, AppInfoService } from './shared/services';
import config from 'devextreme/core/config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  @HostBinding('class') get getClass() {
    return Object.keys(this.screen.sizes).filter(cl => this.screen.sizes[cl]).join(' ');
  }

  constructor(private authService: AuthService, private screen: ScreenService, public appInfo: AppInfoService) { 
    this.setRtlEnabled();
  }

  setRtlEnabled(){
    var language = localStorage.getItem('language');
    if(language==='ar'){
      config({rtlEnabled:true});
    } else {
    config({rtlEnabled:false});
    }
  }
  
  isAuthenticated() {
    return this.authService.loggedIn;
  }
}
