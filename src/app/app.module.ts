import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { WinnerSignUpComponent } from './winner-sign-up/winner-sign-up.component';
import { PromoCodeCheckComponent } from './promo-code-check/promo-code-check.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { WinnerListComponent } from './admin/winner-list/winner-list.component';

const appRoutes: Routes = [
  { 
    path: 'sign-in', component: SignInComponent 
  },
  { 
    path: 'winners', component: WinnerListComponent 
  },
  {
    path: 'winner-sign-up/:id/:code',
    component: WinnerSignUpComponent,
    data: { title: 'Check Promo Code' }
  },
  {
    path: '',
    component: PromoCodeCheckComponent,
    data: { title: 'Check Promo Code' }
  },
  { path: '**', component: PromoCodeCheckComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    WinnerSignUpComponent,
    PromoCodeCheckComponent,
    SignInComponent,
    HeaderComponent,
    FooterComponent,
    WinnerListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes
     // { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
