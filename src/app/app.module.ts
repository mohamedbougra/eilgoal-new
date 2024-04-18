import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; // Importer RouterModule
import { AppRoutes } from './app.routes';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatchDetailsComponent } from './components/match-details/match-details.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { HttpClientModule } from '@angular/common/http';
// Importer les composants PrimeNG
import { ButtonModule } from 'primeng/button';
import { AppLayoutModule } from './layout/app.layout.module';
import { CommonModule, PathLocationStrategy } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { CheckboxModule } from 'primeng/checkbox';
import { ChipModule } from 'primeng/chip';
import { AvatarModule } from 'primeng/avatar';
import { TagModule } from 'primeng/tag';
import { ProgressBarModule } from 'primeng/progressbar';
import { MeterGroupModule } from 'primeng/metergroup';
import { TabViewModule } from 'primeng/tabview';
import {DropdownModule} from 'primeng/dropdown';
import {CardModule} from 'primeng/card';
import { LigueComponent } from './components/Ligue/ligue.component';
import { MatchTableComponent } from './components/match-table/match-table.component';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { TableComponent } from './components/match-table/table/table.component';
import { TabMenuModule } from 'primeng/tabmenu';
import {DividerModule} from 'primeng/divider';
import { RankTableComponent } from './components/rank-table/rank-table.component';
import { RankTable2Component } from './components/rank-table2/rank-table2.component';
import { SelectItemGroup } from 'primeng/api';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MatchDetailsComponent,
    LigueComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    MatchTableComponent,
    TableComponent,
    RankTableComponent,
    RankTable2Component
  ],
  imports: [
    RouterModule, // Ajouter RouterModule ici
    BrowserModule,
    AppRoutes,
    TabMenuModule,
    AppLayoutModule,
    provideFirebaseApp(() => initializeApp({
      apiKey: "AIzaSyDchvcv5F0xIJOSyjXpy1sf5wTnK_7s-O0",
      authDomain: "eil-goal-new.firebaseapp.com",
      projectId: "eil-goal-new",
      storageBucket: "eil-goal-new.appspot.com",
      messagingSenderId: "186379281525",
      appId: "1:186379281525:web:a5e9a610d785c94361843c",
      measurementId: "G-BP85RCQQ44"
    })),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    BrowserAnimationsModule,
    HttpClientModule,
    // Déclarer le composant PrimeNG
    ButtonModule,
    InputTextModule,
    PasswordModule,
    CheckboxModule,
    ChipModule,
    AvatarModule,
    TagModule,
    ProgressBarModule,
    MeterGroupModule,
    TabViewModule,
    DropdownModule,
    CardModule,
    FormsModule,
    TableModule,
    DividerModule,CommonModule
  ],
  providers: [
    { provide: PathLocationStrategy, useClass: PathLocationStrategy },
  ],
  bootstrap: [AppComponent] // Déclarer AppComponent à amorcer
})
export class AppModule {
  ngDoBootstrap() {
    // Ne rien mettre ici si vous utilisez la méthode bootstrapModule
  }
}
