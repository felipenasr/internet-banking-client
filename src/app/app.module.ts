import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module'
import { ServicesModule } from './shared/services/services.module'
import { DashboardModule } from './dashboard/dashboard.module'

import { AppComponent } from './app.component'
import { LoginComponent } from './login/login.component'

import { CpfMaskDirective } from './login/cpf-mask.directive';

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
    ServicesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
