export class Transfers {

    constructor(
        public account_number_dest: String ,
        public value: Number,
        public token: String
    ) {}
}

export class TransferRes {

    constructor(
        public error: String,
        public success: boolean,
        public token: String,
        public hash: String
    ) {}
}