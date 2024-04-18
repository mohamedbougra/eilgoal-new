import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { AuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { AppLayoutComponent } from './layout/app.layout.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { MatchDetailsComponent } from './components/match-details/match-details.component';
import { LigueComponent } from './components/Ligue/ligue.component';
import { MatchTableComponent } from './components/match-table/match-table.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['sign-in']);

export const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard],
        data: { authGuardPipe: redirectUnauthorizedToLogin },
      },
      {
        path: 'match/:id',
        component: MatchDetailsComponent,
      },
      {
        path: 'league/:id',
        component: LigueComponent,
      },
      
    ],
  },
  { path: 'sign-in', component: SignInComponent },
  { path: 'register-user', component: SignUpComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },
  { path: 'notfound', component: NotfoundComponent },
  { path: 'matchtable', component: MatchTableComponent },
  { path: '**', redirectTo: '/notfound' },


];  
@NgModule({
  imports: [RouterModule.forRoot(routes,{ scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })],
  exports: [RouterModule],
})
export class AppRoutes {}
