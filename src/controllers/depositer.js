import { BankAccount } from './bank-account.js';

export class Depositer extends BankAccount {
  constructor(id, name, latLong, branch) {
    super(id, name, latLong, branch);
    this.depositAmt = null;
    this.depositType = null;
  }
}
