import { BankAccount } from './bank-account.js';

export class Withdrawer extends BankAccount {
  constructor(id, name, latLong, branch) {
    super(id, name, latLong, branch);
    this.withdrawAmt = null;
    this.from = null;
  }
}
