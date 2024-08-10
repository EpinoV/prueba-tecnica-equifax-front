import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './public/login/login.component';
import { DataComponent } from './private/data/data.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'data', component: DataComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
