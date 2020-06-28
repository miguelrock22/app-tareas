import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { TaskComponent } from './pages/task/task.component';

import { AuthGuard } from './auth/auth.guard';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'task', component: TaskComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule { }
