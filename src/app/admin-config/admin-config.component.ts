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
  id:number;
  disabled = false;
  constructor(private activeRoute: ActivatedRoute,
              private router: Router,
              private FilmsService:FilmsService){

  }
  ngOnInit() {
    this.updateData();
    this.formAdd = new FormGroup({                              /**создание новой формы для заказа фильм или сериалов из списка*/
      name: new FormControl( { value: '', disabled: this.disabled }, [Validators.required]),
      picture: new FormControl( { value: '', disabled: this.disabled }),
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
    if (this.id== null){
      this.FilmsService.postFilms(this.formAdd.value);
      this.router.navigate(['/admin-config']);
    }
    else {
      this.FilmsService.putById(this.id, this.formAdd.value);
    }
    this.updateData();
    this.formAdd = new FormGroup({                              /**создание новой формы для заказа фильм или сериалов из списка*/
      name: new FormControl( { value: '', disabled: this.disabled }, [Validators.required]),
      picture: new FormControl( { value: '', disabled: this.disabled }),
      info: new FormControl( { value: '', disabled: this.disabled } , [Validators.required]),
      price: new FormControl({ value: '', disabled: this.disabled }, [Validators.required]),
    });

  }

  delete(id:number) {
    console.log(id);
    this.FilmsService.deleteById(id);
    this.updateData();
  }

  edit(film){
    console.log(film);
    this.formAdd = new FormGroup({                              /**создание новой формы для заказа фильм или сериалов из списка*/
      name: new FormControl( { value: film.name, disabled: this.disabled }, [Validators.required]),
      picture: new FormControl( { value: film.picture, disabled: this.disabled }),
      info: new FormControl( { value: film.info, disabled: this.disabled } , [Validators.required]),
      price: new FormControl({ value: film.price, disabled: this.disabled }, [Validators.required]),
    });
    this.id = film.id;
  }
}
