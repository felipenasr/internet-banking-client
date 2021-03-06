import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { RotasModule } from './app.router'

import { AppComponent } from './app.component'
import { LoginComponent } from './login/login.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { TransferComponent } from './transfer/transfer.component'

import { HeaderComponent } from './shared/header/header.component'
import { SidenavComponent } from './shared/sidenav/sidenav.component'

import { ApiService } from './shared/services/api.service'
import { LocalStorageService } from './shared/services/local-storage.service'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    TransferComponent,
    HeaderComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    RotasModule
  ],
  providers: [
    ApiService,
    LocalStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
