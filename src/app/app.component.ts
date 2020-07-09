import { Component } from '@angular/core';
import * as firebase from 'firebase';
import "firebase/auth";
import 'firebase/analytics';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Заказ фильмов и сериалов';
  ngOnInit() {
    firebase.analytics()
  }
}
