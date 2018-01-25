import { Routes, RouterModule } from '@angular/router'

import { LoginComponent } from './login/login.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { TransferComponent } from './transfer/transfer.component'
import { ExtractComponent } from './extract/extract.component';

const rotasApp: Routes = [
    { path: '', component: LoginComponent},
    { path: 'login', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'transfer', component: TransferComponent },
    { path: 'extract', component: ExtractComponent },
    { path: '**', redirectTo: '/' }
]

export const RotasModule = RouterModule.forRoot(rotasApp)
