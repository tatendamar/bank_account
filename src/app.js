import { Depositer } from './controllers/depositer.js';
import { Withdrawer } from './controllers/withdrawer.js';
import { bankData } from './bank-data.js';
import { BankDataService } from './services/bank-data-service.js';

let bankDataService = new BankDataService();
bankDataService.loadData(bankData);

for (let deposit of bankDataService.depositer) {
  console.log(deposit.id);
}
