'use strict';

class ChangeHandler {
    constructor(amountDue) {
        this.amountDue = amountDue;
        this.cashTendered = 0;
    }
    insertCoin(type) {
      let amount = 0;
        switch(type){
          case "quarter":
            amount=25;
             break;
          case "dime":
            amount=10;
            break;
          case "nickel":
            amount=5;
            break;
          case "penny":
            amount=1;
            break;
          default:
            amount=0;
      }
      this.cashTendered = this.cashTendered + amount;
    }
    isPaymentSufficient() {
      if(this.cashTendered >= this.amountDue) {
        return true;
      }
      else {
        return false;
      }
    }
    giveChange() {
      let change = this.cashTendered - this.amountDue;
      let coins = [];
      let remainder = 0;
      let quarters = 0;
      let dimes = 0;
      let nickels = 0;
      let pennies = 0;
      let calc = 0;
      if(change >= 25) {
        remainder = change%25;
        calc = change - remainder;
        change = remainder;
        quarters = calc/25;
      }
      if(change >= 10) {
        remainder = change%10;
        calc = change - remainder;
        change = remainder;
        dimes = calc/10;
      }
      if(change >= 5) {
        remainder = change%5;
        calc = change - remainder;
        change = remainder;
        nickels = calc/5;
      }      
      if(change >= 1) {
        remainder = change%1;
        calc = change - remainder;
        change = remainder;
        pennies = calc/1;
      }
      coins = [quarters, dimes, nickels, pennies];

      return coins;
    }
}

let coin = new ChangeHandler(100);