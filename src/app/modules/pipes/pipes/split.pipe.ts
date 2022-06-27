import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'split'
})
export class SplitPipe implements PipeTransform {

  transform(value: string, ...args: string[]): string[] {
    if(!value) return [];
    const separator = args.length >= 1 ? args[0] : ' ';
    return value.split(separator);
  }

}
