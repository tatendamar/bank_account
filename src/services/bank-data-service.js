import { Depositer } from '../controllers/depositer.js';
import { Withdrawer } from '../controllers/withdrawer.js';

export class BankDataService {
  constructor() {
    this.depositer = [];
    this.withdrawer = [];
  }

  loadData(bankData) {
    for (let data of bankData) {
      switch (data.type) {
        case 'depositer':
          let deposit = loadDepositer(data);
          this.depositer.push(deposit);
          break;
        case 'withdrawer':
          this.withdrawer.push(data);
          break;
      }
    }
  }

  loadDepositer(deposit) {
    let dep = new Depositer(
      deposit.id,
      deposit.name,
      deposit.latLong,
      deposit.branch
    );
    dep.depositAmt = deposit.depositAmt;
    dep.depositType = deposit.depositType;
    return dep;
  }
}
