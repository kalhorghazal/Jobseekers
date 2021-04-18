import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AdminUsersModule } from '../admin-users/admin-users.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './costants';
import { JwtStrategy } from './jwt.strategy';


@Module({
  imports: [
    AdminUsersModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}