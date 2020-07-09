import { Pipe, PipeTransform } from '@angular/core';
import {isNullOrUndefined} from "util";

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  search:"";
  transform(customers, search) {


    if (!isNullOrUndefined(customers) && search.trim() !== "") {
      let filter = customers.filter(
        customers => customers.name_customer.toLowerCase().indexOf(search.toLowerCase()) !== -1);
      return filter;
    }
    else
      return customers;

  }

}
