import { Module } from '@nestjs/common';
import { AdminUsersService } from './admin-users.service';
import { AdminUsersController } from './admin-users.controller';

@Module({
  providers: [AdminUsersService],
  exports: [AdminUsersService],
  controllers: [AdminUsersController],

})
export class AdminUsersModule {}
