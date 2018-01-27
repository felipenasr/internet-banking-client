import { NgModule } from '@angular/core'

import { ApiService } from './api.service'
import { AuthService } from './auth.service'
import { JwtTokenService } from './jwt.service'
import { LocalStorageService } from './local-storage.service'


@NgModule({
    providers: [
        ApiService,
        AuthService,
        JwtTokenService,
        LocalStorageService
    ]
})
export class ServicesModule {}