import {ATM} from './ATM'

describe('test for ATM class', () => {
    describe('test for the constructor and withdraw methods', () => {
        let myATM;
        beforeEach(() =>{
            myATM = new ATM(3000);
        });

        test ('constructor work', () => {
            expect(myATM).toBeInstanceOf(ATM);
            expect(myATM.getBalance()).toBe(3000);
        });
    });
});