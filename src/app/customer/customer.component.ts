import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { customers } from 'src/app/film/filmModule';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customers:any[];

  constructor(db:AngularFireDatabase) {
    db.list('/customers').valueChanges().subscribe(customers => {
      this.customers = customers;
      console.log(this.customers);
    });
  }

  ngOnInit() {
  }

}
