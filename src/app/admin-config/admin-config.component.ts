import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FilmsService } from '../services/films.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-config',
  templateUrl: './admin-config.component.html',
  styleUrls: ['./admin-config.component.css']
})
export class AdminConfigComponent implements OnInit {
  formAdd: FormGroup;
  films;
  disabled = false;
  constructor(private activeRoute: ActivatedRoute,
              private router: Router,
              private FilmsService:FilmsService){

  }
  ngOnInit() {
    this.updateData();
    this.formAdd = new FormGroup({                              /**создание новой формы для заказа фильм или сериалов из списка готовых */
      name: new FormControl( { value: '', disabled: this.disabled }, [Validators.required]),
      picture: new FormControl( { value: '', disabled: this.disabled }, [Validators.required]),
      info: new FormControl( { value: '', disabled: this.disabled } , [Validators.required]),
      price: new FormControl({ value: '', disabled: this.disabled }, [Validators.required]),
    });


  }
  async updateData() {                  /** Получаем все фильмы или сериалы, заносим их в переменную 'films'*/

    try
    {
      this.films = await this.FilmsService.getAll();

    } catch (e)
    {
      console.log(e);
    }
  }
  onSubmit(){
    console.log(this.formAdd.value);
    this.FilmsService.postFilms(this.formAdd.value);
    this.router.navigate(['/admin-change']);

  }
}
