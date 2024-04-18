import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { AuthGuard, redirectUnauthorizedTo} from '@angular/fire/auth-guard';
import { MatchDetailsComponent } from './components/match-details/match-details.component';
import { TeamlineupComponent } from './components/teamlineup/teamlineup.component';
import { GameStatisticsComponent } from './components/game-statistics/game-statistics.component';
import { InjuriesCardComponent } from './components/injuries-card/injuries-card.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['sign-in']);

export const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  { path: 'register-user', component: SignUpComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin } },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },
  { path: 'match-details', component: MatchDetailsComponent },
  { path: 'teamlineup', component: TeamlineupComponent},
  { path: 'game-statistics', component: GameStatisticsComponent},
  { path: 'injuries-card', component: InjuriesCardComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutes {}