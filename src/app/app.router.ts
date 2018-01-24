import { Routes, RouterModule } from '@angular/router'

import { LoginComponent } from './login/login.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { TransferComponent } from './transfer/transfer.component'

const rotasApp: Routes = [
    { path: '', component: LoginComponent},
    { path: 'login', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'transfer', component: TransferComponent },
    { path: '**', redirectTo: '/' }
]

export const RotasModule = RouterModule.forRoot(rotasApp)
