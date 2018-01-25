import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { RotasModule } from './app.router'

import { AppComponent } from './app.component'
import { LoginComponent } from './login/login.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { TransferComponent } from './transfer/transfer.component'
import { ReceiptComponent } from './receipt/receipt.component'
import { ConfirmComponent } from './confirm/confirm.component'

import { HeaderComponent } from './shared/header/header.component'
import { SidenavComponent } from './shared/sidenav/sidenav.component'

import { ApiService } from './shared/services/api.service'
import { LocalStorageService } from './shared/services/local-storage.service';
import { ExtractComponent } from './extract/extract.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComprovanteComponent } from './transfer/comprovante/comprovante.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    TransferComponent,
    ReceiptComponent,
    ConfirmComponent,
    HeaderComponent,
    SidenavComponent,
    ExtractComponent,
    ComprovanteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RotasModule
  ],
  providers: [
    ApiService,
    LocalStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
