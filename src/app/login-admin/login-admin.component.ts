import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {

  formLogin: FormGroup;
  disabled = false;
  email;
  password;
  constructor( private router:Router) {
  }

  async ngOnInit() {
    this.formLogin = new FormGroup({
      email: new FormControl(this.email, [Validators.required,  Validators.email]),
      password: new FormControl(this.password, [Validators.required]),
    });
  }

  async onSubmit() {
    if (this.formLogin.value.email== "admin@gmail.com" && this.formLogin.value.password=="admin"){
      this.router.navigate(['/admin']);
    }
    else {
      alert("Неверные данные");
    }

  }
}
