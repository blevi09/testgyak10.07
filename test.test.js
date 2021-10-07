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

        /*test ('constructor work', () => {
            
        });*/
    });
});