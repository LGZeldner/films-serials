import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import 'firebase/analytics';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    firebase.analytics();
  }

}
