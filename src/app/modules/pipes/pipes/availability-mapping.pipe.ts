import { Pipe, PipeTransform } from '@angular/core';
import { AVAILABILITY_MAP } from 'src/app/constants';

@Pipe({
  name: 'availabilityMapping'
})
export class AvailabilityMappingPipe implements PipeTransform {

  transform(value: string, notDefinedMsg?: string): string {
    return value in AVAILABILITY_MAP ? AVAILABILITY_MAP[value] : (notDefinedMsg ?? 'No definido');
  }

}
