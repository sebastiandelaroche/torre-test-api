import { Module, HttpModule } from '@nestjs/common';
import { getPrototypes } from '@utils/files';

const controllers = getPrototypes(
  `${__dirname}/controllers/*{.ts,.js}`,
);

const useCases = getPrototypes(
  `${__dirname}/use-cases/*{.ts,.js}`,
);

const gateways = getPrototypes(
  `${__dirname}/gateways/*{.ts,.js}`,
);

@Module({
  imports: [HttpModule],
  controllers: [...controllers],
  providers: [
    ...useCases,
    ...gateways,
  ],
})
export class TorreModule { }
