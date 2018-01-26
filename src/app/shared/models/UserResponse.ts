export class UserResponse {

    constructor(
        public account: String = '',
        public alias: String = '',
        public balance: Number =  0,
        public email: String = '',
        public gender: String = '',
        public name: String = ''
    ) {}
}
