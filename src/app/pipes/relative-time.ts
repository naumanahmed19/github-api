import { Pipe, PipeTransform } from '@angular/core';
import {format, distanceInWordsToNow} from 'date-fns';

@Pipe({
    name: 'relativeTime',
})
export class RelativeTime implements PipeTransform {
    /**
     * Takes a value and makes it lowercase.
     */
    transform(value: string, ...args) {
      return distanceInWordsToNow(format(new Date(value)), {addSuffix: true});
    }
}
