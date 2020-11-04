import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  PlainLiteralObject
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Class } from '@utils/types';
import { mapper } from '@utils/mapper';

@Injectable()
export class SerializerInterceptor implements NestInterceptor {

  constructor(
    private readonly dtoClass: Class
  ) { }

  intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
    return next.handle().pipe(
      map((data: PlainLiteralObject | Array<PlainLiteralObject>) =>
        this.serialize(data)
      )
    );
  }

  private serialize(data: PlainLiteralObject | Array<PlainLiteralObject>): any {
    return Array.isArray(data)
      ? (data).map(item => mapper(this.dtoClass, item))
      : mapper(this.dtoClass, data);
  }

}
