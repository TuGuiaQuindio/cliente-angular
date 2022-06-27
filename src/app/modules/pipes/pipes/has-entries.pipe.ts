import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hasEntries'
})
export class HasEntriesPipe implements PipeTransform {

  transform(value?: Object, ...args: unknown[]): boolean {
    return !!value && Object.values(value).length > 0;
  }

}
