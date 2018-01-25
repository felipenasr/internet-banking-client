export class Transfers {

    constructor(
        public account_number_origin: String = '',
        public account_number_dest: String = '',
        public value: Number =  0,
        public previous_balance_origin: String = '',
        public previous_balance_dest: String = '',
        public date: Date = new Date()
    ) {}
}