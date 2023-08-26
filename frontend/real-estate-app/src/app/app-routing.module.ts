import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RealEstateAdsComponent } from './real-estate-ads/real-estate-ads.component';
import { LoginComponent } from './login/login.component'; // import your login component
import { UserAdsComponent } from './user-ads/user-ads.component'; 

const routes: Routes = [
  { path: '', component: RealEstateAdsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'user-ads', component: UserAdsComponent },
  // other routes...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
