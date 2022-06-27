import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exist'
})
export class ExistPipe implements PipeTransform {

  transform(value: any, ..._args: unknown[]): unknown {
    return !!value;
  }

}
