import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatInputModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatCardModule,
  MatDialogModule,
  MAT_DIALOG_DEFAULT_OPTIONS
} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PlayerComponent } from './_components/player/player.component';
import { HomePage, AlertTemplateComponent } from './home/home.page';
import { SettingsComponent } from './settings/settings.component';
import { FindFreqComponent } from './_components/find-freq/find-freq.component';
@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    HomePage,
    SettingsComponent,
    FindFreqComponent,
    AlertTemplateComponent
  ],
  entryComponents: [AlertTemplateComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    AppRoutingModule,
    MatInputModule,
    MatSliderModule,
    FormsModule,
    MatSlideToggleModule,
    MatCardModule,
    ReactiveFormsModule,
    MatDialogModule,
    IonicModule.forRoot()
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: false } }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
