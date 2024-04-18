import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutes } from './app.routes';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { HttpClientModule } from '@angular/common/http';
//importer les component PrimeNG
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { MatchDetailsComponent } from './components/match-details/match-details.component';
import { ChipModule } from 'primeng/chip';
import { TagModule } from 'primeng/tag';
import {  ProgressBarModule } from 'primeng/progressbar';
import {  DividerModule } from 'primeng/divider';
import { TeamlineupComponent } from './components/teamlineup/teamlineup.component';
import { GameStatisticsComponent } from './components/game-statistics/game-statistics.component';
import { InjuriesCardComponent } from './components/injuries-card/injuries-card.component';
import { TabViewModule } from 'primeng/tabview';
import { CardModule } from 'primeng/card';




@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    MatchDetailsComponent,
    TeamlineupComponent,
    GameStatisticsComponent,
    InjuriesCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutes,
    provideFirebaseApp(() => initializeApp({
      projectId: 'testeilco2024',
      appId: '1:410339903646:web:1d0269e8cfa24fae79538f',
      databaseURL: 'https://testeilco2024-default-rtdb.europe-west1.firebasedatabase.app',
      storageBucket: 'testeilco2024.appspot.com',
      apiKey: 'AIzaSyB8uRqx53oxEvV-un9ImNrT0cm2nx4Wu8c',
      authDomain: 'testeilco2024.firebaseapp.com',
      messagingSenderId: '410339903646',
    })),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    BrowserAnimationsModule,
    HttpClientModule,
    // Déclarer primeng Component
    ButtonModule,
    AvatarModule,
    ChipModule,
    TagModule,
    ProgressBarModule,
    DividerModule,
    TabViewModule,
    CardModule,
  ],
  providers: [],
  bootstrap: [AppComponent] // Déclarer AppComponent à amorcer
})
export class AppModule {
  ngDoBootstrap() {
    // Ne rien mettre ici si vous utilisez la méthode bootstrapModule
  }
}
