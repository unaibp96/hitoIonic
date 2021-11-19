import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/compat/auth'

export const firebaseConfig = {
  apiKey: "AIzaSyBaVCeE49DB9gLhaOqjzb5h77SfVB-HefE",
  authDomain: "ionic-ea4bd.firebaseapp.com",
  projectId: "ionic-ea4bd",
  storageBucket: "ionic-ea4bd.appspot.com",
  messagingSenderId: "175762613320",
  appId: "1:175762613320:web:ff221d5ac778dcfceba47d",
  measurementId: "G-VH696QZEFC"
  }

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
  AngularFireModule.initializeApp(firebaseConfig), AngularFirestoreModule, AngularFireAuthModule],
  providers: [
 
  AngularFireAuth,
  { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent]
  })
export class AppModule {}
