'use strict';
describe('Constructor', function() {
  it('amountDue is set based in argument', function() {
    expect(coin.amountDue).toEqual(100);
  });
  it('cashTendered is set to zero', function() {
    expect(coin.cashTendered).toEqual(0);
  });
});

describe('insertCoin', function() {
  it('inserting a quarter adds 25', function() {
    coin.cashTendered = 0;
    coin.insertCoin('quarter');
    expect(coin.cashTendered).toEqual(25);
  });
  it('inserting a dime adds 10', function() {
    coin.cashTendered = 0;
    coin.insertCoin('dime');
    expect(coin.cashTendered).toEqual(10);
  });
  it('inserting a nickel adds 5', function() {
    coin.cashTendered = 0;
    coin.insertCoin('nickel');
    expect(coin.cashTendered).toEqual(5);
  });
  it('inserting a penny adds 1', function() {
    coin.cashTendered = 0;
    coin.insertCoin('penny');
    expect(coin.cashTendered).toEqual(1);
  });
  it('calling multiple times continues to add on to amount', function() {
    coin.cashTendered = 0;
    coin.insertCoin('quarter');
    let first = coin.cashTendered;
    coin.insertCoin('nickel');
    let second = coin.cashTendered;
    expect(second).toBeGreaterThan(first);
  });  
});

describe('isPaymentSufficient', function() {
  it('Returns true if cashTendered more than amountDue', function() {
    coin.cashTendered = 110;
    expect(coin.isPaymentSufficient()).toBe(true);
  });
  it('Returns false if cashTendered less than amountDue', function() {
    coin.cashTendered = 70;
    expect(coin.isPaymentSufficient()).toBe(false);
  });
  it('Returns true if cashTendered equal to amountDue', function() {
    coin.cashTendered = 100;
    expect(coin.isPaymentSufficient()).toBe(true);
  });
});

describe('giveChange', function() {
  it('0 change produces: quarters: 0, dimes: 0, nickels: 0, pennies: 0', function() {
    coin.cashTendered = coin.amountDue;
    expect(coin.giveChange()).toEqual([0,0,0,0]);
  });
  it('10 change produces: quarters: 0, dimes: 1, nickels: 0, pennies: 0', function() {
    coin.cashTendered = coin.amountDue + 10;
    expect(coin.giveChange()).toEqual([0,1,0,0]);
  });
  it('27 change produces: quarters: 1, dimes: 0, nickels: 0, pennies: 2', function() {
    coin.cashTendered = coin.amountDue + 27;
    expect(coin.giveChange()).toEqual([1,0,0,2]);
  });
  it('68 change produces: quarters: 1, dimes: 1, nickels: 1, pennies: 3', function() {
    coin.cashTendered = coin.amountDue + 68;
    expect(coin.giveChange()).toEqual([2,1,1,3]);
  });
  it('53 change produces: quarters: 1, dimes: 0, nickels: 0, pennies: 2', function() {
    coin.cashTendered = coin.amountDue + 53;
    expect(coin.giveChange()).toEqual([2,0,0,3]);
  });
  it('93 change produces: quarters: 1, dimes: 0, nickels: 0, pennies: 2', function() {
    coin.cashTendered = coin.amountDue + 93;
    expect(coin.giveChange()).toEqual([3,1,1,3]);
  });
});

