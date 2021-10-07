export class ATM {
    constructor(balance){
        this.balance = balance;
        this.paymet = 500;
        this.bills = 150;
    }

    getBalance() {
        return this.balance;
    }

    whithdraw(amount) {
        this.balance -= amount;
        return this.balance;
    }

    putIn(amount) {
        this.balance += amount;
        return this.balance;
    }

    receivePayment() {
        this.balance += this.paymet;
        return this.balance;
    }

    payBills() {
        this.balance -= this.bills;
        return this.balance;
    }
}