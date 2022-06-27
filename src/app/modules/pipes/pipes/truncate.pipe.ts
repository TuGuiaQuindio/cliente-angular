import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, count: number, stringEnd: string): string {
    if (!value) return '';
    if (!count || count <= 0) return '';
    const output = value.length > count 
      ? value.substring(0,count - (stringEnd ?? '').length) + stringEnd
      : value;
    return output;
  }

}
