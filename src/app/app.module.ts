import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import {SocialSharing} from '@ionic-native/social-sharing';      
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { IntroPage } from '../pages/intro/intro'
// import { MenuPage } from '../pages/menu/menu';


@NgModule({
  declarations: [
    MyApp,
    IntroPage,
    // MenuPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    // MenuPage,
    IntroPage
  ],
  providers: [
    StatusBar,
    SocialSharing,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
