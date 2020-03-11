import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { GooglePlus } from '@ionic-native/google-plus/ngx';

const firebaseConfig = {
  apiKey: 'AIzaSyB6X2gcRetkBTuOCjxYHUYWmtGX7B6r5O0',
  authDomain: 'fire-face-9713e.firebaseapp.com',
  databaseURL: 'https://fire-face-9713e.firebaseio.com',
  projectId: 'fire-face-9713e',
  storageBucket: 'fire-face-9713e.appspot.com',
  messagingSenderId: '939702638082',
  appId: '1:939702638082:web:617d8e06fc00818f4bb91b',
  measurementId: 'G-5640RHNE5P'
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
    GooglePlus
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
