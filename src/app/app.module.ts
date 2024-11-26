import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getDatabase, provideDatabase } from '@angular/fire/database';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, provideFirebaseApp(() => initializeApp({"projectId":"siga2-63823","appId":"1:1013220532794:web:a102c89dcd46c8129b8b03","databaseURL":"https://siga2-63823-default-rtdb.firebaseio.com","storageBucket":"siga2-63823.firebasestorage.app","apiKey":"AIzaSyCKqdNzQ4ko6lw6kohzOwFlrpj2fWdVyyM","authDomain":"siga2-63823.firebaseapp.com","messagingSenderId":"1013220532794"})), provideAuth(() => getAuth()), provideDatabase(() => getDatabase())],
  bootstrap: [AppComponent],
})
export class AppModule {}
