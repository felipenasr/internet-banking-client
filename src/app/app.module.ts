import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { RotasModule } from './app.router'


import { AppComponent } from './app.component'
import { LoginComponent } from './login/login.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { TransferComponent } from './transfer/transfer.component'


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    TransferComponent
  ],
  imports: [
    BrowserModule,
    RotasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
