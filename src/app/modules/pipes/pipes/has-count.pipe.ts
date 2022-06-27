import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hasCount'
})
export class HasCountPipe implements PipeTransform {

  transform(value: any[], ..._args: unknown[]): boolean {
    return value && value.length > 0;
  }

}
