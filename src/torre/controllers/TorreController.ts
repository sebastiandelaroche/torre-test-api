import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Torre')
@Controller('torres')
export class TorreController { }
