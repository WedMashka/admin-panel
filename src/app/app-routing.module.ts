import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AppComponent } from './app.component';
import { SingUpComponent } from './components/sing-up/sing-up.component';

const routes: Routes = [
  {path:'', component: Headers},
  { path: 'login', component: LoginComponent },
  {path:'sing-up', component: SingUpComponent},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
