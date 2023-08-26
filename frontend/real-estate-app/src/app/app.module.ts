import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Add this line
import { AppComponent } from './app.component';
import { RealEstateListComponent } from './real-estate-list/real-estate-list.component';
import { AppRoutingModule } from './app-routing.module';
import { EstateCardComponent } from './estate-card/estate-card.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RealEstateFiltersComponent } from './real-estate-filters/real-estate-filters.component';
import { RealEstateAdsComponent } from './real-estate-ads/real-estate-ads.component';
import { LoginComponent } from './login/login.component';
import { UserAdsComponent } from './user-ads/user-ads.component';


@NgModule({
  declarations: [
    AppComponent,
    RealEstateListComponent,
    EstateCardComponent,
    NavbarComponent,
    RealEstateFiltersComponent,
    RealEstateAdsComponent,
    LoginComponent,
    UserAdsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
