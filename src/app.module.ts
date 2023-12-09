import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './auth/user.entity';
import { DocumentBuilder } from '@nestjs/swagger';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { jwtStrategy } from './auth/jwt.strategy';
import { UsersModule } from './users/users.module';
import { UsersController } from './users/users.controller';


@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'luis',
      password: '1234',
      database: 'proyecto1',
      entities: [User],
      synchronize: true,

    }),
    TypeOrmModule.forFeature([User]),
    AuthModule,

  ],
  controllers: [AppController, ],
  providers: [AppService, jwtStrategy, ],
})
export class AppModule {}
