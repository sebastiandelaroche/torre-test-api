import { Module } from '@nestjs/common';
import { MorganModule, MorganInterceptor } from 'nest-morgan';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { TorreModule } from './torre/module';

@Module({
  imports: [
    MorganModule.forRoot(),
    TorreModule,
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: MorganInterceptor('dev'),
    },
  ]
})
export class AppModule { }
