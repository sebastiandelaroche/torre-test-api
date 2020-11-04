import * as dotenvSafe from 'dotenv-safe';

dotenvSafe.config();

!process[Symbol.for('ts-node.register.instance')] &&
  require('module-alias/register');

import { NestFactory, HttpAdapterHost } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import * as bodyParser from 'body-parser';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as R from 'ramda';
import { AllExceptionsFilter } from '@core/filters';
import { AppModule } from './AppModule';

const handleError = R.curry((message, error) => console.error(message, error));
process.on('exit', handleError('exit'));
process.on('uncaughtError', handleError('uncaughtError'));
process.on('uncaughtException', handleError('uncaughtException'));
process.on('uncaughtRejection', handleError('uncaughtRejection'));
process.on('unhandledRejection', handleError('unhandledRejection'));

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());

  app.useGlobalFilters(
    new AllExceptionsFilter(app.get(HttpAdapterHost).httpAdapter),
  );

  app.use(bodyParser.json());

  app.enableCors({ origin: '*' });

  const options = new DocumentBuilder()
    .setTitle('Torre Test Api')
    .setDescription('torre-test-api')
    .setVersion('1.0.0')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('documentation', app, document);

  await app.listen(process.env.PORT);
}

bootstrap();
