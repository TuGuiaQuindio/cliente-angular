import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'notZero'
})
export class NotZeroPipe implements PipeTransform {

  transform(value: number): boolean {
    return value != 0;
  }

}
