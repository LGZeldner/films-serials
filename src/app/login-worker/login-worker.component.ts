import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';
import "firebase/auth";
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-worker',
  templateUrl: './login-worker.component.html',
  styleUrls: ['./login-worker.component.css']
})
export class LoginWorkerComponent implements OnInit {
  formLogin: FormGroup;
  disabled = false;
  email;
  error;
  password;
  workers : any[];
  constructor(public db:AngularFireDatabase, private router:Router) {
    db.list('/workers').valueChanges().subscribe(workers => {
      this.workers = workers;
      console.log(this.workers);
      console.log(this.workers[0]);
    });
  }

  async ngOnInit() {
    this.formLogin = new FormGroup({
      email: new FormControl(this.email, [Validators.required,  Validators.email]),
      password: new FormControl(this.password, [Validators.required]),
    });
  }

  async onSubmit() {
    if (this.formLogin.value.email== this.workers[0] && this.formLogin.value.password==this.workers[1]){
      this.router.navigate(['/customer']);
    }
    else {
      alert("Неверные данные");
    }


  }
}
