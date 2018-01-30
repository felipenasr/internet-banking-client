import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { DashboardRoutingModule } from './dashboard-routing.module'
import { CurrencyMaskModule } from "ng2-currency-mask";

import { ConfirmComponent } from './confirm/confirm.component'
import { ExtractComponent } from './extract/extract.component'
import { HeaderComponent } from './header/header.component'
import { ReceiptComponent } from './receipt/receipt.component'
import { SidenavComponent } from './sidenav/sidenav.component'
import { TransferComponent } from './transfer/transfer.component'
import { ComprovanteComponent } from './transfer/comprovante/comprovante.component'
import { DashboardComponent } from './dashboard.component'
import { HomeComponent } from './home/home.component';


@NgModule({
    declarations: [
        ConfirmComponent,
        ExtractComponent,
        HeaderComponent,
        ReceiptComponent,
        SidenavComponent,
        TransferComponent,
        ComprovanteComponent,
        DashboardComponent,
        HomeComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        DashboardRoutingModule,
        CurrencyMaskModule
    ],

})
export class DashboardModule {}
