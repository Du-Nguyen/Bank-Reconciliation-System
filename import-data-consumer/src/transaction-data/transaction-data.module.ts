import { Module } from '@nestjs/common';
import { TransactionDataService } from './transaction-data.service';
import { TransactionDataController } from './transaction-data.controller';

@Module({
  imports: [],
  controllers: [TransactionDataController],
  providers: [TransactionDataService],
  exports: [TransactionDataService],
})
export class TransactionDataModule {}
