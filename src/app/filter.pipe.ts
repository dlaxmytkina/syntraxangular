import { Pipe, PipeTransform } from '@angular/core';
import { Card } from './cards.service';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
*/
@Pipe({name: 'filterForSearch',
pure:false})
export class FilterForSearch implements PipeTransform {
  transform(allCards:Card[], value:string):Card[] {
    return allCards.filter(card=>card.title.toLowerCase().includes(value.toLowerCase()));
  }
}