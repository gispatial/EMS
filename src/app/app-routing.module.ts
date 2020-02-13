import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddMeetingComponent } from './add-meeting/add-meeting.component';
import { AboutComponent } from './about/about.component';
import { SecureComponent } from './secure/secure.component';
import { AuthGaurdService } from './services/auth-gaurd.service';

const routes: Routes = [
  {
    path: '',
    component: SecureComponent,
    canActivate: [AuthGaurdService],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'meeting/new', component: AddMeetingComponent },
      { path: 'about', component: AboutComponent },
    ]
  },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule) },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGaurdService]
})
export class AppRoutingModule { }