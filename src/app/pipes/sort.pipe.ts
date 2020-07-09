import { Pipe, PipeTransform } from '@angular/core';
import {isNullOrUndefined} from "util";

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(customers,  sort='every' ) {
    if(!isNullOrUndefined(customers) && ((sort).trim()) !== ""){
      if (sort == 'every'){
        return customers;
      }

    }
  }

}
