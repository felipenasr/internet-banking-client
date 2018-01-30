import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module'
import { DashboardModule } from './dashboard/dashboard.module'
import { CurrencyMaskModule } from "ng2-currency-mask";

import { AppComponent } from './app.component'
import { LoginComponent } from './login/login.component'
import { CpfMaskDirective } from './login/cpf-mask.directive'

import { ApiService } from './shared/services/api.service'
import { AuthService } from './shared/services/auth.service'
import { JwtTokenService } from './shared/services/jwt.service'
import { LocalStorageService } from './shared/services/local-storage.service'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CpfMaskDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    CurrencyMaskModule
  ],
  providers: [
    ApiService,
    AuthService,
    JwtTokenService,
    LocalStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
