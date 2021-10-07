import {ATM} from './ATM'

describe('test for ATM class', () => {
    describe('test for the putIn method', () => {
        let myATM;
        beforeEach(() =>{
            myATM = new ATM(3000);
        });

        test ('balance should be 3000', () => {
          expect(myATM.getBalance()).toBe(3000);
        });

        test ('payBills should work', () =>{
            expect(myATM.getBalance()).toBe(3000);
            myATM.payBills();
            expect(myATM.getBalance()).toBe(3000 - myATM.bills);
        });

        test ('payBills x2 should work', () =>{
            expect(myATM.getBalance()).toBe(3000);
            myATM.payBills();
            myATM.payBills();
            expect(myATM.getBalance()).toBe(3000-(2*myATM.bills));
        });
    });
});