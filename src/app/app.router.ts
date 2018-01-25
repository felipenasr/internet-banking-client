import { Routes, RouterModule } from '@angular/router'

import { LoginComponent } from './login/login.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { TransferComponent } from './transfer/transfer.component'
import { ExtractComponent } from './extract/extract.component';
import { ReceiptComponent } from './receipt/receipt.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { ComprovanteComponent } from './transfer/comprovante/comprovante.component';

const rotasApp: Routes = [
    { path: '', component: LoginComponent},
    { path: 'login', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'transfer', component: TransferComponent },
    { path: 'comprovante', component: ComprovanteComponent},
    { path: 'extract', component: ExtractComponent },
    { path: 'extract/:id', component: ExtractComponent},
    { path: 'receipt', component: ReceiptComponent },
    { path: 'confirm', component: ConfirmComponent },
    { path: '**', redirectTo: '/' }
]

export const RotasModule = RouterModule.forRoot(rotasApp)
