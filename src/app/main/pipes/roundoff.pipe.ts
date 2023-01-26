import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'roundoff'
})
export class RoundoffPipe implements PipeTransform {

  transform(number: any, ...args: any[]): any {
    if (number == 0) {
      return 0;
    }
    else {
      // hundreds
      if (number <= 999) {
        return Math.round(number);
      }
      // thousands
      else if (number >= 1000 && number <= 999999) {
        return Math.round(number / 1000) + ' K';
      }
      // millions
      else if (number >= 1000000 && number <= 999999999) {
        return Math.round(number / 1000000) + ' Million';
      }
      // billions
      else if (number >= 1000000000 && number <= 999999999999) {
        return Math.round(number / 1000000000) + ' Billion';
      }
      else
        return Math.round(number);
    }
  }

}
