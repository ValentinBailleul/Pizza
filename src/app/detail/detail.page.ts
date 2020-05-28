import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import { Pizza } from '../models/pizza.model';
import { Storage } from '@ionic/storage';
import {PizzaService} from '../services/pizza.service';
import {Ingredient} from '../models/ingredient.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  ingredient: Ingredient = new Ingredient();
  pizzaF: Pizza = new Pizza();
  constructor(private http: HttpClient, private route: Router, private storage: Storage, private pizzaService: PizzaService) {
    this.pizzaService.getPizza().subscribe(pizzas => {
      this.pizzaF = JSON.parse(localStorage.getItem('pizza'));
    });
    this.pizzaService.getIngredient().subscribe(pizzas => {
      this.pizzaF.ingredient = [];
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < this.pizzaF.ingredient.length; i++) {
        // tslint:disable-next-line:prefer-for-of
        for (let j = 0; j < pizzas.length; j++) {
          if (this.pizzaF.ingredient[i] === pizzas[j].id) {
            console.log('coucou');
            this.pizzaF.ingredient.push(pizzas[j].nom);
          }
        }
      }
    });
  }

  ngOnInit() {

  }

}
