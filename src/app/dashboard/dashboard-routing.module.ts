import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { DashboardComponent } from './dashboard.component'
import { TransferComponent } from './transfer/transfer.component'
import { ComprovanteComponent } from './transfer/comprovante/comprovante.component'
import { ExtractComponent } from './extract/extract.component'
import { ReceiptComponent } from './receipt/receipt.component'
import { ConfirmComponent } from './confirm/confirm.component'
import { HomeComponent } from './home/home.component'

const dashboardRoutes: Routes = [
    { path: '', component: DashboardComponent, children: [
        { path: '', component: HomeComponent },
        { path: 'transfer', component: TransferComponent },
        { path: 'comprovante', component: ComprovanteComponent },
        { path: 'extract', component: ExtractComponent },
        { path: 'extract/:id', component: ExtractComponent},
        { path: 'receipt', component: ReceiptComponent },
        { path: 'confirm', component: ConfirmComponent }
    ]}
]

@NgModule({
    imports: [RouterModule.forChild(dashboardRoutes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule {}