import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'strLength'
})
export class StrLengthPipe implements PipeTransform {

  transform(value: string): number {
    return (value ?? '').length;
  }

}
